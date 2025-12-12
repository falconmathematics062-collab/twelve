
import React, { useState } from 'react';
import ReactMarkdown from 'react-markdown';
import { SolutionDisplay } from './SolutionDisplay';
import { solveTextProblemStream, getHintStream } from '../services/geminiService';

interface ExerciseViewProps {
  chapter: any;
  exercise: { id: string; text: string; sectionTitle: string };
  onBack: () => void;
}

export function ExerciseView({ chapter, exercise, onBack }: ExerciseViewProps): React.JSX.Element {
  const [solution, setSolution] = useState('');
  const [hints, setHints] = useState<{level: number, text: string}[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');

  const handleSolveClick = async () => {
    setIsLoading(true);
    setError('');
    setSolution('');
    // Clear hints when full solution is requested
    setHints([]); 
    
    try {
      const chapterContext = {
        number: chapter.chapter_number,
        title: chapter.chapter_title,
      };
      
      const stream = solveTextProblemStream(exercise, chapterContext);
      
      for await (const chunk of stream) {
        setSolution(prev => prev + chunk);
      }
      
    } catch (e) {
      if (e instanceof Error) {
        setError(e.message);
      } else {
        setError('An unknown error occurred.');
      }
    } finally {
      setIsLoading(false);
    }
  };

  const handleHintClick = async (level: 1 | 2 | 3 | 4) => {
    setIsLoading(true);
    setError('');
    // Ensure we don't have this hint already (though UI should prevent it)
    if (hints.some(h => h.level === level)) {
        setIsLoading(false);
        return;
    }

    try {
        const chapterInfo = `Chapter ${chapter.chapter_number}: ${chapter.chapter_title}, Section: ${exercise.sectionTitle}`;
        const stream = getHintStream(exercise.text, null, null, level, chapterInfo);
        
        let hintText = "";
        // We'll update a temporary hint object in the state or just accumulate string
        // Since streaming hints are usually short, we can accumulate and then set state, 
        // or set state to show loading placeholder then update.
        // Let's stream it into a new hint entry.
        
        setHints(prev => [...prev, { level, text: '' }]);
        
        for await (const chunk of stream) {
            hintText += chunk;
            setHints(prev => prev.map(h => h.level === level ? { ...h, text: hintText } : h));
        }
    } catch (e) {
        setError('Could not get hint.');
    } finally {
        setIsLoading(false);
    }
  };

  return (
    <div className="space-y-6">
      <div>
        <button onClick={onBack} className="mb-4 text-blue-600 dark:text-blue-400 hover:underline font-semibold">
          &larr; Back to Chapter Exercises
        </button>
        <h3 className="text-xl md:text-2xl font-bold text-slate-800 dark:text-slate-200">
          {exercise.sectionTitle} - Question {exercise.id}
        </h3>
      </div>
      
      <div className="p-6 bg-slate-50 dark:bg-slate-700/30 rounded-lg prose prose-slate dark:prose-invert max-w-none">
        <ReactMarkdown>
          {exercise.text}
        </ReactMarkdown>
      </div>

      {/* Hint Buttons */}
      <div className="flex flex-wrap gap-3 justify-center">
        <button 
            onClick={() => handleHintClick(1)}
            disabled={isLoading || !!solution || hints.some(h => h.level === 1)}
            className="px-4 py-2 bg-yellow-100 dark:bg-yellow-900/30 text-yellow-800 dark:text-yellow-200 rounded-lg hover:bg-yellow-200 dark:hover:bg-yellow-900/50 disabled:opacity-50 transition-colors font-medium border border-yellow-200 dark:border-yellow-800"
        >
            💡 Light Hint
        </button>
        <button 
            onClick={() => handleHintClick(2)}
            disabled={isLoading || !!solution || hints.some(h => h.level === 2)}
            className="px-4 py-2 bg-orange-100 dark:bg-orange-900/30 text-orange-800 dark:text-orange-200 rounded-lg hover:bg-orange-200 dark:hover:bg-orange-900/50 disabled:opacity-50 transition-colors font-medium border border-orange-200 dark:border-orange-800"
        >
            📐 Medium Hint
        </button>
        <button 
            onClick={() => handleHintClick(3)}
            disabled={isLoading || !!solution || hints.some(h => h.level === 3)}
            className="px-4 py-2 bg-indigo-100 dark:bg-indigo-900/30 text-indigo-800 dark:text-indigo-200 rounded-lg hover:bg-indigo-200 dark:hover:bg-indigo-900/50 disabled:opacity-50 transition-colors font-medium border border-indigo-200 dark:border-indigo-800"
        >
            📝 Strong Hint
        </button>
        <button 
            onClick={() => handleHintClick(4)}
            disabled={isLoading || !!solution || hints.some(h => h.level === 4)}
            className="px-4 py-2 bg-teal-100 dark:bg-teal-900/30 text-teal-800 dark:text-teal-200 rounded-lg hover:bg-teal-200 dark:hover:bg-teal-900/50 disabled:opacity-50 transition-colors font-medium border border-teal-200 dark:border-teal-800"
        >
            👣 One Step
        </button>
      </div>

      <div className="text-center">
        <button 
          onClick={handleSolveClick}
          disabled={isLoading}
          className="bg-green-600 text-white font-bold py-3 px-8 rounded-lg hover:bg-green-700 transition-colors disabled:bg-slate-400 disabled:cursor-not-allowed shadow-md"
        >
          {isLoading ? 'Thinking...' : 'Show Full Solution'}
        </button>
      </div>
      
      {/* Display Hints */}
      {hints.length > 0 && !solution && (
        <div className="space-y-4 mt-6">
            {hints.sort((a,b) => a.level - b.level).map((hint) => (
                <div key={hint.level} className="p-4 rounded-lg border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 shadow-sm animate-in fade-in slide-in-from-bottom-2">
                    <h4 className="font-bold text-sm text-slate-500 dark:text-slate-400 mb-2 uppercase tracking-wide">
                        {hint.level === 1 && 'Level 1: Light Hint'}
                        {hint.level === 2 && 'Level 2: Medium Hint'}
                        {hint.level === 3 && 'Level 3: Strong Hint'}
                        {hint.level === 4 && 'Level 4: Next Step'}
                    </h4>
                    <div className="prose prose-sm prose-slate dark:prose-invert max-w-none">
                        <ReactMarkdown>{hint.text}</ReactMarkdown>
                    </div>
                </div>
            ))}
        </div>
      )}

      <SolutionDisplay isLoading={isLoading && !!solution && !solution} solution={solution} error={error} />
    </div>
  );
}

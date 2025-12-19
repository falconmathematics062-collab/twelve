
import React, { useEffect, useState } from 'react';
import ReactMarkdown from 'react-markdown';
import { SolutionDisplay } from './SolutionDisplay';
import { solveCustomProblemStream, getHintStream } from '../services/geminiService';
import { QuestionTextContent } from './QuestionTextContent'; // New import

interface CustomSolutionViewProps {
  text: string;
  imageFile: File | null;
  mode: 'solve' | 'mistake';
  onBack: () => void;
}

export function CustomSolutionView({ text, imageFile, mode, onBack }: CustomSolutionViewProps): React.JSX.Element {
  const [solution, setSolution] = useState('');
  const [hints, setHints] = useState<{level: number, text: string}[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');
  const [previewUrl, setPreviewUrl] = useState<string | null>(null);

  useEffect(() => {
    if (imageFile) {
        const reader = new FileReader();
        reader.onloadend = () => {
            setPreviewUrl(reader.result as string);
        };
        reader.readAsDataURL(imageFile);
    }
  }, [imageFile]);
  
  // Auto-start solving only if NO hints are requested yet, or handle manual trigger?
  // Current app auto-solves on load. 
  // Modified behavior: If mode is 'mistake', we might still want auto-solve. 
  // If mode is 'solve', user might want hints first. 
  // Let's auto-solve by default (as it was) but maybe collapse it or allow hints before?
  // No, if I auto-solve, the API cost is incurred and text is shown.
  // Let's change to: Show question, then ask "Get Solution" or "Get Hint".
  
  /* 
     PREVIOUS BEHAVIOR: Auto-solve on mount.
     NEW BEHAVIOR: Wait for user action. 
  */

  const getBase64 = async (file: File): Promise<string> => {
      return new Promise<string>((resolve, reject) => {
          const reader = new FileReader();
          reader.onloadend = () => {
              const base64String = reader.result as string;
              const base64Content = base64String.split(',')[1]; 
              resolve(base64Content);
          };
          reader.onerror = reject;
          reader.readAsDataURL(file);
      });
  };

  const handleSolve = async () => {
      setIsLoading(true);
      setError('');
      setSolution('');
      setHints([]); // Clear hints
      
      try {
        let base64Data: string | null = null;
        let mimeType: string | null = null;

        if (imageFile) {
            base64Data = await getBase64(imageFile);
            mimeType = imageFile.type;
        }

        const stream = solveCustomProblemStream(text, base64Data, mimeType, mode);
        
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
    if (hints.some(h => h.level === level)) {
        setIsLoading(false);
        return;
    }

    try {
        let base64Data: string | null = null;
        let mimeType: string | null = null;

        if (imageFile) {
            base64Data = await getBase64(imageFile);
            mimeType = imageFile.type;
        }

        const stream = getHintStream(text, base64Data, mimeType, level);
        
        let hintText = "";
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

  // Trigger solve automatically only if it's 'mistake' mode (as that's usually direct feedback)
  // For 'solve' mode, we let user choose hints or solve.
  useEffect(() => {
      if (mode === 'mistake') {
          handleSolve();
      }
      // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className="space-y-6">
      <div>
        <button onClick={onBack} className="mb-4 text-blue-600 dark:text-blue-400 hover:underline font-semibold">
          &larr; Back to Home
        </button>
        <h3 className="text-xl md:text-2xl font-bold text-slate-800 dark:text-slate-200">
          {mode === 'mistake' ? 'Mistake Analysis' : 'Custom Problem'}
        </h3>
      </div>
      
      <div className="p-6 bg-white dark:bg-slate-800 rounded-2xl shadow-lg border border-slate-200 dark:border-slate-700 space-y-4">
        {text && <QuestionTextContent content={text} />}
        {previewUrl && (
            <img src={previewUrl} alt="Your question" className="max-h-64 rounded-lg border border-slate-200 dark:border-slate-600" />
        )}
      </div>

      {mode === 'solve' && (
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
      )}

      {/* Action Button for Solve - Only show if not solved and not in auto-solve mode */}
      {mode === 'solve' && !solution && (
          <div className="text-center mt-4">
            <button 
                onClick={handleSolve}
                disabled={isLoading}
                className="bg-green-600 text-white font-bold py-3 px-8 rounded-lg hover:bg-green-700 transition-colors disabled:bg-slate-400 disabled:cursor-not-allowed shadow-md"
            >
                {isLoading ? 'Thinking...' : 'Get Full Solution'}
            </button>
          </div>
      )}

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

      <SolutionDisplay isLoading={isLoading && !solution && hints.length === 0} solution={solution} error={error} />
    </div>
  );
}

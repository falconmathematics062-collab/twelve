
import React, { useEffect, useState } from 'react';
import ReactMarkdown from 'react-markdown';
import { generateQuiz, QuizQuestion, getHintStream } from '../services/geminiService';
import { SpinnerIcon } from './icons/SpinnerIcon';

interface QuizViewProps {
  chapterTitle: string;
  onBack: () => void;
}

export function QuizView({ chapterTitle, onBack }: QuizViewProps): React.JSX.Element {
  const [questions, setQuestions] = useState<QuizQuestion[]>([]);
  const [loading, setLoading] = useState(true);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [selectedAnswers, setSelectedAnswers] = useState<(number | null)[]>([]);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [score, setScore] = useState(0);
  
  // Hint State
  const [hints, setHints] = useState<{level: number, text: string}[]>([]);
  const [hintLoading, setHintLoading] = useState(false);

  useEffect(() => {
    let isMounted = true;
    const fetchQuiz = async () => {
      setLoading(true);
      const data = await generateQuiz(chapterTitle);
      if (isMounted) {
        setQuestions(data);
        setSelectedAnswers(new Array(data.length).fill(null));
        setLoading(false);
      }
    };
    fetchQuiz();
    return () => { isMounted = false; };
  }, [chapterTitle]);

  // Reset hints when moving to a new question
  useEffect(() => {
    setHints([]);
  }, [currentQuestionIndex]);

  const handleOptionSelect = (optionIndex: number) => {
    if (isSubmitted) return;
    const newAnswers = [...selectedAnswers];
    newAnswers[currentQuestionIndex] = optionIndex;
    setSelectedAnswers(newAnswers);
  };

  const handleSubmit = () => {
    let newScore = 0;
    questions.forEach((q, idx) => {
      if (selectedAnswers[idx] === q.correctAnswer) {
        newScore++;
      }
    });
    setScore(newScore);
    setIsSubmitted(true);
  };

  const handleNext = () => {
    if (currentQuestionIndex < questions.length - 1) {
      setCurrentQuestionIndex(prev => prev + 1);
    }
  };

  const handlePrev = () => {
    if (currentQuestionIndex > 0) {
      setCurrentQuestionIndex(prev => prev - 1);
    }
  };

  const handleHintClick = async (level: 1 | 2 | 3 | 4) => {
    if (hintLoading || hints.some(h => h.level === level) || isSubmitted) return;
    
    setHintLoading(true);
    const currentQ = questions[currentQuestionIndex];
    
    try {
        const stream = getHintStream(
            currentQ.question, 
            null, 
            null, 
            level, 
            `Chapter: ${chapterTitle}. Context: This is a multiple choice quiz question.`
        );
        
        let hintText = "";
        setHints(prev => [...prev, { level, text: '' }]);
        
        for await (const chunk of stream) {
            hintText += chunk;
            setHints(prev => prev.map(h => h.level === level ? { ...h, text: hintText } : h));
        }
    } catch (e) {
        console.error("Error fetching hint", e);
    } finally {
        setHintLoading(false);
    }
  };

  if (loading) {
    return (
      <div className="flex flex-col justify-center items-center py-20">
        <SpinnerIcon />
        <p className="mt-4 text-slate-600 dark:text-slate-300 animate-pulse">
          Generating 10 questions for {chapterTitle}...
        </p>
      </div>
    );
  }

  if (questions.length === 0) {
    return (
      <div className="text-center py-10">
        <p className="text-red-500">Failed to load quiz. Please try again.</p>
        <button onClick={onBack} className="mt-4 text-blue-600 hover:underline">Go Back</button>
      </div>
    );
  }

  const currentQ = questions[currentQuestionIndex];

  return (
    <div className="space-y-6 pb-20">
      <div className="flex justify-between items-center">
        <button onClick={onBack} className="text-blue-600 dark:text-blue-400 hover:underline font-semibold text-sm">
          &larr; Exit Quiz
        </button>
        <div className="text-sm font-medium text-slate-500 dark:text-slate-400">
          Question {currentQuestionIndex + 1} of {questions.length}
        </div>
      </div>

      {!isSubmitted ? (
        <div className="space-y-6">
          <div className="bg-white dark:bg-slate-800 p-6 rounded-xl shadow-sm border border-slate-200 dark:border-slate-700">
            <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-4">
              {currentQ.question}
            </h3>
            <div className="space-y-3">
              {currentQ.options.map((opt, idx) => (
                <button
                  key={idx}
                  onClick={() => handleOptionSelect(idx)}
                  className={`w-full text-left p-4 rounded-lg border transition-all ${
                    selectedAnswers[currentQuestionIndex] === idx
                      ? 'border-purple-500 bg-purple-50 dark:bg-purple-900/20 ring-1 ring-purple-500'
                      : 'border-slate-200 dark:border-slate-700 hover:bg-slate-50 dark:hover:bg-slate-700/50'
                  }`}
                >
                  <div className="flex items-center">
                    <span className={`w-6 h-6 flex items-center justify-center rounded-full text-xs border mr-3 ${
                         selectedAnswers[currentQuestionIndex] === idx
                         ? 'bg-purple-600 text-white border-purple-600'
                         : 'text-slate-500 border-slate-300'
                    }`}>
                      {String.fromCharCode(65 + idx)}
                    </span>
                    <span className="text-slate-700 dark:text-slate-200">{opt}</span>
                  </div>
                </button>
              ))}
            </div>
          </div>

          {/* Hint Buttons */}
          <div className="flex flex-wrap gap-3 justify-center">
            <button 
                onClick={() => handleHintClick(1)}
                disabled={hintLoading || hints.some(h => h.level === 1) || isSubmitted}
                className="px-4 py-2 bg-yellow-100 dark:bg-yellow-900/30 text-yellow-800 dark:text-yellow-200 rounded-lg hover:bg-yellow-200 dark:hover:bg-yellow-900/50 disabled:opacity-50 transition-colors font-medium border border-yellow-200 dark:border-yellow-800"
            >
                💡 Light Hint
            </button>
            <button 
                onClick={() => handleHintClick(2)}
                disabled={hintLoading || hints.some(h => h.level === 2) || isSubmitted}
                className="px-4 py-2 bg-orange-100 dark:bg-orange-900/30 text-orange-800 dark:text-orange-200 rounded-lg hover:bg-orange-200 dark:hover:bg-orange-900/50 disabled:opacity-50 transition-colors font-medium border border-orange-200 dark:border-orange-800"
            >
                📐 Medium Hint
            </button>
            <button 
                onClick={() => handleHintClick(3)}
                disabled={hintLoading || hints.some(h => h.level === 3) || isSubmitted}
                className="px-4 py-2 bg-indigo-100 dark:bg-indigo-900/30 text-indigo-800 dark:text-indigo-200 rounded-lg hover:bg-indigo-200 dark:hover:bg-indigo-900/50 disabled:opacity-50 transition-colors font-medium border border-indigo-200 dark:border-indigo-800"
            >
                📝 Strong Hint
            </button>
            <button 
                onClick={() => handleHintClick(4)}
                disabled={hintLoading || hints.some(h => h.level === 4) || isSubmitted}
                className="px-4 py-2 bg-teal-100 dark:bg-teal-900/30 text-teal-800 dark:text-teal-200 rounded-lg hover:bg-teal-200 dark:hover:bg-teal-900/50 disabled:opacity-50 transition-colors font-medium border border-teal-200 dark:border-teal-800"
            >
                👣 One Step
            </button>
          </div>

          {/* Display Hints */}
          {hints.length > 0 && (
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

          <div className="flex justify-between mt-6">
            <button
              onClick={handlePrev}
              disabled={currentQuestionIndex === 0}
              className="px-4 py-2 rounded-lg text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800 disabled:opacity-50"
            >
              Previous
            </button>
            
            {currentQuestionIndex === questions.length - 1 ? (
              <button
                onClick={handleSubmit}
                className="px-6 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 font-semibold"
              >
                Submit Quiz
              </button>
            ) : (
              <button
                onClick={handleNext}
                className="px-6 py-2 bg-purple-600 text-white rounded-lg hover:bg-purple-700 font-semibold"
              >
                Next
              </button>
            )}
          </div>
        </div>
      ) : (
        <div className="space-y-8">
          <div className="text-center bg-purple-100 dark:bg-purple-900/30 p-8 rounded-2xl">
            <h2 className="text-3xl font-bold text-purple-800 dark:text-purple-200 mb-2">Quiz Completed!</h2>
            <p className="text-xl text-slate-700 dark:text-slate-300">
              Your Score: <span className="font-bold">{score} / {questions.length}</span>
            </p>
          </div>

          <div className="space-y-6">
            {questions.map((q, idx) => {
              const isCorrect = selectedAnswers[idx] === q.correctAnswer;
              return (
                <div key={q.id} className={`p-6 rounded-xl border ${isCorrect ? 'border-green-200 bg-green-50 dark:bg-green-900/10 dark:border-green-800' : 'border-red-200 bg-red-50 dark:bg-red-900/10 dark:border-red-800'}`}>
                  <div className="flex justify-between items-start mb-2">
                    <span className="font-bold text-slate-700 dark:text-slate-300">Q{idx + 1}</span>
                    <span className={`text-sm font-semibold px-2 py-1 rounded ${isCorrect ? 'bg-green-100 text-green-700 dark:bg-green-900 dark:text-green-300' : 'bg-red-100 text-red-700 dark:bg-red-900 dark:text-red-300'}`}>
                      {isCorrect ? 'Correct' : 'Incorrect'}
                    </span>
                  </div>
                  <p className="mb-4 text-slate-800 dark:text-slate-200 font-medium">{q.question}</p>
                  
                  <div className="space-y-2 mb-4 text-sm">
                    <p className={`p-2 rounded ${selectedAnswers[idx] === q.correctAnswer ? 'bg-green-200 dark:bg-green-800/50' : 'bg-red-200 dark:bg-red-800/50'}`}>
                      <span className="font-semibold">Your Answer:</span> {q.options[selectedAnswers[idx] ?? 0] || 'Skipped'}
                    </p>
                    {!isCorrect && (
                      <p className="p-2 rounded bg-green-200 dark:bg-green-800/50">
                        <span className="font-semibold">Correct Answer:</span> {q.options[q.correctAnswer]}
                      </p>
                    )}
                  </div>
                  
                  <div className="text-sm text-slate-600 dark:text-slate-400 bg-white dark:bg-slate-800 p-3 rounded-lg">
                    <span className="font-semibold block mb-1">Explanation:</span>
                    {q.explanation}
                  </div>
                </div>
              );
            })}
          </div>
          
          <button
             onClick={onBack}
             className="w-full py-3 bg-slate-800 dark:bg-slate-700 text-white rounded-xl font-bold hover:bg-slate-900 dark:hover:bg-slate-600"
          >
            Take Another Quiz
          </button>
        </div>
      )}
    </div>
  );
}

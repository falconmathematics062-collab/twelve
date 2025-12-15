
import React, { useEffect, useState } from 'react';
import ReactMarkdown from 'react-markdown';
import { generateGameContent, GameType, QuizQuestion, TrueFalseQuestion, MatchPair, FixBrokenGameData, PredictNextGameData, DerivationGameData } from '../services/geminiService';
import { SpinnerIcon } from './icons/SpinnerIcon';
import { QuizIcon } from './icons/QuizIcon';

interface QuizViewProps {
  chapter: any; // Changed from chapterTitle to full chapter object
  onBack: () => void;
}

// --- Sub-Components for different Game Types ---

const TrueFalseGame = ({ data, onFinish }: { data: TrueFalseQuestion[], onFinish: () => void }) => {
    const [index, setIndex] = useState(0);
    const [result, setResult] = useState<'correct' | 'incorrect' | null>(null);
    const [score, setScore] = useState(0);

    const handleAnswer = (userSaidTrue: boolean) => {
        if (result !== null) return; // Prevent double click
        const isCorrect = userSaidTrue === data[index].isTrue;
        setResult(isCorrect ? 'correct' : 'incorrect');
        if (isCorrect) setScore(s => s + 1);
    };

    const nextQuestion = () => {
        setResult(null);
        if (index < data.length - 1) setIndex(index + 1);
        else onFinish();
    };

    const currentQ = data[index];

    return (
        <div className="max-w-xl mx-auto py-8">
            <div className="text-center mb-8">
                <span className="text-sm font-bold text-slate-400">Question {index + 1} of {data.length}</span>
                <div className="w-full bg-slate-200 dark:bg-slate-700 h-2 rounded-full mt-2 overflow-hidden">
                    <div className="bg-purple-500 h-full transition-all duration-300" style={{ width: `${((index) / data.length) * 100}%` }}></div>
                </div>
            </div>

            <div className="bg-white dark:bg-slate-800 p-8 rounded-2xl shadow-lg border border-slate-100 dark:border-slate-700 min-h-[200px] flex items-center justify-center">
                <h3 className="text-xl md:text-2xl font-medium text-center text-slate-800 dark:text-slate-100 leading-relaxed">
                    {currentQ.statement}
                </h3>
            </div>

            {result === null ? (
                <div className="grid grid-cols-2 gap-6 mt-8">
                    <button 
                        onClick={() => handleAnswer(true)}
                        className="py-4 rounded-xl bg-green-500 text-white font-bold text-lg hover:bg-green-600 transition-transform active:scale-95 shadow-lg shadow-green-500/30"
                    >
                        TRUE
                    </button>
                    <button 
                        onClick={() => handleAnswer(false)}
                        className="py-4 rounded-xl bg-red-500 text-white font-bold text-lg hover:bg-red-600 transition-transform active:scale-95 shadow-lg shadow-red-500/30"
                    >
                        FALSE
                    </button>
                </div>
            ) : (
                <div className={`mt-8 p-6 rounded-xl animate-in fade-in slide-in-from-bottom-4 ${result === 'correct' ? 'bg-green-100 dark:bg-green-900/30 border border-green-200' : 'bg-red-100 dark:bg-red-900/30 border border-red-200'}`}>
                    <div className="flex items-center gap-3 mb-2">
                        {result === 'correct' ? (
                            <span className="text-green-700 dark:text-green-300 font-bold text-lg">Correct!</span>
                        ) : (
                            <span className="text-red-700 dark:text-red-300 font-bold text-lg">Incorrect!</span>
                        )}
                        <span className="text-slate-500 dark:text-slate-400 text-sm">It is {currentQ.isTrue ? 'True' : 'False'}.</span>
                    </div>
                    <p className="text-slate-700 dark:text-slate-300">{currentQ.explanation}</p>
                    <button 
                        onClick={nextQuestion}
                        className="mt-4 w-full py-3 bg-slate-800 dark:bg-slate-600 text-white rounded-lg font-semibold hover:bg-slate-900 transition-colors"
                    >
                        {index === data.length - 1 ? 'Finish' : 'Next Question'}
                    </button>
                </div>
            )}
        </div>
    );
};

const MatchGame = ({ data, onFinish }: { data: MatchPair[], onFinish: () => void }) => {
    const [leftItems, setLeftItems] = useState<{id: number, text: string}[]>([]);
    const [rightItems, setRightItems] = useState<{id: number, text: string}[]>([]);
    const [selectedLeft, setSelectedLeft] = useState<number | null>(null);
    const [matches, setMatches] = useState<Set<number>>(new Set());
    const [wrongPair, setWrongPair] = useState<{left: number, right: number} | null>(null);

    useEffect(() => {
        setLeftItems(data.map(d => ({ id: d.id, text: d.left })));
        const shuffledRight = [...data].sort(() => Math.random() - 0.5).map(d => ({ id: d.id, text: d.right }));
        setRightItems(shuffledRight);
    }, [data]);

    const handleLeftClick = (id: number) => {
        if (matches.has(id)) return;
        setSelectedLeft(id);
        setWrongPair(null);
    };

    const handleRightClick = (id: number) => {
        if (matches.has(id)) return;
        if (selectedLeft === null) return;

        if (selectedLeft === id) {
            const newMatches = new Set(matches);
            newMatches.add(id);
            setMatches(newMatches);
            setSelectedLeft(null);
            if (newMatches.size === data.length) {
                setTimeout(onFinish, 1000);
            }
        } else {
            setWrongPair({ left: selectedLeft, right: id });
            setTimeout(() => {
                setWrongPair(null);
                setSelectedLeft(null);
            }, 800);
        }
    };

    return (
        <div className="py-4">
            <p className="text-center text-slate-500 mb-6 text-sm">Tap a left item, then tap its matching right item.</p>
            <div className="grid grid-cols-2 gap-8 md:gap-12">
                <div className="space-y-4">
                    {leftItems.map(item => {
                        const isMatched = matches.has(item.id);
                        const isSelected = selectedLeft === item.id;
                        const isWrong = wrongPair?.left === item.id;
                        
                        let baseStyle = "p-4 rounded-xl border-2 cursor-pointer transition-all duration-200 text-sm md:text-base min-h-[80px] flex items-center";
                        if (isMatched) baseStyle += " bg-green-100 border-green-400 text-green-800 opacity-50";
                        else if (isWrong) baseStyle += " bg-red-100 border-red-400 text-red-800 animate-shake";
                        else if (isSelected) baseStyle += " bg-blue-100 border-blue-500 text-blue-900 shadow-md transform scale-105";
                        else baseStyle += " bg-white dark:bg-slate-800 border-slate-200 dark:border-slate-700 hover:border-blue-300 dark:text-slate-200";

                        return (
                            <div key={item.id} onClick={() => handleLeftClick(item.id)} className={baseStyle}>
                                {item.text}
                            </div>
                        );
                    })}
                </div>
                <div className="space-y-4">
                    {rightItems.map(item => {
                        const isMatched = matches.has(item.id);
                        const isWrong = wrongPair?.right === item.id;

                        let baseStyle = "p-4 rounded-xl border-2 cursor-pointer transition-all duration-200 text-sm md:text-base min-h-[80px] flex items-center justify-end text-right";
                        if (isMatched) baseStyle += " bg-green-100 border-green-400 text-green-800 opacity-50";
                        else if (isWrong) baseStyle += " bg-red-100 border-red-400 text-red-800 animate-shake";
                        else baseStyle += " bg-white dark:bg-slate-800 border-slate-200 dark:border-slate-700 hover:border-blue-300 dark:text-slate-200";

                        return (
                            <div key={item.id} onClick={() => handleRightClick(item.id)} className={baseStyle}>
                                {item.text}
                            </div>
                        );
                    })}
                </div>
            </div>
        </div>
    );
};

const MCQGame = ({ data, onFinish }: { data: QuizQuestion[], onFinish: () => void }) => {
    const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
    const [selectedAnswers, setSelectedAnswers] = useState<(number | null)[]>(new Array(data.length).fill(null));
    const [isSubmitted, setIsSubmitted] = useState(false);
    const [score, setScore] = useState(0);

    const handleOptionSelect = (optionIndex: number) => {
        if (isSubmitted) return;
        const newAnswers = [...selectedAnswers];
        newAnswers[currentQuestionIndex] = optionIndex;
        setSelectedAnswers(newAnswers);
    };

    const handleNext = () => {
        if (currentQuestionIndex < data.length - 1) setCurrentQuestionIndex(prev => prev + 1);
    };

    const handlePrev = () => {
        if (currentQuestionIndex > 0) setCurrentQuestionIndex(prev => prev - 1);
    };

    const handleSubmit = () => {
        let newScore = 0;
        data.forEach((q, idx) => {
            if (selectedAnswers[idx] === q.correctAnswer) newScore++;
        });
        setScore(newScore);
        setIsSubmitted(true);
    };

    if (isSubmitted) {
        return (
            <div className="space-y-8 animate-in fade-in">
                <div className="text-center bg-purple-100 dark:bg-purple-900/30 p-8 rounded-2xl">
                    <h2 className="text-3xl font-bold text-purple-800 dark:text-purple-200 mb-2">Quiz Completed!</h2>
                    <p className="text-xl text-slate-700 dark:text-slate-300">
                        Your Score: <span className="font-bold">{score} / {data.length}</span>
                    </p>
                </div>
                <div className="space-y-6">
                    {data.map((q, idx) => {
                        const isCorrect = selectedAnswers[idx] === q.correctAnswer;
                        return (
                            <div key={q.id} className={`p-6 rounded-xl border ${isCorrect ? 'border-green-200 bg-green-50 dark:bg-green-900/10' : 'border-red-200 bg-red-50 dark:bg-red-900/10'}`}>
                                <div className="flex justify-between items-start mb-2">
                                    <span className="font-bold text-slate-700 dark:text-slate-300">Q{idx + 1}</span>
                                    <span className={`text-sm font-semibold px-2 py-1 rounded ${isCorrect ? 'bg-green-100 text-green-700' : 'bg-red-100 text-red-700'}`}>{isCorrect ? 'Correct' : 'Incorrect'}</span>
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
                <button onClick={onFinish} className="w-full py-3 bg-slate-800 text-white rounded-xl font-bold">Back to Menu</button>
            </div>
        );
    }

    const currentQ = data[currentQuestionIndex];

    return (
        <div>
            <div className="flex justify-between items-center mb-6">
                <div className="text-sm font-medium text-slate-500">Question {currentQuestionIndex + 1} / {data.length}</div>
            </div>
            <div className="bg-white dark:bg-slate-800 p-6 rounded-xl shadow-sm border border-slate-200 dark:border-slate-700">
                <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-4">{currentQ.question}</h3>
                <div className="space-y-3">
                    {currentQ.options.map((opt, idx) => (
                        <button
                            key={idx}
                            onClick={() => handleOptionSelect(idx)}
                            className={`w-full text-left p-4 rounded-lg border transition-all ${selectedAnswers[currentQuestionIndex] === idx ? 'border-purple-500 bg-purple-50 dark:bg-purple-900/20 ring-1 ring-purple-500' : 'border-slate-200 dark:border-slate-700 hover:bg-slate-50 dark:hover:bg-slate-700/50'}`}
                        >
                            <div className="flex items-center">
                                <span className={`w-6 h-6 flex items-center justify-center rounded-full text-xs border mr-3 ${selectedAnswers[currentQuestionIndex] === idx ? 'bg-purple-600 text-white border-purple-600' : 'text-slate-500 border-slate-300'}`}>{String.fromCharCode(65 + idx)}</span>
                                <span className="text-slate-700 dark:text-slate-200">{opt}</span>
                            </div>
                        </button>
                    ))}
                </div>
            </div>
            <div className="flex justify-between mt-6">
                <button onClick={handlePrev} disabled={currentQuestionIndex === 0} className="px-4 py-2 rounded-lg text-slate-600 hover:bg-slate-100 disabled:opacity-50">Previous</button>
                {currentQuestionIndex === data.length - 1 ? (
                    <button onClick={handleSubmit} className="px-6 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 font-semibold">Submit Quiz</button>
                ) : (
                    <button onClick={handleNext} className="px-6 py-2 bg-purple-600 text-white rounded-lg hover:bg-purple-700 font-semibold">Next</button>
                )}
            </div>
        </div>
    );
};

const FixBrokenGame = ({ data, onFinish }: { data: FixBrokenGameData[], onFinish: () => void }) => {
    const [index, setIndex] = useState(0);
    const [solved, setSolved] = useState(false);
    const [feedback, setFeedback] = useState<{correct: boolean, text: string} | null>(null);

    const handleStepClick = (step: any) => {
        if (solved) return;
        if (step.isIncorrect) {
            setFeedback({ correct: true, text: `Correct! You found the mistake. ${step.correction}` });
            setSolved(true);
        } else {
            setFeedback({ correct: false, text: "This step seems correct. Look closer!" });
        }
    };

    const nextProblem = () => {
        setSolved(false);
        setFeedback(null);
        if (index < data.length - 1) setIndex(index + 1);
        else onFinish();
    };

    const current = data[index];

    return (
        <div className="max-w-2xl mx-auto space-y-6">
            <div className="bg-red-50 dark:bg-red-900/10 p-4 rounded-lg border border-red-200 dark:border-red-800 text-center">
                <h3 className="font-bold text-red-700 dark:text-red-300">Find the Mistake!</h3>
                <p className="text-sm text-red-600 dark:text-red-400">One step in the solution below is wrong. Tap it.</p>
            </div>

            <div className="bg-white dark:bg-slate-800 p-6 rounded-xl shadow-lg border border-slate-200 dark:border-slate-700">
                <h4 className="font-bold text-lg mb-4 text-slate-800 dark:text-slate-100">{current.problem}</h4>
                <div className="space-y-3">
                    {current.steps.map((step) => (
                        <div 
                            key={step.id} 
                            onClick={() => handleStepClick(step)}
                            className={`p-3 rounded-lg border cursor-pointer transition-all ${
                                solved && step.isIncorrect 
                                    ? 'bg-red-100 border-red-500 text-red-800' 
                                    : 'border-slate-200 dark:border-slate-700 hover:bg-slate-50 dark:hover:bg-slate-700'
                            }`}
                        >
                            <span className="font-mono font-bold text-slate-400 mr-3">Step {step.id}</span>
                            <span className="text-slate-700 dark:text-slate-300">{step.text}</span>
                        </div>
                    ))}
                </div>
            </div>

            {feedback && (
                <div className={`p-4 rounded-lg animate-in fade-in slide-in-from-bottom-2 ${feedback.correct ? 'bg-green-100 text-green-800 border border-green-300' : 'bg-orange-100 text-orange-800 border border-orange-300'}`}>
                    <p className="font-bold">{feedback.text}</p>
                    {feedback.correct && (
                        <div className="mt-2 pt-2 border-t border-green-200">
                            <p className="text-sm font-semibold">Final Answer: {current.finalAnswer}</p>
                            <button onClick={nextProblem} className="mt-3 px-4 py-2 bg-green-600 text-white rounded-lg text-sm font-bold shadow-md hover:bg-green-700 transition-colors">Next Challenge &rarr;</button>
                        </div>
                    )}
                </div>
            )}
        </div>
    );
};

const PredictNextGame = ({ data, onFinish }: { data: PredictNextGameData[], onFinish: () => void }) => {
    const [index, setIndex] = useState(0);
    const [solved, setSolved] = useState(false);
    const [selectedOption, setSelectedOption] = useState<number | null>(null);

    const handleSelect = (idx: number) => {
        if (solved) return;
        setSelectedOption(idx);
        setSolved(true);
    };

    const nextProblem = () => {
        setSolved(false);
        setSelectedOption(null);
        if (index < data.length - 1) setIndex(index + 1);
        else onFinish();
    };

    const current = data[index];

    return (
        <div className="max-w-2xl mx-auto space-y-6">
            <div className="bg-indigo-50 dark:bg-indigo-900/10 p-4 rounded-lg border border-indigo-200 dark:border-indigo-800 text-center">
                <h3 className="font-bold text-indigo-700 dark:text-indigo-300">Predict the Next Step</h3>
                <p className="text-sm text-indigo-600 dark:text-indigo-400">Based on the textbook method, what comes next?</p>
            </div>

            <div className="bg-white dark:bg-slate-800 p-6 rounded-xl shadow-lg border border-slate-200 dark:border-slate-700">
                <h4 className="font-bold text-lg mb-2 text-slate-800 dark:text-slate-100">{current.problem}</h4>
                <div className="space-y-2 mb-6 pl-4 border-l-4 border-indigo-200 dark:border-indigo-800">
                    {current.givenSteps.map((step, i) => (
                        <p key={i} className="text-slate-600 dark:text-slate-400 font-mono text-sm py-1">{step}</p>
                    ))}
                </div>
                
                <h5 className="font-semibold text-slate-700 dark:text-slate-300 mb-3">Choose the next step:</h5>
                <div className="grid gap-3">
                    {current.options.map((opt, i) => {
                        let btnClass = "text-left p-4 rounded-lg border transition-all ";
                        if (solved) {
                            if (i === current.correctOption) btnClass += "bg-green-100 border-green-500 text-green-900";
                            else if (i === selectedOption) btnClass += "bg-red-100 border-red-500 text-red-900";
                            else btnClass += "border-slate-200 dark:border-slate-700 opacity-50";
                        } else {
                            btnClass += "border-slate-200 dark:border-slate-700 hover:border-indigo-500 hover:bg-indigo-50 dark:hover:bg-indigo-900/20";
                        }
                        
                        return (
                            <button 
                                key={i} 
                                onClick={() => handleSelect(i)}
                                disabled={solved}
                                className={btnClass}
                            >
                                {opt}
                            </button>
                        )
                    })}
                </div>
            </div>

            {solved && (
                <div className="p-4 bg-slate-100 dark:bg-slate-800 rounded-lg animate-in fade-in">
                    <p className="text-slate-700 dark:text-slate-300 text-sm">{current.explanation}</p>
                    <button onClick={nextProblem} className="mt-3 w-full py-2 bg-indigo-600 text-white rounded-lg font-bold shadow hover:bg-indigo-700">Continue</button>
                </div>
            )}
        </div>
    );
};

const DerivationGame = ({ data, onFinish }: { data: DerivationGameData[], onFinish: () => void }) => {
    const [index, setIndex] = useState(0);
    const [shuffledSteps, setShuffledSteps] = useState<string[]>([]);
    const [isCorrect, setIsCorrect] = useState(false);

    useEffect(() => {
        // Shuffle steps on load
        const steps = [...data[index].steps];
        setShuffledSteps(steps.sort(() => Math.random() - 0.5));
        setIsCorrect(false);
    }, [index, data]);

    const moveStep = (idx: number, direction: 'up' | 'down') => {
        if (isCorrect) return;
        const newSteps = [...shuffledSteps];
        const swapIdx = direction === 'up' ? idx - 1 : idx + 1;
        if (swapIdx < 0 || swapIdx >= newSteps.length) return;
        
        [newSteps[idx], newSteps[swapIdx]] = [newSteps[swapIdx], newSteps[idx]];
        setShuffledSteps(newSteps);
    };

    const checkOrder = () => {
        const currentString = JSON.stringify(shuffledSteps);
        const correctString = JSON.stringify(data[index].steps);
        if (currentString === correctString) {
            setIsCorrect(true);
        } else {
            alert("Not quite right yet. Follow the textbook derivation flow.");
        }
    };

    const nextProblem = () => {
        if (index < data.length - 1) setIndex(index + 1);
        else onFinish();
    };

    return (
        <div className="max-w-xl mx-auto space-y-6">
            <div className="text-center">
                <h3 className="text-xl font-bold text-slate-800 dark:text-slate-100">Rebuild the Derivation</h3>
                <p className="text-slate-500 dark:text-slate-400">{data[index].title}</p>
            </div>

            <div className="space-y-2">
                {shuffledSteps.map((step, i) => (
                    <div key={i} className={`flex items-center gap-3 p-3 rounded-lg border ${isCorrect ? 'bg-green-50 border-green-200' : 'bg-white dark:bg-slate-800 border-slate-200 dark:border-slate-700'}`}>
                        <div className="flex flex-col gap-1">
                            <button onClick={() => moveStep(i, 'up')} disabled={i === 0 || isCorrect} className="text-slate-400 hover:text-blue-600 disabled:opacity-20">▲</button>
                            <button onClick={() => moveStep(i, 'down')} disabled={i === shuffledSteps.length - 1 || isCorrect} className="text-slate-400 hover:text-blue-600 disabled:opacity-20">▼</button>
                        </div>
                        <div className="flex-1 font-mono text-sm text-slate-700 dark:text-slate-300">{step}</div>
                    </div>
                ))}
            </div>

            {!isCorrect ? (
                <button onClick={checkOrder} className="w-full py-3 bg-blue-600 text-white rounded-lg font-bold hover:bg-blue-700 shadow-lg">Check Order</button>
            ) : (
                <div className="text-center animate-in fade-in zoom-in">
                    <p className="text-green-600 font-bold text-lg mb-3">Perfect! Derivation Reconstructed.</p>
                    <button onClick={nextProblem} className="px-6 py-2 bg-slate-800 text-white rounded-lg font-bold">Next Derivation</button>
                </div>
            )}
        </div>
    );
};

// --- Main View ---

export function QuizView({ chapter, onBack }: QuizViewProps): React.JSX.Element {
  const [gameMode, setGameMode] = useState<GameType | null>(null);
  const [gameData, setGameData] = useState<any>(null);
  const [loading, setLoading] = useState(false);

  const startGame = async (mode: GameType) => {
      setGameMode(mode);
      setLoading(true);
      const data = await generateGameContent(chapter, mode);
      setGameData(data);
      setLoading(false);
  };

  const resetGame = () => {
      setGameMode(null);
      setGameData(null);
  };

  if (!gameMode) {
      return (
          <div className="space-y-8">
              <div className="flex items-center justify-between">
                  <button onClick={onBack} className="text-blue-600 dark:text-blue-400 hover:underline font-semibold text-sm">
                      &larr; Exit Games
                  </button>
                  <h2 className="text-2xl font-bold text-slate-800 dark:text-slate-200">Game Zone</h2>
              </div>
              
              <div className="bg-gradient-to-r from-purple-500 to-indigo-600 rounded-2xl p-8 text-white shadow-lg mb-8">
                  <h3 className="text-3xl font-bold mb-2">{chapter.chapter_title}</h3>
                  <p className="opacity-90">Select a game mode to master this chapter.</p>
              </div>

              {/* Quick Play Section */}
              <div>
                  <h3 className="text-sm font-bold text-slate-500 dark:text-slate-400 uppercase tracking-wider mb-4">Quick Play</h3>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      
                      <button onClick={() => startGame('true_false')} className="group p-4 bg-white dark:bg-slate-800 rounded-xl shadow-sm border border-slate-200 dark:border-slate-700 hover:border-green-500 transition-all flex items-center gap-4">
                          <div className="w-10 h-10 bg-green-100 dark:bg-green-900/30 rounded-full flex items-center justify-center text-green-600">
                              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                          </div>
                          <div className="text-left">
                              <h4 className="font-bold text-slate-800 dark:text-slate-100">True or False</h4>
                              <p className="text-xs text-slate-500">Fact Check</p>
                          </div>
                      </button>

                      <button onClick={() => startGame('match')} className="group p-4 bg-white dark:bg-slate-800 rounded-xl shadow-sm border border-slate-200 dark:border-slate-700 hover:border-orange-500 transition-all flex items-center gap-4">
                          <div className="w-10 h-10 bg-orange-100 dark:bg-orange-900/30 rounded-full flex items-center justify-center text-orange-600">
                              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1" /></svg>
                          </div>
                          <div className="text-left">
                              <h4 className="font-bold text-slate-800 dark:text-slate-100">Match Pairs</h4>
                              <p className="text-xs text-slate-500">Connect Terms</p>
                          </div>
                      </button>

                      <button onClick={() => startGame('mcq')} className="group p-4 bg-white dark:bg-slate-800 rounded-xl shadow-sm border border-slate-200 dark:border-slate-700 hover:border-purple-500 transition-all flex items-center gap-4">
                          <div className="w-10 h-10 bg-purple-100 dark:bg-purple-900/30 rounded-full flex items-center justify-center text-purple-600">
                              <QuizIcon className="w-5 h-5" />
                          </div>
                          <div className="text-left">
                              <h4 className="font-bold text-slate-800 dark:text-slate-100">Quiz Mode</h4>
                              <p className="text-xs text-slate-500">Standard MCQ</p>
                          </div>
                      </button>
                  </div>
              </div>

              {/* Advanced Challenge Section */}
              <div className="pt-4 border-t border-slate-200 dark:border-slate-700">
                  <h3 className="text-sm font-bold text-slate-500 dark:text-slate-400 uppercase tracking-wider mb-4">Advanced Challenge</h3>
                  <div className="grid grid-cols-1 gap-4">
                      <button onClick={() => startGame('fix_broken')} className="group p-5 bg-gradient-to-r from-red-50 to-white dark:from-red-900/10 dark:to-slate-800 rounded-xl shadow-md border border-red-100 dark:border-red-900 hover:shadow-lg transition-all flex items-center justify-between">
                          <div className="flex items-center gap-4">
                              <div className="p-3 bg-red-100 dark:bg-red-900/30 text-red-600 rounded-lg">
                                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" /></svg>
                              </div>
                              <div className="text-left">
                                  <h4 className="font-bold text-slate-900 dark:text-slate-100">Fix the Broken Solution</h4>
                                  <p className="text-xs text-slate-500 dark:text-slate-400">Spot the error in the logic.</p>
                              </div>
                          </div>
                          <span className="text-red-500 font-bold text-sm">Play &rarr;</span>
                      </button>

                      <button onClick={() => startGame('predict_next')} className="group p-5 bg-gradient-to-r from-indigo-50 to-white dark:from-indigo-900/10 dark:to-slate-800 rounded-xl shadow-md border border-indigo-100 dark:border-indigo-900 hover:shadow-lg transition-all flex items-center justify-between">
                          <div className="flex items-center gap-4">
                              <div className="p-3 bg-indigo-100 dark:bg-indigo-900/30 text-indigo-600 rounded-lg">
                                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" /></svg>
                              </div>
                              <div className="text-left">
                                  <h4 className="font-bold text-slate-900 dark:text-slate-100">Predict Next Step</h4>
                                  <p className="text-xs text-slate-500 dark:text-slate-400">What comes next in the derivation?</p>
                              </div>
                          </div>
                          <span className="text-indigo-500 font-bold text-sm">Play &rarr;</span>
                      </button>

                      <button onClick={() => startGame('strategy')} className="group p-5 bg-gradient-to-r from-teal-50 to-white dark:from-teal-900/10 dark:to-slate-800 rounded-xl shadow-md border border-teal-100 dark:border-teal-900 hover:shadow-lg transition-all flex items-center justify-between">
                          <div className="flex items-center gap-4">
                              <div className="p-3 bg-teal-100 dark:bg-teal-900/30 text-teal-600 rounded-lg">
                                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" /></svg>
                              </div>
                              <div className="text-left">
                                  <h4 className="font-bold text-slate-900 dark:text-slate-100">Choose Strategy</h4>
                                  <p className="text-xs text-slate-500 dark:text-slate-400">Pick the best method to solve.</p>
                              </div>
                          </div>
                          <span className="text-teal-500 font-bold text-sm">Play &rarr;</span>
                      </button>

                      <button onClick={() => startGame('derivation')} className="group p-5 bg-gradient-to-r from-amber-50 to-white dark:from-amber-900/10 dark:to-slate-800 rounded-xl shadow-md border border-amber-100 dark:border-amber-900 hover:shadow-lg transition-all flex items-center justify-between">
                          <div className="flex items-center gap-4">
                              <div className="p-3 bg-amber-100 dark:bg-amber-900/30 text-amber-600 rounded-lg">
                                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" /></svg>
                              </div>
                              <div className="text-left">
                                  <h4 className="font-bold text-slate-900 dark:text-slate-100">Rebuild Derivation</h4>
                                  <p className="text-xs text-slate-500 dark:text-slate-400">Order the steps correctly.</p>
                              </div>
                          </div>
                          <span className="text-amber-500 font-bold text-sm">Play &rarr;</span>
                      </button>
                  </div>
              </div>
          </div>
      );
  }

  if (loading) {
      return (
          <div className="flex flex-col justify-center items-center py-20">
              <SpinnerIcon />
              <p className="mt-4 text-slate-600 dark:text-slate-300 animate-pulse">
                  Preparing your {gameMode === 'mcq' ? 'quiz' : gameMode?.replace('_', ' ')}...
              </p>
          </div>
      );
  }

  return (
      <div className="pb-10">
          <button onClick={resetGame} className="text-slate-500 hover:text-slate-800 dark:hover:text-slate-200 mb-4 flex items-center gap-2 text-sm font-semibold">
              &larr; Back to Game Menu
          </button>
          
          <h2 className="text-2xl font-bold text-slate-800 dark:text-slate-100 mb-6 capitalize">
              {gameMode === 'mcq' ? 'Quiz' : gameMode?.replace('_', ' ')}
          </h2>

          {gameMode === 'true_false' && <TrueFalseGame data={gameData} onFinish={resetGame} />}
          {gameMode === 'match' && <MatchGame data={gameData} onFinish={resetGame} />}
          {gameMode === 'mcq' && <MCQGame data={gameData} onFinish={resetGame} />}
          {gameMode === 'fix_broken' && <FixBrokenGame data={gameData} onFinish={resetGame} />}
          {gameMode === 'predict_next' && <PredictNextGame data={gameData} onFinish={resetGame} />}
          {gameMode === 'strategy' && <MCQGame data={gameData} onFinish={resetGame} />} {/* Strategy reuses MCQ UI for now as it fits perfectly */}
          {gameMode === 'derivation' && <DerivationGame data={gameData} onFinish={resetGame} />}
      </div>
  );
}

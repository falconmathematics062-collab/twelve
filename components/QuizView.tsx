
import React, { useEffect, useState } from 'react';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import { generateGameContent, GameType } from '../services/geminiService';
import { SpinnerIcon } from './icons/SpinnerIcon';
import { QuizIcon } from './icons/QuizIcon';

interface QuizViewProps {
  chapter: any;
  onBack: () => void;
}

const MarkdownContent = ({ content, className = "" }: { content: string, className?: string }) => (
    <div className={`prose prose-slate dark:prose-invert max-w-none ${className}`}>
        <ReactMarkdown remarkPlugins={[remarkGfm]}>
            {content}
        </ReactMarkdown>
    </div>
);

const TrueFalseGame = ({ data, onFinish }: { data: any[], onFinish: () => void }) => {
    const [index, setIndex] = useState(0);
    const [result, setResult] = useState<'correct' | 'incorrect' | null>(null);
    const handleAnswer = (userSaidTrue: boolean) => {
        if (result !== null) return;
        setResult(userSaidTrue === data[index].isTrue ? 'correct' : 'incorrect');
    };
    const next = () => {
        setResult(null);
        if (index < data.length - 1) setIndex(index + 1);
        else onFinish();
    };
    return (
        <div className="max-w-xl mx-auto py-4">
            <div className="bg-white dark:bg-slate-800 p-8 rounded-2xl shadow-lg border border-slate-100 dark:border-slate-700 min-h-[200px] flex items-center justify-center mb-6">
                <MarkdownContent content={data[index].statement} className="text-center text-xl font-medium" />
            </div>
            {result === null ? (
                <div className="grid grid-cols-2 gap-4">
                    <button onClick={() => handleAnswer(true)} className="py-4 rounded-xl bg-green-500 text-white font-bold text-lg active:scale-95 transition-transform shadow-md">TRUE</button>
                    <button onClick={() => handleAnswer(false)} className="py-4 rounded-xl bg-red-500 text-white font-bold text-lg active:scale-95 transition-transform shadow-md">FALSE</button>
                </div>
            ) : (
                <div className={`p-6 rounded-xl animate-in fade-in slide-in-from-bottom-2 ${result === 'correct' ? 'bg-green-50 dark:bg-green-900/20 border-green-200' : 'bg-red-50 dark:bg-red-900/20 border-red-200'} border`}>
                    <p className={`font-bold mb-2 ${result === 'correct' ? 'text-green-700 dark:text-green-400' : 'text-red-700 dark:text-red-400'}`}>
                        {result === 'correct' ? 'Correct! 🌟' : 'Not quite. 💡'}
                    </p>
                    <MarkdownContent content={data[index].explanation} className="text-sm mb-4" />
                    <button onClick={next} className="w-full py-3 bg-slate-800 dark:bg-slate-700 text-white rounded-lg font-bold">Next Question</button>
                </div>
            )}
        </div>
    );
};

const MatchGame = ({ data, onFinish }: { data: any[], onFinish: () => void }) => {
    const [leftItems, setLeftItems] = useState<any[]>([]);
    const [rightItems, setRightItems] = useState<any[]>([]);
    const [selectedLeft, setSelectedLeft] = useState<number | null>(null);
    const [matches, setMatches] = useState<Set<number>>(new Set());
    
    useEffect(() => {
        setLeftItems(data.map(d => ({ id: d.id, text: d.left })));
        setRightItems([...data].sort(() => Math.random() - 0.5).map(d => ({ id: d.id, text: d.right })));
    }, [data]);

    const handleRightClick = (id: number) => {
        if (matches.has(id) || selectedLeft === null) return;
        if (selectedLeft === id) {
            const newMatches = new Set(matches);
            newMatches.add(id);
            setMatches(newMatches);
            setSelectedLeft(null);
            if (newMatches.size === data.length) setTimeout(onFinish, 1500);
        } else {
            setSelectedLeft(null);
        }
    };

    return (
        <div className="grid grid-cols-2 gap-4 max-w-2xl mx-auto py-4">
            <div className="space-y-3">
                {leftItems.map(item => (
                    <button key={item.id} onClick={() => !matches.has(item.id) && setSelectedLeft(item.id)} className={`w-full p-4 rounded-xl border-2 text-left transition-all ${matches.has(item.id) ? 'bg-green-100 border-green-500 opacity-50' : selectedLeft === item.id ? 'border-blue-500 bg-blue-50 ring-2 ring-blue-500/20 shadow-md' : 'bg-white dark:bg-slate-800 border-slate-200'}`}>
                        <MarkdownContent content={item.text} className="text-sm font-medium" />
                    </button>
                ))}
            </div>
            <div className="space-y-3">
                {rightItems.map(item => (
                    <button key={item.id} onClick={() => handleRightClick(item.id)} className={`w-full p-4 rounded-xl border-2 text-right transition-all ${matches.has(item.id) ? 'bg-green-100 border-green-500 opacity-50' : 'bg-white dark:bg-slate-800 border-slate-200 hover:border-blue-300'}`}>
                        <MarkdownContent content={item.text} className="text-sm font-medium" />
                    </button>
                ))}
            </div>
        </div>
    );
};

const MCQGame = ({ data, onFinish, type = 'quiz' }: { data: any[], onFinish: () => void, type?: 'quiz' | 'strategy' }) => {
    const [index, setIndex] = useState(0);
    const [selected, setSelected] = useState<number | null>(null);
    const [submitted, setSubmitted] = useState(false);
    if (!data?.length) return null;
    const q = data[index];
    const next = () => {
        if (index < data.length - 1) { setIndex(index + 1); setSelected(null); setSubmitted(false); }
        else onFinish();
    };
    return (
        <div className="max-w-2xl mx-auto py-4 space-y-6">
            <div className="bg-white dark:bg-slate-800 p-6 rounded-2xl shadow-lg border border-slate-200 dark:border-slate-700">
                <div className="mb-6">
                    <span className="text-xs font-bold text-slate-400 uppercase tracking-widest">{type === 'strategy' ? 'Choose Best Method' : `Question ${index + 1}`}</span>
                    <MarkdownContent content={q.question} className="text-lg font-bold mt-1" />
                </div>
                <div className="space-y-3">
                    {q.options.map((opt: string, i: number) => (
                        <button key={i} onClick={() => !submitted && setSelected(i)} className={`w-full text-left p-4 rounded-xl border-2 transition-all ${submitted ? (i === q.correctAnswer ? 'bg-green-100 border-green-500 text-green-900' : i === selected ? 'bg-red-100 border-red-500 text-red-900' : 'opacity-40 grayscale-[0.5]') : selected === i ? 'border-purple-500 bg-purple-50 dark:bg-purple-900/10' : 'border-slate-100 dark:border-slate-700 hover:border-purple-200 dark:hover:border-purple-800'}`}>
                            <div className="flex items-center gap-3">
                                <span className={`w-7 h-7 flex-shrink-0 flex items-center justify-center rounded-full text-xs font-bold border ${selected === i ? 'bg-purple-600 border-purple-600 text-white' : 'border-slate-300 text-slate-500'}`}>{String.fromCharCode(65+i)}</span>
                                <MarkdownContent content={opt} className="text-sm font-medium" />
                            </div>
                        </button>
                    ))}
                </div>
            </div>
            {submitted && (
                <div className="p-6 bg-slate-100 dark:bg-slate-900/50 border rounded-xl animate-in fade-in zoom-in-95">
                    <div className="flex items-center gap-2 mb-3">
                        <span className={`text-sm font-bold uppercase ${selected === q.correctAnswer ? 'text-green-600' : 'text-red-600'}`}>{selected === q.correctAnswer ? 'Well Done!' : 'Learning Opportunity'}</span>
                    </div>
                    <MarkdownContent content={q.explanation} className="text-sm mb-4" />
                    <button onClick={next} className="w-full py-3 bg-purple-600 text-white rounded-lg font-bold shadow-lg shadow-purple-500/30">Continue</button>
                </div>
            )}
            {!submitted && <button onClick={() => selected !== null && setSubmitted(true)} disabled={selected === null} className="w-full py-4 bg-purple-600 text-white rounded-xl font-bold disabled:opacity-50 shadow-lg shadow-purple-500/20 active:scale-95 transition-transform">Confirm Answer</button>}
        </div>
    );
};

const DerivationGame = ({ data, onFinish }: { data: any[], onFinish: () => void }) => {
    const [index, setIndex] = useState(0);
    const [shuffledSteps, setShuffledSteps] = useState<string[]>([]);
    const [isCorrect, setIsCorrect] = useState(false);
    const [showError, setShowError] = useState(false);

    useEffect(() => {
        if (data?.[index]) {
            setShuffledSteps([...data[index].steps].sort(() => Math.random() - 0.5));
            setIsCorrect(false);
            setShowError(false);
        }
    }, [index, data]);

    const move = (idx: number, dir: number) => {
        if (isCorrect) return;
        const newSteps = [...shuffledSteps];
        const swap = idx + dir;
        if (swap < 0 || swap >= newSteps.length) return;
        [newSteps[idx], newSteps[swap]] = [newSteps[swap], newSteps[idx]];
        setShuffledSteps(newSteps);
        setShowError(false);
    };

    const check = () => {
        if (JSON.stringify(shuffledSteps) === JSON.stringify(data[index].steps)) {
            setIsCorrect(true);
        } else {
            setShowError(true);
            setTimeout(() => setShowError(false), 2000);
        }
    };

    if (!data?.[index]) return null;

    return (
        <div className="max-w-2xl mx-auto py-4 space-y-6">
            <div className="text-center">
                <span className="text-xs font-bold text-slate-400 uppercase tracking-widest">Rebuild the Derivation</span>
                <h3 className="text-xl font-bold text-slate-800 dark:text-slate-100 mt-1">{data[index].title}</h3>
                <p className="text-sm text-slate-500 mt-2">Arrange the steps in the correct logical sequence.</p>
            </div>
            
            <div className="space-y-3">
                {shuffledSteps.map((step, i) => (
                    <div key={i} className={`flex items-center gap-4 p-4 rounded-xl border-2 transition-all ${isCorrect ? 'bg-green-50 border-green-500' : 'bg-white dark:bg-slate-800 border-slate-100 dark:border-slate-700 shadow-sm'}`}>
                        {!isCorrect && (
                            <div className="flex flex-col gap-1">
                                <button onClick={() => move(i, -1)} disabled={i === 0} className="p-1 hover:text-blue-500 disabled:opacity-20">
                                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 15l7-7 7 7" /></svg>
                                </button>
                                <button onClick={() => move(i, 1)} disabled={i === shuffledSteps.length - 1} className="p-1 hover:text-blue-500 disabled:opacity-20">
                                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M19 9l-7 7-7-7" /></svg>
                                </button>
                            </div>
                        )}
                        <div className="flex-1">
                            <MarkdownContent content={step} className="text-sm font-medium" />
                        </div>
                        {isCorrect && <span className="text-green-500 font-bold">✓</span>}
                    </div>
                ))}
            </div>

            {!isCorrect ? (
                <div className="space-y-3">
                    <button onClick={check} className={`w-full py-4 rounded-xl font-bold transition-all shadow-lg active:scale-95 ${showError ? 'bg-red-500 text-white animate-shake' : 'bg-blue-600 text-white shadow-blue-500/20'}`}>
                        {showError ? 'Sequence Incorrect!' : 'Verify Sequence'}
                    </button>
                </div>
            ) : (
                <div className="animate-in fade-in zoom-in slide-in-from-bottom-2">
                    <div className="bg-green-100 dark:bg-green-900/30 p-4 rounded-xl text-center mb-4 text-green-800 dark:text-green-300 font-bold border border-green-200">Excellent Logic! Step sequence validated.</div>
                    <button onClick={() => index < data.length - 1 ? setIndex(index + 1) : onFinish()} className="w-full py-4 bg-slate-800 dark:bg-slate-700 text-white rounded-xl font-bold">Next Derivation</button>
                </div>
            )}
        </div>
    );
};

// ... TrueFalse, Match, FixBroken, PredictNext components logic simplified for text-math ...
// (Already handled in service update)

export function QuizView({ chapter, onBack }: QuizViewProps): React.JSX.Element {
  const [gameMode, setGameMode] = useState<GameType | null>(null);
  const [gameData, setGameData] = useState<any>(null);
  const [loading, setLoading] = useState(false);
  const startGame = async (mode: GameType) => {
      setGameMode(mode);
      setLoading(true);
      setGameData(await generateGameContent(chapter, mode));
      setLoading(false);
  };
  if (!gameMode) {
      return (
          <div className="space-y-8 pb-10">
              <div className="flex items-center justify-between"><button onClick={onBack} className="text-blue-600 font-bold hover:underline">&larr; Exit Games</button><h2 className="text-2xl font-bold">Game Zone</h2></div>
              <div className="bg-gradient-to-br from-indigo-600 to-purple-700 rounded-3xl p-8 text-white shadow-xl relative overflow-hidden">
                <div className="relative z-10">
                    <h3 className="text-3xl font-bold mb-2">{chapter.chapter_title}</h3>
                    <p className="opacity-90 max-w-md">Challenge yourself with dynamic math games generated from your textbook.</p>
                </div>
                <div className="absolute top-0 right-0 p-4 opacity-10"><QuizIcon className="w-40 h-40" /></div>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                  <button onClick={() => startGame('true_false')} className="p-6 bg-white dark:bg-slate-800 rounded-2xl shadow-md border-2 border-transparent hover:border-green-500 transition-all text-left group">
                    <div className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center text-green-600 mb-4 group-hover:scale-110 transition-transform">✓</div>
                    <h4 className="font-bold">Fact Check</h4>
                    <p className="text-xs text-slate-500 mt-1">True or False</p>
                  </button>
                  <button onClick={() => startGame('match')} className="p-6 bg-white dark:bg-slate-800 rounded-2xl shadow-md border-2 border-transparent hover:border-orange-500 transition-all text-left group">
                    <div className="w-10 h-10 bg-orange-100 rounded-full flex items-center justify-center text-orange-600 mb-4 group-hover:scale-110 transition-transform">⇄</div>
                    <h4 className="font-bold">Match Pairs</h4>
                    <p className="text-xs text-slate-500 mt-1">Terms & Formulas</p>
                  </button>
                  <button onClick={() => startGame('mcq')} className="p-6 bg-white dark:bg-slate-800 rounded-2xl shadow-md border-2 border-transparent hover:border-purple-500 transition-all text-left group">
                    <div className="w-10 h-10 bg-purple-100 rounded-full flex items-center justify-center text-purple-600 mb-4 group-hover:scale-110 transition-transform">?</div>
                    <h4 className="font-bold">Quick Quiz</h4>
                    <p className="text-xs text-slate-500 mt-1">Multiple Choice</p>
                  </button>
              </div>
              <div className="pt-4 grid grid-cols-1 gap-4">
                  <button onClick={() => startGame('fix_broken')} className="p-5 bg-white dark:bg-slate-800 rounded-2xl shadow-lg border hover:border-red-500 flex items-center justify-between group">
                    <div className="flex items-center gap-4">
                        <span className="p-3 bg-red-100 text-red-600 rounded-xl">🛠</span>
                        <div className="text-left"><h4 className="font-bold">Fix Broken Solution</h4><p className="text-xs text-slate-500">Spot the logical error</p></div>
                    </div>
                    <span className="text-red-500 font-bold group-hover:translate-x-1 transition-transform">Play &rarr;</span>
                  </button>
                  <button onClick={() => startGame('predict_next')} className="p-5 bg-white dark:bg-slate-800 rounded-2xl shadow-lg border hover:border-indigo-500 flex items-center justify-between group">
                    <div className="flex items-center gap-4">
                        <span className="p-3 bg-indigo-100 text-indigo-600 rounded-xl">⏭</span>
                        <div className="text-left"><h4 className="font-bold">Predict Next Step</h4><p className="text-xs text-slate-500">Master the derivation flow</p></div>
                    </div>
                    <span className="text-indigo-500 font-bold group-hover:translate-x-1 transition-transform">Play &rarr;</span>
                  </button>
                  <button onClick={() => startGame('strategy')} className="p-5 bg-white dark:bg-slate-800 rounded-2xl shadow-lg border hover:border-teal-500 flex items-center justify-between group">
                    <div className="flex items-center gap-4">
                        <span className="p-3 bg-teal-100 text-teal-600 rounded-xl">🎯</span>
                        <div className="text-left"><h4 className="font-bold">Choose Strategy</h4><p className="text-xs text-slate-500">Pick the optimal method</p></div>
                    </div>
                    <span className="text-teal-500 font-bold group-hover:translate-x-1 transition-transform">Play &rarr;</span>
                  </button>
                  <button onClick={() => startGame('derivation')} className="p-5 bg-white dark:bg-slate-800 rounded-2xl shadow-lg border hover:border-amber-500 flex items-center justify-between group">
                    <div className="flex items-center gap-4">
                        <span className="p-3 bg-amber-100 text-amber-600 rounded-xl">🧱</span>
                        <div className="text-left"><h4 className="font-bold">Rebuild Derivation</h4><p className="text-xs text-slate-500">Order complex proofs</p></div>
                    </div>
                    <span className="text-amber-500 font-bold group-hover:translate-x-1 transition-transform">Play &rarr;</span>
                  </button>
              </div>
          </div>
      );
  }
  if (loading) return <div className="flex flex-col items-center py-20"><SpinnerIcon /><p className="mt-4 animate-pulse font-bold text-slate-600">Generating dynamic challenges...</p></div>;
  return (
      <div className="pb-10">
          <button onClick={() => { setGameMode(null); setGameData(null); }} className="text-slate-500 mb-6 text-sm font-bold flex items-center gap-2 hover:text-slate-800 dark:hover:text-slate-200 transition-colors">&larr; Back to Game Menu</button>
          <h2 className="text-2xl font-black mb-8 capitalize tracking-tight text-slate-900 dark:text-white border-b pb-4">{gameMode?.replace('_', ' ')}</h2>
          {gameMode === 'true_false' && gameData && <TrueFalseGame data={gameData} onFinish={() => setGameMode(null)} />}
          {gameMode === 'match' && gameData && <MatchGame data={gameData} onFinish={() => setGameMode(null)} />}
          {gameMode === 'mcq' && gameData && <MCQGame data={gameData} onFinish={() => setGameMode(null)} type="quiz" />}
          {gameMode === 'strategy' && gameData && <MCQGame data={gameData} onFinish={() => setGameMode(null)} type="strategy" />}
          {gameMode === 'fix_broken' && gameData && <MCQGame data={gameData} onFinish={() => setGameMode(null)} />}
          {gameMode === 'predict_next' && gameData && <MCQGame data={gameData} onFinish={() => setGameMode(null)} />}
          {gameMode === 'derivation' && gameData && <DerivationGame data={gameData} onFinish={() => setGameMode(null)} />}
      </div>
  );
}


import React, { useEffect, useState } from 'react';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import { generateFormulaSheetStream } from '../services/geminiService';
import { SpinnerIcon } from './icons/SpinnerIcon';

export function FormulaView({ chapterTitle, onBack }: any): React.JSX.Element {
  const [content, setContent] = useState('');
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    let isMounted = true;
    const fetch = async () => {
      setContent('');
      try {
        const stream = generateFormulaSheetStream(chapterTitle);
        for await (const chunk of stream) { if (isMounted) setContent(prev => prev + chunk); }
      } catch (e) { console.error(e); }
      finally { if (isMounted) setIsLoading(false); }
    };
    fetch();
    return () => { isMounted = false; };
  }, [chapterTitle]);

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <button onClick={onBack} className="text-blue-600 font-semibold">&larr; Back</button>
        <h2 className="text-xl font-bold">Formula Sheet</h2>
      </div>
      <div className="bg-amber-50 dark:bg-amber-900/20 p-6 rounded-xl border border-amber-200 overflow-hidden">
        <h1 className="text-2xl font-bold text-amber-800 dark:text-amber-200 mb-6 border-b pb-2">{chapterTitle}</h1>
        {isLoading && !content ? (
          <div className="flex justify-center items-center py-10"><SpinnerIcon /><span className="ml-3">Generating...</span></div>
        ) : (
          <div className="prose prose-amber dark:prose-invert max-w-none">
             <ReactMarkdown remarkPlugins={[remarkGfm]}>{content}</ReactMarkdown>
          </div>
        )}
      </div>
    </div>
  );
}

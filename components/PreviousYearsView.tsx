
import React, { useEffect, useState } from 'react';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import { getPreviousYearQuestionsStream } from '../services/geminiService';
import { SpinnerIcon } from './icons/SpinnerIcon';

interface PreviousYearsViewProps {
  chapterTitle: string;
  onBack: () => void;
}

export function PreviousYearsView({ chapterTitle, onBack }: PreviousYearsViewProps): React.JSX.Element {
  const [content, setContent] = useState('');
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    let isMounted = true;
    
    const fetchQuestions = async () => {
      setIsLoading(true);
      setContent('');
      try {
        const stream = getPreviousYearQuestionsStream(chapterTitle);
        for await (const chunk of stream) {
          if (isMounted) {
            setContent(prev => prev + chunk);
            setIsLoading(false);
          }
        }
      } catch (e) {
        console.error(e);
      } finally {
        if (isMounted) setIsLoading(false);
      }
    };

    fetchQuestions();
    return () => { isMounted = false; };
  }, [chapterTitle]);

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <button onClick={onBack} className="text-blue-600 dark:text-blue-400 hover:underline font-semibold">
          &larr; Back to Chapters
        </button>
        <h2 className="text-xl font-bold text-slate-800 dark:text-slate-200 flex items-center gap-2">
            <span className="bg-rose-100 text-rose-600 dark:bg-rose-900/30 dark:text-rose-400 p-1 rounded-md">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm.75-13a.75.75 0 00-1.5 0v5c0 .414.336.75.75.75h4a.75.75 0 000-1.5h-3.25V5z" clipRule="evenodd" />
                </svg>
            </span>
            Previous Years
        </h2>
      </div>
      
      <div className="bg-rose-50 dark:bg-rose-900/10 p-6 rounded-xl border border-rose-200 dark:border-rose-800/50 overflow-hidden shadow-sm">
        <div className="mb-6 border-b border-rose-200 dark:border-rose-800 pb-4">
            <h1 className="text-2xl font-bold text-rose-900 dark:text-rose-200">
            {chapterTitle}
            </h1>
            <p className="text-rose-700 dark:text-rose-300 text-sm mt-1">
                Karnataka 2nd PUC Board Questions (Past 3+ Years)
            </p>
        </div>
        
        {isLoading && !content ? (
          <div className="flex justify-center items-center py-10">
            <SpinnerIcon />
            <span className="ml-3 text-rose-700 dark:text-rose-300">Fetching past question papers...</span>
          </div>
        ) : (
          <div className="prose prose-rose dark:prose-invert max-w-none prose-headings:text-rose-900 dark:prose-headings:text-rose-200 prose-strong:text-rose-800 dark:prose-strong:text-rose-300">
             <ReactMarkdown 
                remarkPlugins={[remarkGfm]}
                components={{
                    h3: ({node, ...props}) => <h3 className="text-xl font-bold mt-6 mb-4 pb-2 border-b border-rose-200 dark:border-rose-800 text-rose-800 dark:text-rose-200" {...props} />,
                    li: ({node, ...props}) => <li className="my-2" {...props} />,
                    strong: ({node, ...props}) => <strong className="font-bold text-rose-700 dark:text-rose-300 bg-rose-100 dark:bg-rose-900/30 px-1 rounded" {...props} />
                }}
             >
               {content}
             </ReactMarkdown>
          </div>
        )}
      </div>
    </div>
  );
}

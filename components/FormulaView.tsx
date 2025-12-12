
import React, { useEffect, useState } from 'react';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import { generateFormulaSheetStream } from '../services/geminiService';
import { SpinnerIcon } from './icons/SpinnerIcon';

interface FormulaViewProps {
  chapterTitle: string;
  onBack: () => void;
}

export function FormulaView({ chapterTitle, onBack }: FormulaViewProps): React.JSX.Element {
  const [content, setContent] = useState('');
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    let isMounted = true;
    
    const fetchFormulas = async () => {
      setIsLoading(true);
      setContent('');
      try {
        const stream = generateFormulaSheetStream(chapterTitle);
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

    fetchFormulas();
    return () => { isMounted = false; };
  }, [chapterTitle]);

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <button onClick={onBack} className="text-blue-600 dark:text-blue-400 hover:underline font-semibold">
          &larr; Back to Chapters
        </button>
        <h2 className="text-xl font-bold text-slate-800 dark:text-slate-200">Formula Sheet</h2>
      </div>
      
      <div className="bg-amber-50 dark:bg-amber-900/20 p-6 rounded-xl border border-amber-200 dark:border-amber-700/50 overflow-hidden">
        <h1 className="text-2xl font-bold text-amber-800 dark:text-amber-200 mb-6 border-b border-amber-200 dark:border-amber-700 pb-2">
          {chapterTitle}
        </h1>
        
        {isLoading && !content ? (
          <div className="flex justify-center items-center py-10">
            <SpinnerIcon />
            <span className="ml-3 text-amber-700 dark:text-amber-300">Generating formula sheet...</span>
          </div>
        ) : (
          <div className="prose prose-amber dark:prose-invert max-w-none prose-headings:text-amber-800 dark:prose-headings:text-amber-200">
             <ReactMarkdown 
                remarkPlugins={[remarkGfm]}
                components={{
                    table: ({node, ...props}) => (
                        <div className="overflow-x-auto my-6 border border-amber-200 dark:border-amber-800 rounded-lg shadow-sm bg-white dark:bg-slate-900">
                            <table className="min-w-full divide-y divide-amber-200 dark:divide-amber-800" {...props} />
                        </div>
                    ),
                    thead: ({node, ...props}) => <thead className="bg-amber-100 dark:bg-amber-950/50" {...props} />,
                    tbody: ({node, ...props}) => <tbody className="divide-y divide-amber-100 dark:divide-amber-900/30" {...props} />,
                    tr: ({node, ...props}) => <tr className="hover:bg-amber-50 dark:hover:bg-amber-900/20 transition-colors" {...props} />,
                    th: ({node, ...props}) => <th className="px-4 py-3 text-left text-xs font-bold text-amber-900 dark:text-amber-100 uppercase tracking-wider border-r last:border-r-0 border-amber-200 dark:border-amber-800" {...props} />,
                    td: ({node, ...props}) => <td className="px-4 py-3 whitespace-nowrap text-sm text-amber-900 dark:text-amber-100 border-r last:border-r-0 border-amber-100 dark:border-amber-900/50" {...props} />,
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

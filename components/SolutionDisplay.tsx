
import React from 'react';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import { SpinnerIcon } from './icons/SpinnerIcon';

interface SolutionDisplayProps {
  isLoading: boolean;
  solution: string;
  error: string;
}

export function SolutionDisplay({ isLoading, solution, error }: SolutionDisplayProps): React.JSX.Element {
  if (isLoading) {
    return (
      <div className="flex justify-center items-center p-8">
        <SpinnerIcon />
        <span className="ml-4 text-slate-600 dark:text-slate-400">Formatting beautiful solution...</span>
      </div>
    );
  }

  if (error) {
    return (
      <div className="p-4 bg-red-100 dark:bg-red-900/20 border border-red-400 dark:border-red-700 text-red-700 dark:text-red-300 rounded-lg">
        <p className="font-semibold">Error</p>
        <p>{error}</p>
      </div>
    );
  }
  
  if (!solution) {
    return (
        <div className="text-center p-8 text-slate-500 dark:text-slate-400">
            Your textbook-style solution will appear here.
        </div>
    );
  }

  return (
    <div className="p-6 border border-slate-200 dark:border-slate-700 rounded-lg bg-white dark:bg-slate-800/50 shadow-sm overflow-hidden">
        <div className="prose prose-slate dark:prose-invert max-w-none leading-relaxed md:leading-loose">
            <ReactMarkdown
              remarkPlugins={[remarkGfm]}
              components={{
                h1: ({node, ...props}) => <h1 className="text-blue-700 dark:text-blue-300 font-bold text-2xl mt-6 mb-4" {...props} />,
                h2: ({node, ...props}) => <h2 className="text-blue-700 dark:text-blue-300 font-bold text-xl mt-5 mb-3" {...props} />,
                h3: ({node, ...props}) => <h3 className="text-blue-600 dark:text-blue-400 font-bold text-lg mt-4 mb-2" {...props} />,
                strong: ({node, ...props}) => (
                  <strong 
                    className="bg-blue-50 dark:bg-blue-900/40 text-blue-900 dark:text-blue-100 border border-blue-100 dark:border-blue-800 px-3 py-2 rounded-md block w-full my-4 not-italic font-bold shadow-sm" 
                    {...props} 
                  />
                ),
                code: ({node, ...props}) => <code className="bg-slate-100 dark:bg-slate-900 px-1 rounded text-pink-600 dark:text-pink-400" {...props} />,
                pre: ({node, ...props}) => <pre className="font-mono text-sm leading-tight bg-slate-50 dark:bg-slate-950 p-4 rounded-lg overflow-x-auto border border-slate-200 dark:border-slate-800" {...props} />,
                table: ({node, ...props}) => (
                    <div className="overflow-x-auto my-6 border border-slate-200 dark:border-slate-700 rounded-lg shadow-sm">
                        <table className="min-w-full divide-y divide-slate-200 dark:divide-slate-700" {...props} />
                    </div>
                ),
              }}
            >
                {solution}
            </ReactMarkdown>
        </div>
    </div>
  );
}

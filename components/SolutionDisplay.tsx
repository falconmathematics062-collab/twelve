
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
        <span className="ml-4 text-slate-600 dark:text-slate-400">Generating solution...</span>
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
            Your step-by-step solution will appear here.
        </div>
    );
  }

  return (
    <div className="p-6 border border-slate-200 dark:border-slate-700 rounded-lg bg-white dark:bg-slate-800/50 shadow-sm overflow-hidden">
        <div className="prose prose-slate dark:prose-invert max-w-none leading-loose">
            <ReactMarkdown
              remarkPlugins={[remarkGfm]}
              components={{
                // Style headings in Blue
                h1: ({node, ...props}) => <h1 className="text-blue-700 dark:text-blue-300 font-bold text-2xl mt-6 mb-4" {...props} />,
                h2: ({node, ...props}) => <h2 className="text-blue-700 dark:text-blue-300 font-bold text-xl mt-5 mb-3" {...props} />,
                h3: ({node, ...props}) => <h3 className="text-blue-600 dark:text-blue-400 font-bold text-lg mt-4 mb-2" {...props} />,
                h4: ({node, ...props}) => <h4 className="text-blue-600 dark:text-blue-400 font-bold text-base mt-4 mb-2" {...props} />,
                
                // Style the Main Answer (Bold text) with a Pale Blue highlight
                strong: ({node, ...props}) => (
                  <strong 
                    className="bg-blue-50 dark:bg-blue-900/40 text-blue-900 dark:text-blue-100 border border-blue-100 dark:border-blue-800 px-3 py-2 rounded-md block w-full my-4 not-italic font-bold shadow-sm" 
                    {...props} 
                  />
                ),
                
                // Ensure list items have spacing
                li: ({node, ...props}) => <li className="my-2 pl-2" {...props} />,
                ul: ({node, ...props}) => <ul className="list-disc pl-5 my-4 space-y-2" {...props} />,
                ol: ({node, ...props}) => <ol className="list-decimal pl-5 my-4 space-y-2" {...props} />,
                p: ({node, ...props}) => <p className="mb-4" {...props} />,
                
                // Table Styling
                table: ({node, ...props}) => (
                    <div className="overflow-x-auto my-6 border border-slate-200 dark:border-slate-700 rounded-lg shadow-sm">
                        <table className="min-w-full divide-y divide-slate-200 dark:divide-slate-700" {...props} />
                    </div>
                ),
                thead: ({node, ...props}) => <thead className="bg-slate-50 dark:bg-slate-800" {...props} />,
                tbody: ({node, ...props}) => <tbody className="divide-y divide-slate-200 dark:divide-slate-700 bg-white dark:bg-slate-900" {...props} />,
                tr: ({node, ...props}) => <tr className="hover:bg-slate-50 dark:hover:bg-slate-800/50 transition-colors" {...props} />,
                th: ({node, ...props}) => <th className="px-4 py-3 text-left text-xs font-bold text-slate-500 dark:text-slate-300 uppercase tracking-wider border-r last:border-r-0 border-slate-200 dark:border-slate-700" {...props} />,
                td: ({node, ...props}) => <td className="px-4 py-3 whitespace-nowrap text-sm text-slate-700 dark:text-slate-300 border-r last:border-r-0 border-slate-200 dark:border-slate-700" {...props} />,
              }}
            >
                {solution}
            </ReactMarkdown>
        </div>
    </div>
  );
}

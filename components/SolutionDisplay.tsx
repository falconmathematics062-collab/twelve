
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
      <div className="flex flex-col justify-center items-center p-8 bg-white dark:bg-slate-800 rounded-lg shadow-sm border border-slate-200 dark:border-slate-700">
        <SpinnerIcon />
        <span className="mt-4 text-slate-600 dark:text-slate-400 font-medium">Generating your textbook-quality solution...</span>
      </div>
    );
  }

  if (error) {
    return (
      <div className="p-4 bg-red-100 dark:bg-red-900/20 border border-red-400 dark:border-red-700 text-red-700 dark:text-red-300 rounded-lg">
        <p className="font-semibold">Error occurred:</p>
        <p>{error}</p>
      </div>
    );
  }
  
  if (!solution) {
    return (
        <div className="text-center p-8 text-slate-500 dark:text-slate-400 bg-white dark:bg-slate-800 rounded-lg shadow-sm border border-slate-200 dark:border-slate-700">
            Your textbook-style solution will appear here.
        </div>
    );
  }

  return (
    <div className="relative p-6 border border-slate-200 dark:border-slate-700 rounded-lg bg-white dark:bg-slate-800 shadow-md overflow-hidden">
        {/* Subtle geometric background for visual interest */}
        <div className="absolute inset-0 geometric-background opacity-5 dark:opacity-10"></div>
        
        {/* Blue accent border on the left */}
        <div className="absolute top-0 left-0 bottom-0 w-2 bg-blue-600 dark:bg-blue-600 rounded-l-lg"></div>

        <div className="relative z-10 pl-4 prose prose-slate dark:prose-invert max-w-none leading-relaxed md:leading-loose">
            <h2 className="!mt-0 !mb-4 text-blue-700 dark:text-blue-400 font-bold text-2xl border-b border-slate-100 dark:border-slate-700 pb-3">
                Step-by-Step Solution
            </h2>
            <ReactMarkdown
              remarkPlugins={[remarkGfm]}
              components={{
                h1: ({node, ...props}) => <h1 className="text-blue-700 dark:text-blue-300 font-bold text-2xl mt-6 mb-4" {...props} />,
                h2: ({node, ...props}) => <h2 className="text-blue-700 dark:text-blue-300 font-bold text-xl mt-5 mb-3" {...props} />,
                h3: ({node, ...props}) => <h3 className="text-blue-600 dark:text-blue-500 font-extrabold text-lg mt-4 mb-2 !leading-normal" {...props} />,
                // Removed custom styling for strong tags
                code: ({node, ...props}) => <code className="bg-slate-100 dark:bg-slate-900 px-1 rounded text-blue-600 dark:text-blue-400 text-sm" {...props} />,
                pre: ({node, ...props}) => <pre className="font-mono text-base leading-tight bg-slate-50 dark:bg-slate-950 p-4 rounded-lg overflow-x-auto border border-slate-200 dark:border-slate-800" {...props} />, // Increased font-size for better readability
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

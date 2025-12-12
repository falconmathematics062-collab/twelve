
import React from 'react';
import { QuizIcon } from './icons/QuizIcon';
import { BookIcon } from './icons/BookIcon';
import { FormulaIcon } from './icons/FormulaIcon';

interface BottomMenuProps {
  activeTab: 'learn' | 'quiz' | 'formulas';
  onTabChange: (tab: 'learn' | 'quiz' | 'formulas') => void;
}

export function BottomMenu({ activeTab, onTabChange }: BottomMenuProps): React.JSX.Element {
  return (
    <div className="fixed bottom-0 left-0 right-0 bg-white dark:bg-slate-900 border-t border-slate-200 dark:border-slate-700 shadow-[0_-4px_6px_-1px_rgba(0,0,0,0.1)] z-50">
      <div className="max-w-5xl mx-auto flex justify-around items-center h-16">
        <button
          onClick={() => onTabChange('learn')}
          className={`flex flex-col items-center justify-center w-full h-full transition-colors ${
            activeTab === 'learn' 
              ? 'text-blue-600 dark:text-blue-400' 
              : 'text-slate-500 dark:text-slate-400 hover:text-slate-700 dark:hover:text-slate-300'
          }`}
        >
          <BookIcon className={`w-6 h-6 ${activeTab === 'learn' ? 'stroke-2' : ''}`} />
          <span className="text-xs mt-1 font-medium">Textbook</span>
        </button>

        <div className="w-px h-8 bg-slate-200 dark:bg-slate-700"></div>

        <button
          onClick={() => onTabChange('formulas')}
          className={`flex flex-col items-center justify-center w-full h-full transition-colors ${
            activeTab === 'formulas' 
              ? 'text-amber-600 dark:text-amber-400' 
              : 'text-slate-500 dark:text-slate-400 hover:text-slate-700 dark:hover:text-slate-300'
          }`}
        >
          <FormulaIcon className={`w-6 h-6 ${activeTab === 'formulas' ? 'stroke-2' : ''}`} />
          <span className="text-xs mt-1 font-medium">Formulas</span>
        </button>
        
        <div className="w-px h-8 bg-slate-200 dark:bg-slate-700"></div>
        
        <button
          onClick={() => onTabChange('quiz')}
          className={`flex flex-col items-center justify-center w-full h-full transition-colors ${
            activeTab === 'quiz' 
              ? 'text-purple-600 dark:text-purple-400' 
              : 'text-slate-500 dark:text-slate-400 hover:text-slate-700 dark:hover:text-slate-300'
          }`}
        >
          <QuizIcon className={`w-6 h-6 ${activeTab === 'quiz' ? 'stroke-2' : ''}`} />
          <span className="text-xs mt-1 font-medium">Quiz</span>
        </button>
      </div>
    </div>
  );
}

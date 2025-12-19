
import React from 'react';

interface HomePageProps {
  textbooks: any;
  onChapterSelect: (chapter: any) => void;
  title?: string;
  buttonText?: string;
}

export function HomePage({ textbooks, onChapterSelect, title, buttonText }: HomePageProps): React.JSX.Element {
  
  // Define symbols for the chapter background
  const chapterSymbols = [
    { char: '∫', color: 'text-blue-900 dark:text-blue-950', top: '10%', left: '10%', size: 'text-lg', delay: '0s' },
    { char: 'π', color: 'text-red-900 dark:text-red-950', top: '70%', left: '80%', size: 'text-xl', delay: '1s' },
    { char: '∑', color: 'text-green-900 dark:text-green-950', top: '20%', left: '80%', size: 'text-lg', delay: '2s' },
    { char: '∞', color: 'text-purple-900 dark:text-purple-950', top: '80%', left: '20%', size: 'text-2xl', delay: '0.5s' },
    { char: '√', color: 'text-amber-900 dark:text-amber-950', top: '40%', left: '40%', size: 'text-xl', delay: '1.5s' },
  ];

  return (
    <div className="space-y-8">
      <style>{`
        @keyframes subtleFloat {
          0% { transform: translateY(0px); }
          50% { transform: translateY(-5px); }
          100% { transform: translateY(0px); }
        }
      `}</style>
      {title && (
          <h2 className="text-3xl font-bold text-center text-blue-700 dark:text-pink-400 mb-8">{title}</h2>
      )}
      {Object.entries(textbooks).map(([key, book]: [string, any]) => (
        <div key={key}>
          <h2 className="text-2xl md:text-3xl font-bold text-slate-800 dark:text-slate-200 border-b-2 border-slate-200 dark:border-slate-700 pb-2 mb-8">{book.title}</h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6 justify-items-center">
            {book.chapters.map((chapter: any) => (
              <button 
                key={chapter.chapter_number}
                onClick={() => onChapterSelect(chapter)}
                className="group relative w-full aspect-square max-w-[280px] bg-slate-50 dark:bg-slate-800/80 rounded-full shadow-md hover:shadow-xl hover:scale-105 transition-all duration-300 flex flex-col items-center justify-center p-2 sm:p-6 border-4 border-white dark:border-slate-700 hover:border-blue-500 dark:hover:border-blue-500 text-center overflow-hidden"
              >
                {/* Floating Symbols Background Inside Button */}
                <div className="absolute inset-0 pointer-events-none opacity-20">
                    {chapterSymbols.map((sym, idx) => (
                        <span 
                            key={idx}
                            className={`absolute ${sym.color} ${sym.size} font-serif`}
                            style={{
                                top: sym.top,
                                left: sym.left,
                                animation: `subtleFloat 4s ease-in-out infinite`,
                                animationDelay: sym.delay
                            }}
                        >
                            {sym.char}
                        </span>
                    ))}
                </div>

                <div className="flex flex-col items-center justify-center h-full w-full relative z-10">
                    <span className={`text-xs font-bold uppercase tracking-wider mb-2 transition-colors ${chapter.chapter_number === '0' ? 'text-amber-500 dark:text-amber-400' : 'text-slate-400 dark:text-slate-500 group-hover:text-blue-500 dark:group-hover:text-blue-500'}`}>
                        {chapter.chapter_number === '0' ? 'Quick Reference' : `Chapter ${chapter.chapter_number}`}
                    </span>
                    
                    <h3 className="text-sm sm:text-base md:text-lg font-bold text-slate-800 dark:text-slate-100 leading-tight line-clamp-3 px-1">
                    {chapter.chapter_title}
                    </h3>
                    
                    <div className="mt-3 opacity-0 group-hover:opacity-100 transform translate-y-4 group-hover:translate-y-0 transition-all duration-300 text-blue-600 dark:text-blue-400">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
                            <path fillRule="evenodd" d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25zm4.28 10.28a.75.75 0 000-1.06l-3-3a.75.75 0 10-1.06 1.06l1.72 1.72H8.25a.75.75 0 000 1.5h5.69l-1.72 1.72a.75.75 0 101.06 1.06l3-3z" clipRule="evenodd" />
                        </svg>
                    </div>
                </div>
              </button>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}

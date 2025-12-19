
import React, { useState } from 'react';
import { HomePage } from './components/HomePage';
import { ChapterPage } from './components/ChapterPage';
import { ExerciseView } from './components/ExerciseView';
import { ThemeToggle } from './components/ThemeToggle';
import { QuestionInput } from './components/QuestionInput';
import { CustomSolutionView } from './components/CustomSolutionView';
import { QuizView } from './components/QuizView';
import { FormulaView } from './components/FormulaView';
import { PreviousYearsView } from './components/PreviousYearsView';
import { MenuIcon } from './components/icons/MenuIcon';
import { BookIcon } from './components/icons/BookIcon';
import { QuizIcon } from './components/icons/QuizIcon';
import { FormulaIcon } from './components/icons/FormulaIcon';
import { ClockIcon } from './components/icons/ClockIcon';
import { FloatingSymbolsBackground } from './components/FloatingSymbolsBackground';
import { chapter1 } from './data/chapter1';
import { chapter2 } from './data/chapter2';
import { chapter3 } from './data/chapter3';
import { chapter4 } from './data/chapter4';
import { chapter5 } from './data/chapter5';
import { chapter6 } from './data/chapter6';
import { chapter7 } from './data/chapter7';
import { chapter8 } from './data/chapter8';
import { chapter9 } from './data/chapter9';
import { chapter10 } from './data/chapter10';
import { chapter11 } from './data/chapter11';
import { chapter12 } from './data/chapter12';
import { chapter13 } from './data/chapter13';


// This object will hold all textbook content.
const textbooks = {
  'puc-2': {
    title: '2nd PUC Mathematics',
    chapters: [
        chapter1, chapter2, chapter3, chapter4, chapter5, chapter6,
        chapter7, chapter8, chapter9, chapter10, chapter11, chapter12, chapter13
    ]
  }
};

// Special chapter object for "General & Short Formulas"
const generalFormulasChapter = {
    class: "General",
    chapter_number: "0",
    chapter_title: "General & Short Formulas",
    sections: []
};

// Create a textbook list specifically for formulas that includes the General/Short option
const textbooksForFormulas = {
    'puc-2': {
        title: '2nd PUC Mathematics',
        chapters: [generalFormulasChapter, ...textbooks['puc-2'].chapters]
    }
};


type Tab = 'learn' | 'quiz' | 'formulas' | 'previous-years';
type View = 'home' | 'chapter' | 'exercise' | 'custom-solution' | 'quiz-home' | 'quiz-taking' | 'formulas-home' | 'formulas-view' | 'previous-years-home' | 'previous-years-view';
type Chapter = typeof chapter1;
type Exercise = { id: string; text: string; sectionTitle: string };

function App(): React.JSX.Element {
  const [activeTab, setActiveTab] = useState<Tab>('learn');
  const [view, setView] = useState<View>('home');
  const [selectedChapter, setSelectedChapter] = useState<Chapter | null>(null);
  const [selectedExercise, setSelectedExercise] = useState<{ chapter: Chapter, exercise: Exercise } | null>(null);
  const [customProblem, setCustomProblem] = useState<{ text: string, imageFile: File | null, mode: 'solve' | 'mistake' } | null>(null);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleTabChange = (tab: Tab) => {
    setActiveTab(tab);
    setIsMenuOpen(false); // Close menu on selection
    if (tab === 'learn') {
      setView('home');
    } else if (tab === 'formulas') {
      setView('formulas-home');
    } else if (tab === 'previous-years') {
      setView('previous-years-home');
    } else {
      setView('quiz-home');
    }
  };

  const handleChapterSelect = (chapter: Chapter) => {
    setSelectedChapter(chapter);
    setView('chapter');
  };
  
  const handleQuizChapterSelect = (chapter: Chapter) => {
    setSelectedChapter(chapter);
    setView('quiz-taking');
  };
  
  const handleFormulaChapterSelect = (chapter: Chapter) => {
    setSelectedChapter(chapter);
    setView('formulas-view');
  };

  const handlePreviousYearsChapterSelect = (chapter: Chapter) => {
    setSelectedChapter(chapter);
    setView('previous-years-view');
  };
  
  const handleExerciseSelect = (chapter: Chapter, exercise: Exercise) => {
    setSelectedExercise({ chapter, exercise });
    setView('exercise');
  };

  const goHome = () => {
    if (activeTab === 'learn') {
        setView('home');
        setCustomProblem(null);
    } else if (activeTab === 'formulas') {
        setView('formulas-home');
    } else if (activeTab === 'previous-years') {
        setView('previous-years-home');
    } else {
        setView('quiz-home');
    }
    setSelectedChapter(null);
    setSelectedExercise(null);
  };
  
  const backToChapter = () => {
    setView('chapter');
    setSelectedExercise(null);
  }

  const handleCustomQuestionSubmit = (text: string, imageFile: File | null, mode: 'solve' | 'mistake') => {
    setCustomProblem({ text, imageFile, mode });
    setView('custom-solution');
  }

  const renderContent = () => {
    // Logic for Quiz Tab
    if (activeTab === 'quiz') {
      if (view === 'quiz-taking' && selectedChapter) {
        return <QuizView chapter={selectedChapter} onBack={goHome} />;
      }
      return <HomePage textbooks={textbooks} onChapterSelect={handleQuizChapterSelect} title="Select a Topic for Games" buttonText="Start Game" />;
    }

    // Logic for Formulas Tab
    if (activeTab === 'formulas') {
      if (view === 'formulas-view' && selectedChapter) {
        return <FormulaView chapterTitle={selectedChapter.chapter_title} onBack={goHome} />;
      }
      return <HomePage textbooks={textbooksForFormulas} onChapterSelect={handleFormulaChapterSelect} title="Select a Chapter for Formulas" buttonText="View Formulas" />;
    }

    // Logic for Previous Years Tab
    if (activeTab === 'previous-years') {
      if (view === 'previous-years-view' && selectedChapter) {
        return <PreviousYearsView chapterTitle={selectedChapter.chapter_title} onBack={goHome} />;
      }
      return <HomePage textbooks={textbooks} onChapterSelect={handlePreviousYearsChapterSelect} title="Select Chapter for Previous Year Qs" buttonText="View Questions" />;
    }

    // Logic for Learn Tab
    switch(view) {
      case 'custom-solution':
        return customProblem ? <CustomSolutionView text={customProblem.text} imageFile={customProblem.imageFile} mode={customProblem.mode} onBack={goHome} /> : <HomePage textbooks={textbooks} onChapterSelect={handleChapterSelect} />;
      case 'exercise':
        return selectedExercise ? <ExerciseView chapter={selectedExercise.chapter} exercise={selectedExercise.exercise} onBack={backToChapter} /> : <HomePage textbooks={textbooks} onChapterSelect={handleChapterSelect} />;
      case 'chapter':
        return selectedChapter ? <ChapterPage chapter={selectedChapter} onBack={goHome} onExerciseSelect={(exercise: Exercise) => handleExerciseSelect(selectedChapter, exercise)} /> : <HomePage textbooks={textbooks} onChapterSelect={handleChapterSelect} />;
      case 'home':
      default:
        return <HomePage textbooks={textbooks} onChapterSelect={handleChapterSelect} />;
    }
  };

  return (
    <div className="min-h-screen font-sans bg-slate-50 dark:bg-slate-900 text-slate-800 dark:text-slate-200 transition-colors duration-300 pb-10 relative overflow-hidden">
      <FloatingSymbolsBackground />
      <div className="w-full max-w-5xl mx-auto p-4 md:p-6 relative z-10">
        <header className="flex items-center justify-between mb-8 gap-4 relative">
          <div className="flex items-center gap-4 cursor-pointer group" onClick={goHome}>
            <div className="relative overflow-hidden rounded-xl shadow-lg border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800">
                <img 
                  src="https://images.unsplash.com/photo-1635070041078-e363dbe005cb?auto=format&fit=crop&w=200&q=80" 
                  alt="Brain Bites 2 Logo" 
                  className="w-16 h-16 md:w-24 md:h-24 object-cover"
                />
            </div>
            <div className="flex flex-col justify-center">
              <h1 className="text-2xl md:text-5xl font-bold text-slate-900 dark:text-white transition-colors leading-tight">
                <span className="group-hover:text-blue-600 dark:group-hover:text-blue-400">Brain Bites 2</span>
              </h1>
              <p className="text-slate-600 dark:text-slate-400 text-xs md:text-base mt-1 hidden sm:block">Your textbook-based guide to PUC Mathematics.</p>
            </div>
          </div>
          <div className="flex items-center gap-3">
            <ThemeToggle />
            
            <div className="relative">
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="p-2 rounded-full bg-slate-200 dark:bg-slate-700 text-slate-800 dark:text-slate-200 hover:bg-slate-300 dark:hover:bg-slate-600 transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500"
                aria-label="Menu"
              >
                <MenuIcon />
              </button>

              {isMenuOpen && (
                <div className="absolute right-0 mt-2 w-64 bg-white dark:bg-slate-800 rounded-xl shadow-xl border border-slate-200 dark:border-slate-700 overflow-hidden z-50 origin-top-right animate-in fade-in slide-in-from-top-2 duration-200">
                  <div className="py-1">
                    <button 
                      onClick={() => handleTabChange('learn')} 
                      className={`w-full text-left px-4 py-3 flex items-center gap-3 hover:bg-slate-50 dark:hover:bg-slate-700 transition-colors ${activeTab === 'learn' ? 'text-blue-600 dark:text-blue-400 font-bold bg-blue-50 dark:bg-blue-900/20' : 'text-slate-700 dark:text-slate-200'}`}
                    >
                      <BookIcon className="w-5 h-5" />
                      Textbook
                    </button>
                    <button 
                      onClick={() => handleTabChange('formulas')} 
                      className={`w-full text-left px-4 py-3 flex items-center gap-3 hover:bg-slate-50 dark:hover:bg-slate-700 transition-colors ${activeTab === 'formulas' ? 'text-amber-600 dark:text-amber-400 font-bold bg-amber-50 dark:bg-amber-900/20' : 'text-slate-700 dark:text-slate-200'}`}
                    >
                      <FormulaIcon className="w-5 h-5" />
                      Formulas
                    </button>
                    <button 
                      onClick={() => handleTabChange('previous-years')} 
                      className={`w-full text-left px-4 py-3 flex items-center gap-3 hover:bg-slate-50 dark:hover:bg-slate-700 transition-colors ${activeTab === 'previous-years' ? 'text-rose-600 dark:text-rose-400 font-bold bg-rose-50 dark:bg-rose-900/20' : 'text-slate-700 dark:text-slate-200'}`}
                    >
                      <ClockIcon className="w-5 h-5" />
                      Previous Year Question Paper
                    </button>
                    <button 
                      onClick={() => handleTabChange('quiz')} 
                      className={`w-full text-left px-4 py-3 flex items-center gap-3 hover:bg-slate-50 dark:hover:bg-slate-700 transition-colors ${activeTab === 'quiz' ? 'text-purple-600 dark:text-purple-400 font-bold bg-purple-50 dark:bg-purple-900/20' : 'text-slate-700 dark:text-slate-200'}`}
                    >
                      <QuizIcon className="w-5 h-5" />
                      Games & Quiz
                    </button>
                  </div>
                </div>
              )}
            </div>
          </div>
        </header>

        {activeTab === 'learn' && (view === 'home' || view === 'custom-solution') && (
            <QuestionInput onSubmit={handleCustomQuestionSubmit} />
        )}

        <main className="bg-white dark:bg-slate-800 rounded-2xl shadow-lg p-6 md:p-8 transition-colors duration-300">
          {renderContent()}
        </main>
        
        <footer className="text-center mt-8 text-sm text-slate-500 dark:text-slate-400 relative z-20">
          <p>Content based on official PUC textbook materials.</p>
        </footer>
      </div>
    </div>
  );
}

export default App;


import React, { useState, useEffect } from 'react';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import { solveTextProblemStream, explainTopicStream } from '../services/geminiService';
import { SolutionDisplay } from './SolutionDisplay';
import { SpinnerIcon } from './icons/SpinnerIcon';

type Exercise = { id: string; text: string };
interface ChapterPageProps {
  chapter: any;
  onBack: () => void;
  onExerciseSelect: (exercise: { id: string; text: string; sectionTitle: string; }) => void;
}

type Tab = 'concepts' | 'exercises';

interface QuestionWithSolutionProps {
  question: any;
  sectionTitle: string;
  chapter: any;
  index: number;
}

// Helper component to handle individual question solution streaming
const QuestionWithSolution: React.FC<QuestionWithSolutionProps> = ({ 
  question, 
  sectionTitle, 
  chapter, 
  index 
}) => {
  const [solution, setSolution] = useState('');
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    let isMounted = true;

    const fetchSolution = async () => {
      // Stagger the requests to prevent hitting API rate limits (1 second per index)
      await new Promise(resolve => setTimeout(resolve, index * 800));
      
      if (!isMounted) return;

      try {
        const chapterContext = {
          number: chapter.chapter_number,
          title: chapter.chapter_title,
        };

        const exerciseData = {
          id: question.id,
          text: question.text,
          sectionTitle: sectionTitle
        };
        
        const stream = solveTextProblemStream(exerciseData, chapterContext);
        
        for await (const chunk of stream) {
          if (!isMounted) break;
          setSolution(prev => prev + chunk);
          // Once we have some data, we can stop the loading spinner, or let SolutionDisplay handle it
          // SolutionDisplay hides spinner if solution is not empty.
        }
        
      } catch (e) {
        if (isMounted) {
          if (e instanceof Error) {
            setError(e.message);
          } else {
            setError('An unknown error occurred.');
          }
        }
      } finally {
        if (isMounted) {
          setIsLoading(false);
        }
      }
    };

    fetchSolution();

    return () => { isMounted = false; };
  }, [question, sectionTitle, chapter, index]);

  return (
    <div className="p-6 bg-white dark:bg-slate-800 rounded-xl shadow-sm border border-slate-200 dark:border-slate-700">
      <div className="flex flex-col gap-4">
        <div className="prose prose-slate dark:prose-invert max-w-none border-b border-slate-100 dark:border-slate-700 pb-4 mb-2">
           <ReactMarkdown remarkPlugins={[remarkGfm]}>
             {`**Q${question.id}.** ${question.text}`}
           </ReactMarkdown>
        </div>
        <div className="mt-2">
            <h4 className="text-sm font-bold text-slate-500 dark:text-slate-400 uppercase tracking-wider mb-3">Solution</h4>
            <SolutionDisplay isLoading={isLoading && !solution} solution={solution} error={error} />
        </div>
      </div>
    </div>
  );
};

export function ChapterPage({ chapter, onBack, onExerciseSelect }: ChapterPageProps): React.JSX.Element {
  const [activeTab, setActiveTab] = useState<Tab>('concepts');
  const [selectedSectionTitle, setSelectedSectionTitle] = useState<string | null>(null);
  
  // State for AI Explanations
  const [explanations, setExplanations] = useState<Record<string, string>>({});
  const [loadingSections, setLoadingSections] = useState<Record<string, boolean>>({});

  // Filter sections that have exercises
  const exerciseSections = chapter.sections.filter((s: any) => s.exercises);

  const handleExplain = async (sectionTitle: string) => {
    if (explanations[sectionTitle]) return; // Already generated

    setLoadingSections(prev => ({ ...prev, [sectionTitle]: true }));
    try {
        const stream = explainTopicStream(sectionTitle, chapter.chapter_title);
        let fullText = "";
        for await (const chunk of stream) {
            fullText += chunk;
            setExplanations(prev => ({ ...prev, [sectionTitle]: fullText }));
        }
    } catch (e) {
        console.error(e);
        // We could handle error state here if needed
    } finally {
        setLoadingSections(prev => ({ ...prev, [sectionTitle]: false }));
    }
  };

  return (
    <div className="space-y-6">
      <div>
        <button onClick={onBack} className="mb-4 text-blue-600 dark:text-blue-400 hover:underline font-semibold">
          &larr; Back to Chapters
        </button>
        <h2 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white">
          Chapter {chapter.chapter_number}: {chapter.chapter_title}
        </h2>
        <p className="mt-2 text-slate-600 dark:text-slate-400">
          Hello there! I'd be happy to help you with the concepts and problems from this chapter.
        </p>
      </div>

      <div className="border-b border-slate-200 dark:border-slate-700">
        <nav className="-mb-px flex space-x-6" aria-label="Tabs">
          <button
            onClick={() => setActiveTab('concepts')}
            className={`${
              activeTab === 'concepts'
                ? 'border-blue-500 text-blue-600'
                : 'border-transparent text-slate-500 hover:text-slate-700 hover:border-slate-300 dark:text-slate-400 dark:hover:text-slate-300 dark:hover:border-slate-600'
            } whitespace-nowrap py-4 px-1 border-b-2 font-medium text-lg transition-colors`}
          >
            Concepts & Examples
          </button>
          <button
            onClick={() => setActiveTab('exercises')}
            className={`${
              activeTab === 'exercises'
                ? 'border-blue-500 text-blue-600'
                : 'border-transparent text-slate-500 hover:text-slate-700 hover:border-slate-300 dark:text-slate-400 dark:hover:text-slate-300 dark:hover:border-slate-600'
            } whitespace-nowrap py-4 px-1 border-b-2 font-medium text-lg transition-colors`}
          >
            Exercises
          </button>
        </nav>
      </div>

      <div>
        {activeTab === 'concepts' && (
          <div className="prose prose-slate dark:prose-invert max-w-none">
            {chapter.sections.map((section: any, index: number) => {
              const isExplaining = loadingSections[section.section_title];
              const explanation = explanations[section.section_title];

              return (
              <section key={index} className="py-4 border-b border-slate-200 dark:border-slate-700 last:border-b-0">
                <h3 
                    className="text-2xl font-semibold !mb-4 text-violet-700 dark:text-violet-300 cursor-pointer hover:underline decoration-dashed decoration-1 underline-offset-4"
                    onClick={() => !explanation && handleExplain(section.section_title)}
                    title="Click to generate detailed explanation"
                >
                    {section.section_title}
                </h3>
                <ReactMarkdown 
                    remarkPlugins={[remarkGfm]}
                    components={{
                        h1: ({node, ...props}) => <h1 className="text-purple-700 dark:text-purple-300 font-bold text-2xl mt-6 mb-4" {...props} />,
                        h2: ({node, ...props}) => <h2 className="text-purple-600 dark:text-purple-400 font-bold text-xl mt-5 mb-3" {...props} />,
                        h3: ({node, ...props}) => <h3 className="text-purple-600 dark:text-purple-400 font-bold text-lg mt-4 mb-2" {...props} />,
                        h4: ({node, ...props}) => <h4 className="text-purple-500 dark:text-purple-400 font-bold text-base mt-4 mb-2" {...props} />,
                        // Table styling if any tables appear in static content
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
                  {section.content}
                </ReactMarkdown>

                {section.definitions?.map((def: any) => (
                  <div key={def.id} className="my-6 p-5 bg-teal-50 dark:bg-teal-900/20 border-l-4 border-teal-500 rounded-r-lg shadow-sm">
                    <strong className="block text-teal-800 dark:text-teal-300 text-lg mb-2 border-b border-teal-200 dark:border-teal-700 pb-1">{def.title}</strong>
                    <p className="text-teal-900 dark:text-teal-100 !mt-1 leading-relaxed">{def.text}</p>
                  </div>
                ))}
                
                {section.examples?.map((ex: any) => (
                  <div key={ex.id} className="my-6">
                    <h4 className="text-lg font-semibold text-gray-700 dark:text-gray-300">Example {ex.id}</h4>
                    <div className="p-4 bg-green-50 dark:bg-green-900/20 border-l-4 border-green-500 rounded-r-lg">
                      <div className="prose-p:inline"><ReactMarkdown remarkPlugins={[remarkGfm]}>{`**Question:** ${ex.question}`}</ReactMarkdown></div>
                      <details className="mt-2 group">
                        <summary className="cursor-pointer text-sm font-semibold text-green-700 dark:text-green-300 group-hover:underline">Show Solution</summary>
                        <div className="!mt-2 pt-2 border-t border-green-200 dark:border-green-800"><ReactMarkdown remarkPlugins={[remarkGfm]}>{`**Solution:** ${ex.solution}`}</ReactMarkdown></div>
                      </details>
                    </div>
                  </div>
                ))}

                {/* AI Explanation Section */}
                <div className="mt-6">
                    {!explanation && !isExplaining && (
                        <button 
                            onClick={() => handleExplain(section.section_title)}
                            className="flex items-center gap-2 text-sm font-bold text-indigo-600 dark:text-indigo-400 bg-indigo-50 dark:bg-indigo-900/20 px-4 py-2 rounded-lg hover:bg-indigo-100 dark:hover:bg-indigo-900/40 transition-colors border border-indigo-200 dark:border-indigo-800 shadow-sm"
                        >
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
                                <path fillRule="evenodd" d="M9 4.5a.75.75 0 01.721.544l.813 2.846a3.75 3.75 0 002.576 2.576l2.846.813a.75.75 0 010 1.442l-2.846.813a3.75 3.75 0 00-2.576 2.576l-.813 2.846a.75.75 0 01-1.442 0l-.813-2.846a3.75 3.75 0 00-2.576-2.576l-2.846-.813a.75.75 0 010-1.442l2.846-.813a3.75 3.75 0 002.576-2.576l.813-2.846A.75.75 0 019 4.5zM9 15a.75.75 0 01.75.75v1.5h1.5a.75.75 0 010 1.5h-1.5v1.5a.75.75 0 01-1.5 0v-1.5h-1.5a.75.75 0 010-1.5h1.5v-1.5A.75.75 0 019 15z" clipRule="evenodd" />
                            </svg>
                            Generate Detailed Explanation & Examples
                        </button>
                    )}

                    {isExplaining && (
                        <div className="flex items-center gap-3 p-4 bg-indigo-50 dark:bg-indigo-900/10 rounded-lg">
                            <SpinnerIcon />
                            <span className="text-indigo-700 dark:text-indigo-300 text-sm animate-pulse">Generating detailed explanation for {section.section_title}...</span>
                        </div>
                    )}

                    {explanation && (
                        <div className="mt-4 p-6 bg-indigo-50 dark:bg-indigo-900/10 border border-indigo-100 dark:border-indigo-800 rounded-xl relative overflow-hidden">
                            <div className="absolute top-0 left-0 w-1 h-full bg-indigo-500"></div>
                            <div className="flex items-center gap-2 mb-4">
                                <span className="bg-indigo-100 dark:bg-indigo-800 text-indigo-700 dark:text-indigo-200 text-xs font-bold px-2 py-1 rounded uppercase tracking-wide">AI Generated</span>
                                <h4 className="text-lg font-bold text-indigo-900 dark:text-indigo-200 m-0">Detailed Explanation</h4>
                            </div>
                            <ReactMarkdown 
                                remarkPlugins={[remarkGfm]}
                                components={{
                                    // Custom styling for AI content to make it distinct
                                    h1: ({node, ...props}) => <h3 className="text-indigo-800 dark:text-indigo-300 font-bold text-xl mt-4 mb-2" {...props} />,
                                    h2: ({node, ...props}) => <h4 className="text-indigo-700 dark:text-indigo-400 font-bold text-lg mt-3 mb-2" {...props} />,
                                    h3: ({node, ...props}) => <h5 className="text-indigo-600 dark:text-indigo-400 font-bold text-base mt-2 mb-1" {...props} />,
                                    strong: ({node, ...props}) => <strong className="text-indigo-900 dark:text-indigo-100 font-bold" {...props} />,
                                    ul: ({node, ...props}) => <ul className="list-disc pl-5 my-2 space-y-1 text-slate-700 dark:text-slate-300" {...props} />,
                                    ol: ({node, ...props}) => <ol className="list-decimal pl-5 my-2 space-y-1 text-slate-700 dark:text-slate-300" {...props} />,
                                    p: ({node, ...props}) => <p className="mb-3 text-slate-700 dark:text-slate-300 leading-relaxed" {...props} />,
                                }}
                            >
                                {explanation}
                            </ReactMarkdown>
                        </div>
                    )}
                </div>
              </section>
            );
            })}
          </div>
        )}

        {activeTab === 'exercises' && (
           <div className="space-y-6">
             {!selectedSectionTitle ? (
               // Level 1: List of Exercise Sets (Star Shapes)
               <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-8 justify-items-center py-6">
                 {exerciseSections.map((section: any, index: number) => (
                   <button 
                     key={index}
                     onClick={() => setSelectedSectionTitle(section.exercises.title)}
                     className="relative w-40 h-40 group transition-transform hover:scale-105 focus:outline-none"
                   >
                     {/* Star Shape SVG Background */}
                     <div className="absolute inset-0 text-amber-100 dark:text-amber-900/30 group-hover:text-amber-200 dark:group-hover:text-amber-800/50 transition-colors drop-shadow-md filter">
                        <svg viewBox="0 0 24 24" fill="currentColor" className="w-full h-full stroke-amber-300 dark:stroke-amber-700 stroke-1">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z" />
                        </svg>
                     </div>
                     
                     {/* Content Centered on the Star */}
                     <div className="absolute inset-0 flex flex-col items-center justify-center p-8 text-center z-10">
                        <h3 className="text-sm font-bold text-amber-900 dark:text-amber-100 mb-1 leading-tight break-words w-full">
                          {section.exercises.title}
                        </h3>
                        <p className="text-xs font-semibold text-amber-700 dark:text-amber-300">
                          {section.exercises.questions.length} Qs
                        </p>
                     </div>
                   </button>
                 ))}
                 {exerciseSections.length === 0 && (
                   <div className="col-span-full text-center py-10 text-slate-500 bg-slate-50 dark:bg-slate-800/50 rounded-lg w-full">
                     No exercises available for this chapter yet.
                   </div>
                 )}
               </div>
             ) : (
               // Level 2: Questions for Selected Exercise with Inline Solutions
               <div>
                  <button 
                    onClick={() => setSelectedSectionTitle(null)}
                    className="mb-6 flex items-center text-blue-600 dark:text-blue-400 hover:underline font-medium"
                  >
                    &larr; Back to Exercise List
                  </button>
                  
                  {(() => {
                    const section = exerciseSections.find((s: any) => s.exercises.title === selectedSectionTitle);
                    if (!section) return null;
                    
                    return (
                      <div className="space-y-6">
                        <div className="border-b border-slate-200 dark:border-slate-700 pb-4 mb-6">
                          <h3 className="text-2xl font-bold text-slate-800 dark:text-slate-100">
                            {section.exercises.title}
                          </h3>
                          <p className="text-slate-500 dark:text-slate-400 mt-1">
                            {section.exercises.questions.length} Questions
                          </p>
                        </div>
                        
                        <div className="grid gap-8">
                          {section.exercises.questions.map((q: any, index: number) => (
                             <QuestionWithSolution 
                               key={q.id}
                               question={q}
                               sectionTitle={section.exercises.title}
                               chapter={chapter}
                               index={index}
                             />
                          ))}
                        </div>
                      </div>
                    );
                  })()}
               </div>
             )}
           </div>
        )}
      </div>
    </div>
  );
}

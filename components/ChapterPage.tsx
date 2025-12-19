
import React, { useState } from 'react';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import { solveTextProblemStream, explainTopicStream } from '../services/geminiService';
import { SolutionDisplay } from './SolutionDisplay';
import { SpinnerIcon } from './icons/SpinnerIcon';

type Tab = 'concepts' | 'exercises';

interface QuestionWithSolutionProps {
  question: any;
  sectionTitle: string;
  chapter: any;
  index: number;
}

const QuestionWithSolution: React.FC<QuestionWithSolutionProps> = ({ question, sectionTitle, chapter }) => {
  const [solution, setSolution] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');
  const [isExpanded, setIsExpanded] = useState(false);

  const handleShowSolution = async () => {
    setIsExpanded(true);
    if (solution) return;
    setIsLoading(true);
    setError('');
    try {
        const stream = solveTextProblemStream(
          { id: question.id, text: question.text, sectionTitle },
          { number: chapter.chapter_number, title: chapter.chapter_title }
        );
        for await (const chunk of stream) { setSolution(prev => prev + chunk); }
    } catch (e) { setError(e instanceof Error ? e.message : 'Error occurred.'); }
    finally { setIsLoading(false); }
  };

  return (
    <div className="p-6 bg-white dark:bg-slate-800 rounded-xl shadow-sm border border-slate-200 dark:border-slate-700">
      <div className="prose prose-slate dark:prose-invert max-w-none border-b border-slate-100 dark:border-slate-700 pb-4 mb-2">
           <ReactMarkdown remarkPlugins={[remarkGfm]}>{`**Q${question.id}.** ${question.text}`}</ReactMarkdown>
      </div>
      <div className="mt-2">
            {!isExpanded ? (
                <button onClick={handleShowSolution} className="flex items-center gap-2 px-5 py-2.5 bg-blue-600 hover:bg-blue-700 text-white rounded-lg transition-colors font-medium text-sm shadow-md">
                    View Solution
                </button>
            ) : (
                <div className="animate-in fade-in slide-in-from-top-2 duration-300">
                    <SolutionDisplay isLoading={isLoading && !solution} solution={solution} error={error} />
                </div>
            )}
      </div>
    </div>
  );
};

export function ChapterPage({ chapter, onBack }: any): React.JSX.Element {
  const [activeTab, setActiveTab] = useState<Tab>('concepts');
  const [selectedSectionTitle, setSelectedSectionTitle] = useState<string | null>(null);
  const [explanations, setExplanations] = useState<Record<string, string>>({});

  const handleExplain = async (sectionTitle: string) => {
    if (explanations[sectionTitle]) return;
    try {
        const stream = explainTopicStream(sectionTitle, chapter.chapter_title);
        let fullText = "";
        for await (const chunk of stream) {
            fullText += chunk;
            setExplanations(prev => ({ ...prev, [sectionTitle]: fullText }));
        }
    } catch (e) { console.error(e); }
  };

  return (
    <div className="space-y-6">
      <div>
        <button onClick={onBack} className="mb-4 text-blue-600 dark:text-blue-400 hover:underline font-semibold">&larr; Back</button>
        <h2 className="text-3xl font-bold text-slate-900 dark:text-white">Chapter {chapter.chapter_number}: {chapter.chapter_title}</h2>
      </div>
      <div className="border-b border-slate-200 dark:border-slate-700">
        <nav className="-mb-px flex space-x-6">
          <button onClick={() => setActiveTab('concepts')} className={`${activeTab === 'concepts' ? 'border-blue-500 text-blue-600' : 'border-transparent text-slate-500'} py-4 font-medium text-lg border-b-2`}>Concepts</button>
          <button onClick={() => setActiveTab('exercises')} className={`${activeTab === 'exercises' ? 'border-blue-500 text-blue-600' : 'border-transparent text-slate-500'} py-4 font-medium text-lg border-b-2`}>Exercises</button>
        </nav>
      </div>
      {activeTab === 'concepts' && (
          <div className="prose prose-slate dark:prose-invert max-w-none">
            {chapter.sections.map((section: any, idx: number) => (
              <section key={idx} className="py-4 border-b border-slate-200 dark:border-slate-700 last:border-b-0">
                <h3 onClick={() => handleExplain(section.section_title)} className="text-2xl font-semibold !mb-4 text-violet-700 dark:text-violet-300 cursor-pointer hover:underline">{section.section_title}</h3>
                <ReactMarkdown remarkPlugins={[remarkGfm]}>{section.content}</ReactMarkdown>
                {explanations[section.section_title] && (
                    <div className="mt-4 p-6 bg-indigo-50 dark:bg-indigo-900/10 border-l-4 border-indigo-500 rounded-lg">
                        <ReactMarkdown remarkPlugins={[remarkGfm]}>{explanations[section.section_title]}</ReactMarkdown>
                    </div>
                )}
              </section>
            ))}
          </div>
      )}
      {activeTab === 'exercises' && (
           <div className="space-y-6">
             {!selectedSectionTitle ? (
               <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 py-6">
                 {chapter.sections.filter((s:any) => s.exercises).map((section: any, idx: number) => (
                   <button key={idx} onClick={() => setSelectedSectionTitle(section.exercises.title)} className="p-4 bg-slate-50 dark:bg-slate-800 rounded-xl border border-slate-200 hover:border-blue-500 transition-all text-center">
                     <h3 className="font-bold text-sm mb-1">{section.exercises.title}</h3>
                     <p className="text-xs text-slate-500">{section.exercises.questions.length} Qs</p>
                   </button>
                 ))}
               </div>
             ) : (
               <div>
                  <button onClick={() => setSelectedSectionTitle(null)} className="mb-6 flex items-center text-blue-600">&larr; Back</button>
                  {(() => {
                    const section = chapter.sections.find((s: any) => s.exercises?.title === selectedSectionTitle);
                    if (!section) return null;
                    return (
                      <div className="space-y-6">
                        <h3 className="text-2xl font-bold border-b pb-2">{section.exercises.title}</h3>
                        <div className="grid gap-6">
                          {section.exercises.questions.map((q: any, idx: number) => (
                             <QuestionWithSolution key={idx} question={q} sectionTitle={section.exercises.title} chapter={chapter} index={idx} />
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
  );
}

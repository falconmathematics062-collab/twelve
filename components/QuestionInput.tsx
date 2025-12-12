
import React, { useRef, useState } from 'react';
import { CameraIcon } from './icons/CameraIcon';
import { MistakeIcon } from './icons/MistakeIcon';

interface QuestionInputProps {
  onSubmit: (text: string, imageFile: File | null, mode: 'solve' | 'mistake') => void;
}

export function QuestionInput({ onSubmit }: QuestionInputProps): React.JSX.Element {
  const [text, setText] = useState('');
  const [imageFile, setImageFile] = useState<File | null>(null);
  const [previewUrl, setPreviewUrl] = useState<string | null>(null);
  const [mode, setMode] = useState<'solve' | 'mistake'>('solve');
  
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      setImageFile(file);
      const reader = new FileReader();
      reader.onloadend = () => {
        setPreviewUrl(reader.result as string);
      };
      reader.readAsDataURL(file);
    }
  };

  const clearImage = () => {
    setImageFile(null);
    setPreviewUrl(null);
    setMode('solve'); // Reset mode when image is cleared
    if (fileInputRef.current) {
      fileInputRef.current.value = '';
    }
  };

  const handleSubmit = () => {
    if (!text.trim() && !imageFile) return;
    onSubmit(text, imageFile, mode);
    setText('');
    clearImage();
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSubmit();
    }
  };

  const handleCameraClick = () => {
    setMode('solve');
    fileInputRef.current?.click();
  };

  const handleMistakeClick = () => {
    setMode('mistake');
    fileInputRef.current?.click();
  };

  return (
    <div className="bg-white dark:bg-slate-800 rounded-xl shadow-md border border-slate-200 dark:border-slate-700 p-4 mb-8">
      <h3 className="text-sm font-bold text-slate-500 dark:text-slate-400 mb-2 uppercase tracking-wide">
        {mode === 'mistake' && imageFile ? 'Mistake Finder' : 'Ask a Question'}
      </h3>
      <div className="relative">
        <textarea
          value={text}
          onChange={(e) => setText(e.target.value)}
          onKeyDown={handleKeyDown}
          placeholder={mode === 'mistake' && imageFile ? "Describe where you think you made a mistake..." : "Type your question here or take a photo..."}
          className="w-full pl-4 pr-24 py-3 rounded-lg border border-slate-300 dark:border-slate-600 bg-slate-50 dark:bg-slate-900 text-slate-900 dark:text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500 resize-none h-14 md:h-16"
        />
        <div className="absolute right-3 top-3 flex gap-2">
            <button 
              onClick={handleMistakeClick}
              className={`p-2 transition-colors ${mode === 'mistake' && imageFile ? 'text-orange-600 dark:text-orange-400 bg-orange-50 dark:bg-orange-900/30 rounded-full' : 'text-slate-400 hover:text-orange-600 dark:hover:text-orange-400'}`}
              title="Find mistakes in your solution"
            >
              <MistakeIcon className="w-6 h-6" />
            </button>
            <button 
              onClick={handleCameraClick}
              className={`p-2 transition-colors ${mode === 'solve' && imageFile ? 'text-green-600 dark:text-green-400 bg-green-50 dark:bg-green-900/30 rounded-full' : 'text-slate-400 hover:text-green-600 dark:hover:text-green-400'}`}
              title="Solve a question"
            >
              <CameraIcon className="w-6 h-6" />
            </button>
        </div>
        <input
          type="file"
          ref={fileInputRef}
          onChange={handleFileChange}
          accept="image/*"
          capture="environment"
          className="hidden"
        />
      </div>

      {previewUrl && (
        <div className="mt-3 flex items-start gap-4 p-3 bg-slate-50 dark:bg-slate-700/50 rounded-lg">
          <div className="relative group flex-shrink-0">
            <img src={previewUrl} alt="Preview" className="h-24 w-24 object-cover rounded-lg border border-slate-200 dark:border-slate-700" />
            <button 
              onClick={clearImage}
              className="absolute -top-2 -right-2 bg-red-500 text-white rounded-full p-1 shadow-sm hover:bg-red-600"
            >
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-3 h-3">
                <path d="M6.28 5.22a.75.75 0 00-1.06 1.06L8.94 10l-3.72 3.72a.75.75 0 101.06 1.06L10 11.06l3.72 3.72a.75.75 0 101.06-1.06L11.06 10l3.72-3.72a.75.75 0 00-1.06-1.06L10 8.94 6.28 5.22z" />
              </svg>
            </button>
          </div>
          <div className="self-center flex flex-col">
             <span className="font-semibold text-sm text-slate-700 dark:text-slate-300">
                {mode === 'mistake' ? 'Checking Solution' : 'Solving Question'}
             </span>
             <span className="text-xs text-slate-500 dark:text-slate-400 mt-1">
                 {mode === 'mistake' ? 'AI will find mistakes in this image.' : 'AI will solve the problem in this image.'}
             </span>
          </div>
        </div>
      )}

      <div className="mt-3 flex justify-end">
        <button
          onClick={handleSubmit}
          disabled={!text.trim() && !imageFile}
          className={`font-bold py-2 px-6 rounded-lg transition-colors disabled:bg-slate-300 dark:disabled:bg-slate-700 disabled:cursor-not-allowed ${mode === 'mistake' ? 'bg-orange-600 hover:bg-orange-700 text-white' : 'bg-green-600 hover:bg-green-700 text-white'}`}
        >
          {mode === 'mistake' ? 'Find Mistakes' : 'Get Solution'}
        </button>
      </div>
    </div>
  );
}

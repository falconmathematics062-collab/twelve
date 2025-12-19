
import React from 'react';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import { MatrixRenderer } from './MatrixRenderer';

interface QuestionTextContentProps {
  content: string;
}

// Regex to find matrices in the format [ ...; ...; ... ]
// It looks for a '[' followed by any characters (non-greedy) until a ']'
// and captures the content within the brackets, assuming semicolons separate rows.
// It tries to be robust to spaces around elements and semicolons.
const matrixRegex = /\[\s*([^[\]]*?(?:;[ \t]*[^[\]]*?)*?)\s*\]/g;


export const QuestionTextContent: React.FC<QuestionTextContentProps> = ({ content }) => {
  const parts: React.ReactNode[] = [];
  let lastIndex = 0;
  let match;

  while ((match = matrixRegex.exec(content)) !== null) {
    // Add preceding text as Markdown
    if (match.index > lastIndex) {
      const markdownPart = content.substring(lastIndex, match.index);
      if (markdownPart.trim().length > 0) {
        parts.push(<ReactMarkdown key={`md-${lastIndex}`} remarkPlugins={[remarkGfm]}>{markdownPart}</ReactMarkdown>);
      }
    }

    // Add the matrix using MatrixRenderer
    const matrixContent = match[1]; // The captured group inside the brackets
    parts.push(<MatrixRenderer key={`matrix-${match.index}`} matrixString={matrixContent} />);
    
    lastIndex = matrixRegex.lastIndex;
  }

  // Add any remaining text as Markdown
  if (lastIndex < content.length) {
    const markdownPart = content.substring(lastIndex);
    if (markdownPart.trim().length > 0) {
      parts.push(<ReactMarkdown key={`md-${lastIndex}`} remarkPlugins={[remarkGfm]}>{markdownPart}</ReactMarkdown>);
    }
  }

  return <>{parts}</>;
};

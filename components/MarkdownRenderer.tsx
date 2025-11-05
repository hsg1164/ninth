import React from 'react';
import { ExternalLinkIcon } from './icons.tsx';

interface MarkdownRendererProps {
  content: string;
}

const MarkdownRenderer: React.FC<MarkdownRendererProps> = ({ content }) => {
  const parseInlineText = (text: string) => {
    // Split text by markdown patterns, keeping delimiters
    const parts = text.split(/(\*\*.*?\*\*|\*.*?\*|https?:\/\/[^\s]+)/g);
    
    return parts.map((part, index) => {
      if (part.startsWith('**') && part.endsWith('**')) {
        return <strong key={index} className="font-bold text-lg">{part.slice(2, -2)}</strong>;
      }
      if (part.startsWith('*') && part.endsWith('*')) {
        return <strong key={index}>{part.slice(1, -1)}</strong>;
      }
      if (part.match(/^https?:\/\//)) {
        let domain;
        try {
            domain = new URL(part).hostname;
        } catch (e) {
            domain = part;
        }
        return (
          <a
            key={index}
            href={part}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 my-1 mr-1 py-1 px-3 rounded-lg bg-teal-100 dark:bg-teal-900/60 text-teal-700 dark:text-teal-200 font-semibold hover:bg-teal-200 dark:hover:bg-teal-800 transition-all duration-200 break-all"
          >
            <ExternalLinkIcon className="h-4 w-4" />
            <span>{domain}</span>
          </a>
        );
      }
      return part; // plain text
    });
  };

  const lines = content.split('\n');
  // FIX: Replaced JSX.Element with React.ReactElement to resolve "Cannot find namespace 'JSX'" error.
  const output: React.ReactElement[] = [];
  let listItems: string[] = [];

  const flushList = (key: string | number) => {
    if (listItems.length > 0) {
      output.push(
        <ul key={`ul-${key}`} className="list-disc list-outside space-y-1 my-2 mr-6">
          {listItems.map((item, idx) => (
            <li key={idx}>{parseInlineText(item)}</li>
          ))}
        </ul>
      );
      listItems = [];
    }
  };

  lines.forEach((line, i) => {
    const listItemMatch = line.match(/^[-*]\s+(.*)/);
    if (listItemMatch) {
      listItems.push(listItemMatch[1]);
    } else {
      flushList(i);
      if (line.trim() !== '') {
        output.push(<p key={i}>{parseInlineText(line)}</p>);
      }
    }
  });

  flushList('end');

  return <div className="space-y-2">{output}</div>;
};

export default MarkdownRenderer;
import React from 'react';
import { 
  ExternalLinkIcon,
} from './icons.tsx';
import { subjectResources } from '../data/resources.ts';
import type { SubjectResources } from '../data/resources.ts';


// Color styling maps
const colorClasses: { [key: string]: { bg: string; text: string; border: string } } = {
  red: { bg: "bg-red-500/10", text: "text-red-600", border: "border-red-500" },
  amber: { bg: "bg-amber-500/10", text: "text-amber-600", border: "border-amber-500" },
  blue: { bg: "bg-blue-500/10", text: "text-blue-600", border: "border-blue-500" },
  green: { bg: "bg-green-500/10", text: "text-green-600", border: "border-green-500" },
  indigo: { bg: "bg-indigo-500/10", text: "text-indigo-600", border: "border-indigo-500" },
  teal: { bg: "bg-teal-500/10", text: "text-teal-600", border: "border-teal-500" },
  slate: { bg: "bg-slate-500/10", text: "text-slate-600", border: "border-slate-500" },
};

const darkColorClasses: { [key: string]: { bg: string; text: string; border: string } } = {
  red: { bg: "dark:bg-red-900/20", text: "dark:text-red-300", border: "dark:border-red-700" },
  amber: { bg: "dark:bg-amber-900/20", text: "dark:text-amber-300", border: "dark:border-amber-700" },
  blue: { bg: "dark:bg-blue-900/20", text: "dark:text-blue-300", border: "dark:border-blue-700" },
  green: { bg: "dark:bg-green-900/20", text: "dark:text-green-300", border: "dark:border-green-700" },
  indigo: { bg: "dark:bg-indigo-900/20", text: "dark:text-indigo-300", border: "dark:border-indigo-700" },
  teal: { bg: "dark:bg-teal-900/20", text: "dark:text-teal-300", border: "dark:border-teal-700" },
  slate: { bg: "dark:bg-slate-900/20", text: "dark:text-slate-300", border: "dark:border-slate-700" },
};

// Reusable card component for a single subject's resources
const SubjectResourceCard: React.FC<{ resource: SubjectResources; delay: number }> = ({ resource, delay }) => {
    const colors = colorClasses[resource.color] || { bg: "bg-slate-50", text: "text-slate-700", border: "border-slate-500" };
    const darkColors = darkColorClasses[resource.color] || { bg: "dark:bg-slate-900/20", text: "dark:text-slate-300", border: "dark:border-slate-700" };
    const Icon = resource.icon;
    
    return (
      <div 
        className={`bg-white dark:bg-gray-800 p-6 rounded-2xl shadow-lg border-t-4 ${colors.border} ${darkColors.border} transition-all duration-300 hover:shadow-xl hover:-translate-y-1 animate-fadeInUp`}
        style={{ animationDelay: `${delay}ms` }}
      >
        <div className="flex items-center gap-4 mb-4">
          <div className={`p-3 rounded-xl ${colors.bg} ${darkColors.bg}`}>
            <Icon className={`h-8 w-8 ${colors.text} ${darkColors.text}`} />
          </div>
          <h3 className="text-xl sm:text-2xl font-bold text-gray-800 dark:text-white">{resource.subject}</h3>
        </div>
        <div className="space-y-3">
            {resource.books.map((book) => (
                <a 
                    key={book.link}
                    href={book.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-between p-3 rounded-lg bg-gray-50 dark:bg-gray-700/50 hover:bg-gray-100 dark:hover:bg-gray-700 transition-all duration-200 group"
                >
                    <span className="font-semibold text-gray-700 dark:text-gray-200">{book.title}</span>
                    <ExternalLinkIcon className="h-5 w-5 text-gray-400 dark:text-gray-500 group-hover:text-teal-500 transition-colors" />
                </a>
            ))}
        </div>
      </div>
    );
};


// Main component for the page
const Resources: React.FC = () => {
  return (
    <div className="space-y-12">
      <div>
        <h1 className="text-2xl sm:text-3xl font-bold mb-4">المصادر التعليمية</h1>
        <p className="text-md sm:text-lg text-gray-600 dark:text-gray-400 mb-8 max-w-3xl">
          هنا يمكنك العثور على الكتب المدرسية والمواد الإثرائية لكل مادة. اضغط على الرابط لتحميل الكتاب مباشرة.
        </p>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {subjectResources.map((resource, index) => (
                <SubjectResourceCard key={resource.subject} resource={resource} delay={index * 100} />
            ))}
        </div>
      </div>
    </div>
  );
};

export default Resources;
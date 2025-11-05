import React from 'react';
import { 
  ExternalLinkIcon,
} from './icons.tsx';
import { whatsappResource } from '../data/resources.ts';
import type { LinkGroup } from '../data/resources.ts';


// Color styling maps
const colorClasses: { [key: string]: { bg: string; text: string; border: string } } = {
  green: { bg: "bg-green-500/10", text: "text-green-600", border: "border-green-500" },
};

const darkColorClasses: { [key: string]: { bg: string; text: string; border: string } } = {
    green: { bg: "dark:bg-green-900/20", text: "dark:text-green-300", border: "dark:border-green-700" },
};

// Reusable card component for a group of links
const LinkGroupCard: React.FC<{ group: LinkGroup }> = ({ group }) => {
    const colors = colorClasses[group.color] || { bg: "bg-slate-50", text: "text-slate-700", border: "border-slate-500" };
    const darkColors = darkColorClasses[group.color] || { bg: "dark:bg-slate-900/20", text: "dark:text-slate-300", border: "dark:border-slate-700" };
    const GroupIcon = group.icon;
    
    return (
      <div className={`bg-white dark:bg-gray-800 p-6 rounded-2xl shadow-lg border-t-4 ${colors.border} ${darkColors.border} transition-all duration-300 hover:shadow-xl hover:-translate-y-1 animate-fadeInUp`}>
        <div className="flex items-center gap-4 mb-4">
          <div className={`p-3 rounded-xl ${colors.bg} ${darkColors.bg}`}>
            <GroupIcon className={`h-8 w-8 ${colors.text} ${darkColors.text}`} />
          </div>
          <h3 className="text-xl sm:text-2xl font-bold text-gray-800 dark:text-white">{group.title}</h3>
        </div>
        <div className="space-y-3">
            {group.links.map((link, index) => {
                const LinkIcon = link.icon;
                return (
                    <a 
                        key={link.link}
                        href={link.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center justify-between p-3 rounded-lg bg-gray-50 dark:bg-gray-700/50 hover:bg-gray-100 dark:hover:bg-gray-700 transition-all duration-200 group animate-fadeInUp"
                        style={{ animationDelay: `${100 + index * 50}ms` }}
                    >
                        <div className="flex items-center gap-3">
                            <LinkIcon className={`h-6 w-6 ${colors.text} ${darkColors.text}`} />
                            <span className="font-semibold text-gray-700 dark:text-gray-200">{link.title}</span>
                        </div>
                        <ExternalLinkIcon className="h-5 w-5 text-gray-400 dark:text-gray-500 group-hover:text-teal-500 transition-colors" />
                    </a>
                )
            })}
        </div>
      </div>
    );
};

// Main component for the page
const WhatsappGroups: React.FC = () => {
  return (
    <div className="space-y-12">
      <div>
        <h1 className="text-2xl sm:text-3xl font-bold mb-4">مجموعات الواتساب</h1>
        <p className="text-md sm:text-lg text-gray-600 dark:text-gray-400 mb-8 max-w-3xl">
            انضم إلى مجموعات الدراسة الخاصة بالمواد المختلفة للتواصل مع المعلمين والزملاء والحصول على آخر التحديثات والمواد التعليمية.
        </p>
        <LinkGroupCard group={whatsappResource} />
      </div>
    </div>
  );
};

export default WhatsappGroups;
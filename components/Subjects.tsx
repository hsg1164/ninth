import React from 'react';
import { CalculatorIcon, GlobeIcon, LibraryIcon, QuillIcon, AtomIcon, TranslateIcon, MoonIcon, CodeIcon } from './icons.tsx';

// Define the structure for a subject
interface Subject {
  name: string;
  icon: React.ElementType; // Use ElementType to pass the component reference
  color: string; // Use a key to map to gradient classes
}

// Data for all subjects, refactored for better structure
const subjects: Subject[] = [
  { name: "لغة عربية", icon: QuillIcon, color: "red" },
  { name: "رياضيات", icon: CalculatorIcon, color: "blue" },
  { name: "علوم", icon: AtomIcon, color: "green" },
  { name: "لغة إنجليزية", icon: TranslateIcon, color: "amber" },
  { name: "تاريخ", icon: LibraryIcon, color: "purple" },
  { name: "جغرافيا", icon: GlobeIcon, color: "indigo" },
  { name: "تربية إسلامية", icon: MoonIcon, color: "teal" },
  { name: "تكنولوجيا", icon: CodeIcon, color: "slate" },
];

// Map color keys to Tailwind CSS gradient classes
const gradientClasses: { [key: string]: string } = {
  red: "from-red-500 to-orange-500",
  blue: "from-blue-500 to-sky-500",
  green: "from-green-500 to-emerald-500",
  amber: "from-amber-400 to-yellow-500",
  purple: "from-purple-500 to-violet-500",
  indigo: "from-indigo-500 to-blue-600",
  teal: "from-teal-500 to-cyan-500",
  slate: "from-slate-600 to-gray-700",
};

// Refactored SubjectCard component with new hover effects and logic
const SubjectCard: React.FC<{ name: string; icon: React.ElementType; color: string; delay: number }> = ({ name, icon: Icon, color, delay }) => (
  <div 
    className="bg-white dark:bg-gray-800 rounded-2xl p-6 flex flex-col items-center justify-center text-center space-y-4 shadow-lg hover:shadow-xl transform transition-all duration-300 hover:-translate-y-2 cursor-pointer animate-fadeInUp"
    style={{ animationDelay: `${delay}ms` }}
  >
    <div className={`p-4 rounded-full bg-gradient-to-br ${gradientClasses[color] || 'from-gray-400 to-gray-500'} text-white shadow-lg`}>
      <Icon className="h-10 w-10" />
    </div>
    <h3 className="text-xl font-bold text-gray-800 dark:text-white">{name}</h3>
  </div>
);

const Subjects: React.FC = () => {
  return (
    <div>
      <h1 className="text-3xl font-bold mb-6">المواد الدراسية</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {subjects.map((subject, index) => (
          <SubjectCard 
            key={subject.name} 
            name={subject.name} 
            icon={subject.icon} 
            color={subject.color} 
            delay={index * 100} 
          />
        ))}
      </div>
    </div>
  );
};

export default Subjects;
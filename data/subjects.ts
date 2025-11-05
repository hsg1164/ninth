import React from 'react';
import { 
    CalculatorIcon, 
    GlobeIcon, 
    QuillIcon, 
    MoonIcon, 
    FlaskIcon, 
    BookBookmarkIcon, 
    MicrochipIcon 
} from '../components/icons';

// Interface to define the structure of subject details
export interface SubjectDetails {
  icon: React.ElementType;
  color: string;
  lightColorClass: string;
  darkColorClass: string;
  borderColorClass: string;
  darkBorderColorClass: string;
  textColorClass: string;
  darkTextColorClass: string;
}

// Centralized map for all subject details including color schemes and icons
export const subjectDetailsMap: { [key: string]: SubjectDetails } = {
    "لغة عربية":    { icon: QuillIcon,       color: "red",     lightColorClass: "bg-red-50",     darkColorClass: "dark:bg-red-900/40",     borderColorClass: "border-red-500",     darkBorderColorClass: "dark:border-red-600",     textColorClass: "text-red-800",     darkTextColorClass: "dark:text-red-200" },
    "رياضيات":       { icon: CalculatorIcon,  color: "blue",    lightColorClass: "bg-blue-50",    darkColorClass: "dark:bg-blue-900/40",    borderColorClass: "border-blue-500",    darkBorderColorClass: "dark:border-blue-600",    textColorClass: "text-blue-800",    darkTextColorClass: "dark:text-blue-200" },
    "علوم":           { icon: FlaskIcon,        color: "green",   lightColorClass: "bg-green-50",   darkColorClass: "dark:bg-green-900/40",   borderColorClass: "border-green-500",   darkBorderColorClass: "dark:border-green-600",   textColorClass: "text-green-800",   darkTextColorClass: "dark:text-green-200" },
    "لغة إنجليزية":  { icon: BookBookmarkIcon,   color: "amber",   lightColorClass: "bg-amber-50",   darkColorClass: "dark:bg-amber-900/40",   borderColorClass: "border-amber-500",   darkBorderColorClass: "dark:border-amber-600",   textColorClass: "text-amber-800",   darkTextColorClass: "dark:text-amber-200" },
    "دراسات اجتماعية": { icon: GlobeIcon,       color: "indigo",  lightColorClass: "bg-indigo-50",  darkColorClass: "dark:bg-indigo-900/40",  borderColorClass: "border-indigo-500",  darkBorderColorClass: "dark:border-indigo-600",  textColorClass: "text-indigo-800",  darkTextColorClass: "dark:text-indigo-200" },
    "تربية إسلامية": { icon: MoonIcon,        color: "teal",    lightColorClass: "bg-teal-50",    darkColorClass: "dark:bg-teal-900/40",    borderColorClass: "border-teal-500",    darkBorderColorClass: "dark:border-teal-600",    textColorClass: "text-teal-800",    darkTextColorClass: "dark:text-teal-200" },
    "تكنولوجيا":     { icon: MicrochipIcon,        color: "slate",   lightColorClass: "bg-slate-100",  darkColorClass: "dark:bg-slate-800",      borderColorClass: "border-slate-500",   darkBorderColorClass: "dark:border-slate-600",   textColorClass: "text-slate-800",   darkTextColorClass: "dark:text-slate-200" },
};
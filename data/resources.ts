import React from 'react';
import { 
  CalculatorIcon, 
  GlobeIcon, 
  QuillIcon, 
  MoonIcon, 
  FlaskIcon,
  BookBookmarkIcon,
  MicrochipIcon,
  WhatsappIcon,
  ClipboardListIcon,
  SupportIcon,
  FacebookIcon,
  AcademicCapIcon
} from '../components/icons';

// --- Resources Data (from Resources.tsx) ---
export interface Book {
  title: string;
  link: string;
}

export interface SubjectResources {
  subject: string;
  icon: React.ElementType;
  color: string;
  books: Book[];
}

export const subjectResources: SubjectResources[] = [
    { 
        subject: "لغة عربية", 
        icon: QuillIcon, 
        color: "red",
        books: [
            { title: "كتاب العربي - الفصل الأول", link: "https://www.wepal.net/library/?app=content.download.150.1" },
            { title: "كتاب العربي - الفصل الثاني", link: "https://www.wepal.net/library/?app=content.download.144.1" },
        ]
    },
    { 
        subject: "لغة إنجليزية", 
        icon: BookBookmarkIcon, 
        color: "amber",
        books: [
            { title: "كتاب الإنجليزي - الفصل الأول", link: "https://www.wepal.net/library/?app=content.download.151.1" },
            { title: "كتاب الإنجليزي - الفصل الثاني", link: "https://www.wepal.net/library/?app=content.download.145.1" },
        ]
    },
    { 
        subject: "رياضيات", 
        icon: CalculatorIcon, 
        color: "blue",
        books: [
            { title: "كتاب الرياضيات - الفصل الأول", link: "https://www.wepal.net/library/?app=content.download.153.1" },
            { title: "كتاب الرياضيات - الفصل الثاني", link: "https://www.wepal.net/library/?app=content.download.147.1" },
        ]
    },
    { 
        subject: "علوم وحياة", 
        icon: FlaskIcon, 
        color: "green",
        books: [
            { title: "كتاب العلوم والحياة - الفصل الأول", link: "https://www.wepal.net/library/?app=content.download.155.1" },
            { title: "كتاب العلوم والحياة - الفصل الثاني", link: "https://www.wepal.net/library/?app=content.download.149.1" },
        ]
    },
    { 
        subject: "دراسات اجتماعية", 
        icon: GlobeIcon, 
        color: "indigo",
        books: [
            { title: "كتاب الدراسات - الفصل الأول", link: "https://www.wepal.net/library/?app=content.download.154.1" },
            { title: "كتاب الدراسات - الفصل الثاني", link: "https://www.wepal.net/library/?app=content.download.148.1" },
        ]
    },
    { 
        subject: "تربية إسلامية", 
        icon: MoonIcon, 
        color: "teal",
        books: [
            { title: "كتاب التربية الإسلامية - الفصل الأول", link: "https://www.wepal.net/library/?app=content.download.152.1" },
            { title: "كتاب التربية الإسلامية - الفصل الثاني", link: "https://www.wepal.net/library/?app=content.download.146.1" },
        ]
    },
    { 
        subject: "تكنولوجيا", 
        icon: MicrochipIcon, 
        color: "slate",
        books: [
            { title: "كتاب التكنولوجيا - الفصل الأول", link: "https://www.wepal.net/library/?app=content.download.156.1" },
            { title: "كتاب التكنولوجيا - الفصل الثاني", link: "https://www.wepal.net/library/?app=content.download.157.1" },
        ]
    },
];


// --- Links Data (from WhatsappGroups.tsx & Support.tsx) ---
export interface ExternalLink {
    title: string;
    link: string;
    icon: React.ElementType;
}

export interface LinkGroup {
    title: string;
    icon: React.ElementType;
    color: string;
    links: ExternalLink[];
}

export const whatsappResource: LinkGroup = {
    title: "مجموعات الواتساب",
    icon: WhatsappIcon,
    color: "green",
    links: [
      { title: "مجموعة صف تاسع جميع الشعب 📚", link: "https://chat.whatsapp.com/BgG74NklaRdJrM3bNNW7dg", icon: AcademicCapIcon },
      { title: "مجموعة الدراسات للمعلم مهند هور", link: "https://chat.whatsapp.com/HVAi159Y7Mx1aNZGZVdZAv?mode=ems_share_t", icon: GlobeIcon },
      { title: "مجموعة الانجليزي للمعلمة عائشة", link: "https://chat.whatsapp.com/EcmrgvyaMAMELtdEcF5nqy", icon: BookBookmarkIcon },
      { title: "مجموعة العلوم للمعلم سامر", link: "https://chat.whatsapp.com/FO9fCfJqUOA6wdmycIQTyz?mode=ems_copy_t", icon: FlaskIcon },
      { title: "مجموعة الانجليزي للمعلمة ميساء ابو لوحة", link: "https://chat.whatsapp.com/JSzBUizxiYhEaHWXLfu3AT", icon: BookBookmarkIcon },
      { title: "مجموعة العربي للمعلم محمد الرجوب", link: "https://chat.whatsapp.com/F8Bi8188O9LDsSKJc2O3wU", icon: QuillIcon },
      { title: "مجموعة الرياضيات للمعلمة عبير شروف", link: "https://chat.whatsapp.com/HyCv8Dv4PSB4UiFV1Ae6kD?mode=ems_copy_t", icon: CalculatorIcon },
    ]
};

export const supportResource: LinkGroup = {
    title: "الدعم الفني والتواصل الاجتماعي",
    icon: SupportIcon,
    color: "blue",
    links: [
      { title: "نظام الدعم الفني", link: "https://gaza.moe.edu.ps/helpdesk", icon: SupportIcon },
      { title: "نظام لمعرفة هل تم ترفيعك ام لا", link: "https://gaza.moe.edu.ps/", icon: ClipboardListIcon },
      { title: "الفيسبوك الخاص بلمدرسة", link: "https://www.facebook.com/gazahighschool23", icon: FacebookIcon },
    ]
};
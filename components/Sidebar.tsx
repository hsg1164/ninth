import React from 'react';
import { HomeIcon, CalendarIcon, CollectionIcon, WhatsappIcon, SupportIcon } from './icons';
import { View } from '../App';

interface SidebarProps {
  currentView: View;
  setCurrentView: (view: View) => void;
  isOpen: boolean;
  setOpen: (isOpen: boolean) => void;
}

const NavItem: React.FC<{
  icon: React.ReactNode;
  label: string;
  isActive: boolean;
  onClick: () => void;
}> = ({ icon, label, isActive, onClick }) => (
  <li
    onClick={onClick}
    className={`flex items-center p-3 my-1 rounded-lg cursor-pointer transition-all duration-300 group ${
      isActive
        ? 'bg-gradient-to-r from-teal-500 to-cyan-500 text-white shadow-lg'
        : 'text-gray-400 hover:bg-gray-700 hover:text-white'
    }`}
  >
    {icon}
    <span className="mr-4 font-semibold">{label}</span>
  </li>
);

const Sidebar: React.FC<SidebarProps> = ({ currentView, setCurrentView, isOpen, setOpen }) => {
  const navItems = [
    { id: 'dashboard', label: 'الرئيسية', icon: <HomeIcon className="h-6 w-6" /> },
    { id: 'schedule', label: 'الجدول الدراسي', icon: <CalendarIcon className="h-6 w-6" /> },
    { id: 'assistant', label: 'المساعد الذكي', icon: <i className="fa-solid fa-robot w-6 text-center text-xl"></i> },
    { id: 'resources', label: 'مصادر تعليمية', icon: <CollectionIcon className="h-6 w-6" /> },
    { id: 'whatsapp', label: 'مجموعات الواتساب', icon: <WhatsappIcon className="h-6 w-6" /> },
    { id: 'support', label: 'الدعم الفني', icon: <SupportIcon className="h-6 w-6" /> },
  ];
  
  const handleNavigation = (view: View) => {
    setCurrentView(view);
    if(window.innerWidth < 768) {
      setOpen(false);
    }
  };

  return (
    <>
      <div
        className={`fixed top-0 right-0 h-full bg-gray-800 dark:bg-gray-900 text-white w-64 p-4 transform transition-transform duration-300 z-50 ${
          isOpen ? 'translate-x-0' : 'translate-x-full'
        } md:translate-x-0`}
      >
        <div className="flex items-center gap-3 mb-10">
          <img 
            src="https://www.eschool.edu.ps/images/pna_logo.png" 
            alt="شعار المدرسة" 
            className="h-12 w-12 object-contain bg-white/90 p-1 rounded-md"
          />
          <h2 className="text-2xl font-bold">الصف التاسع</h2>
        </div>
        <nav>
          <ul>
            {navItems.map((item) => (
              <NavItem
                key={item.id}
                icon={item.icon}
                label={item.label}
                isActive={currentView === item.id}
                onClick={() => handleNavigation(item.id as View)}
              />
            ))}
          </ul>
        </nav>
      </div>
      {isOpen && <div onClick={() => setOpen(false)} className="fixed inset-0 bg-black opacity-50 z-40 md:hidden"></div>}
    </>
  );
};

export default Sidebar;
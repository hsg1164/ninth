import React from 'react';
import { MenuIcon } from './icons';

interface HeaderProps {
  toggleSidebar: () => void;
}

const Header: React.FC<HeaderProps> = ({ toggleSidebar }) => {
  return (
    <header className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm border-b border-gray-200 dark:border-gray-700 p-4 flex justify-between items-center sticky top-0 z-30">
      <div className="flex items-center gap-4">
        <button onClick={toggleSidebar} className="md:hidden text-gray-600 dark:text-gray-300">
          <MenuIcon className="h-6 w-6" />
        </button>
        <div className="flex items-center gap-3">
          <img 
              src="https://www.eschool.edu.ps/images/pna_logo.png" 
              alt="شعار المدرسة" 
              className="h-9 w-9 object-contain bg-white/90 p-1 rounded-md shadow-sm"
          />
          <h1 className="text-lg sm:text-xl font-bold text-gray-800 dark:text-white hidden sm:block">مدرسة خارجي اساسي عليا 25 ب</h1>
        </div>
      </div>
    </header>
  );
};

export default Header;

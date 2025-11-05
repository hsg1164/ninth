import React, { useState } from 'react';
import Sidebar from './components/Sidebar.tsx';
import Header from './components/Header.tsx';
import Dashboard from './components/Dashboard.tsx';
import Schedule from './components/Schedule.tsx';
import Resources from './components/Resources.tsx';
import WhatsappGroups from './components/WhatsappGroups.tsx';
import Support from './components/Support.tsx';

export type View = 'dashboard' | 'schedule' | 'resources' | 'whatsapp' | 'support';

const App: React.FC = () => {
  const [currentView, setCurrentView] = useState<View>('dashboard');
  const [isSidebarOpen, setSidebarOpen] = useState(false);

  const renderView = () => {
    switch (currentView) {
      case 'dashboard':
        return <Dashboard setCurrentView={setCurrentView} />;
      case 'schedule':
        return <Schedule />;
      case 'resources':
        return <Resources />;
      case 'whatsapp':
        return <WhatsappGroups />;
      case 'support':
        return <Support />;
      default:
        return <Dashboard setCurrentView={setCurrentView} />;
    }
  };

  return (
    <div className="bg-transparent text-gray-800 dark:text-gray-200 min-h-screen flex font-sans">
      <Sidebar currentView={currentView} setCurrentView={setCurrentView} isOpen={isSidebarOpen} setOpen={setSidebarOpen} />
      <div className="flex-1 flex flex-col transition-all duration-300 md:mr-64">
        <Header toggleSidebar={() => setSidebarOpen(!isSidebarOpen)} />
        <main className="flex-1 p-4 sm:p-6 lg:p-8">
           <div key={currentView} className="animate-fadeIn">
            {renderView()}
          </div>
        </main>
      </div>
    </div>
  );
};

export default App;
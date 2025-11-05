import React from 'react';
import TodayView from './TodayView.tsx';
import { View } from '../App.tsx';
import { CalendarIcon, CollectionIcon } from './icons.tsx';

interface DashboardProps {
  setCurrentView: (view: View) => void;
}

const QuickLink: React.FC<{
  title: string;
  subtitle: string;
  icon: React.ReactNode;
  color: string;
  onClick: () => void;
}> = ({ title, subtitle, icon, color, onClick }) => (
  <div
    onClick={onClick}
    className={`bg-white dark:bg-gray-800 p-6 rounded-2xl shadow-lg hover:shadow-xl transform transition-all duration-300 hover:-translate-y-1 cursor-pointer flex items-center space-x-4 space-x-reverse border-l-4 ${color}`}
  >
    {icon}
    <div>
      <h3 className="font-bold text-xl">{title}</h3>
      <p className="text-gray-500 dark:text-gray-400">{subtitle}</p>
    </div>
  </div>
);

const Dashboard: React.FC<DashboardProps> = ({ setCurrentView }) => {
    const today = new Date();
    // Using `ar-EG-u-nu-latn` to ensure latin numbers for broader compatibility
    const formattedDate = today.toLocaleDateString('ar-EG-u-nu-latn', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' });

  return (
    <div className="space-y-12">
      <div className="animate-fadeInUp">
        <h1 className="text-3xl sm:text-4xl font-bold mb-2">أهلاً بك في بوابة الطالب</h1>
        <p className="text-md sm:text-lg text-gray-600 dark:text-gray-400">
          {formattedDate}
        </p>
      </div>
      
      <div className="animate-fadeInUp" style={{ animationDelay: '100ms' }}>
        <TodayView />
      </div>

      <div className="animate-fadeInUp" style={{ animationDelay: '200ms' }}>
        <h2 className="text-2xl sm:text-3xl font-bold mb-6">روابط سريعة</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <QuickLink 
              title="الجدول الدراسي"
              subtitle="عرض الجدول الأسبوعي الكامل"
              icon={<CalendarIcon className="h-10 w-10 text-indigo-500" />}
              color="border-indigo-500"
              onClick={() => setCurrentView('schedule')}
            />
             <QuickLink 
              title="مصادر تعليمية"
              subtitle="تصفح الكتب والمواد"
              icon={<CollectionIcon className="h-10 w-10 text-amber-500" />}
              color="border-amber-500"
              onClick={() => setCurrentView('resources')}
            />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
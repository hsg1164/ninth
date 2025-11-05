import React, { useState, useEffect } from 'react';
import { schedulesByDivision, dayNames, arabicDayNames, divisions, periodTimes } from '../data/schedule';
import { ScheduleEntry } from '../types';
import { ExternalLinkIcon } from './icons';

// Utility function to convert "HH:mm" to 12-hour format "h:mm مساءً/صباحًا"
const convertTo12HourFormat = (time24: string | undefined): string => {
  if (!time24) return '';
  const [hours, minutes] = time24.split(':');
  const h = parseInt(hours, 10);
  const period = h >= 12 ? 'مساءً' : 'صباحًا';
  const h12 = h % 12 || 12; // Convert 0 to 12
  return `${h12}:${minutes} ${period}`;
};

const TodayView: React.FC = () => {
  const [selectedDivision, setSelectedDivision] = useState<string>(divisions[0]);
  const [currentTime, setCurrentTime] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => setCurrentTime(new Date()), 60000); // Update every minute
    return () => clearInterval(timer);
  }, []);

  const dayName = dayNames[currentTime.getDay()];
  const todaySchedule = schedulesByDivision[selectedDivision][dayName] || [];

  const getNextClass = () => {
    if (todaySchedule.length === 0) return null;
    
    const now = currentTime.getHours() * 60 + currentTime.getMinutes();

    for (const entry of todaySchedule) {
       // FIX: Filter out free periods when determining the next class
      if (entry.name === 'فراغ') continue;
      
      const period = periodTimes[entry.period];
      if (period) {
        const [startHour, startMinute] = period.start.split(':').map(Number);
        const startTime = startHour * 60 + startMinute;
        if (startTime > now) {
          return entry;
        }
      }
    }
    
    // If all classes are done for today, find the first class of the next available school day
    for (let i = 1; i <= 7; i++) {
        let nextDayIndex = (currentTime.getDay() + i) % 7;
        
        // Skip weekends
        if (nextDayIndex === 5 || nextDayIndex === 6) continue;

        const nextDayName = dayNames[nextDayIndex];
        const nextDaySchedule = schedulesByDivision[selectedDivision][nextDayName] || [];
        const firstClassOfNextDay = nextDaySchedule.find(entry => entry.name !== 'فراغ');

        if (firstClassOfNextDay) {
            return { ...firstClassOfNextDay, isTomorrow: true, day: arabicDayNames[nextDayName] };
        }
    }
    
    return null;
  };

  const nextClass: (ScheduleEntry & { isTomorrow?: boolean; day?: string }) | null = getNextClass();

  return (
    <div className="bg-white/70 dark:bg-gray-800/70 backdrop-blur-lg p-6 rounded-2xl shadow-lg border border-gray-200/50 dark:border-gray-700/50">
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-xl sm:text-2xl font-bold">متابعة الحصص اليومية</h2>
        <div className="text-lg font-semibold text-gray-600 dark:text-gray-300">
          {arabicDayNames[dayName]}
        </div>
      </div>
      
      <div className="mb-6 bg-gray-200/50 dark:bg-gray-900/40 p-1.5 rounded-xl grid grid-cols-3 sm:grid-cols-5 gap-1.5">
        {divisions.map((division) => (
          <button
            key={division}
            onClick={() => setSelectedDivision(division)}
            className={`w-full py-2 px-4 rounded-lg font-bold text-md transition-all duration-300 ${
              selectedDivision === division
                ? 'bg-white dark:bg-gray-700 text-teal-600 dark:text-white shadow-md'
                : 'bg-transparent text-gray-500 dark:text-gray-400 hover:bg-white/50 dark:hover:bg-gray-700/50'
            }`}
          >
            شعبة {division}
          </button>
        ))}
      </div>

      <div key={selectedDivision} className="animate-fadeIn space-y-4">
        {nextClass ? (
          <div className="bg-gradient-to-tr from-teal-500 to-cyan-500 text-white p-4 rounded-xl shadow-lg">
            <p className="font-semibold text-teal-100">{nextClass.isTomorrow ? `أول حصة يوم ${nextClass.day}` : 'الحصة القادمة'}</p>
            <div className="flex justify-between items-center mt-1">
              <p className="text-2xl font-bold">{nextClass.name}</p>
              <p className="text-lg font-bold bg-white/20 px-3 py-1 rounded-full">{nextClass.period}</p>
            </div>
          </div>
        ) : (
             <div className="bg-gradient-to-tr from-gray-500 to-gray-600 text-white p-4 rounded-xl shadow-lg">
                <p className="text-2xl font-bold text-center">لا توجد حصص قادمة</p>
             </div>
        )}
        
        <h3 className="font-bold text-lg pt-2">جدول اليوم الكامل:</h3>
        {todaySchedule.length > 0 ? (
          <ul className="space-y-2">
            {todaySchedule.map((entry: ScheduleEntry, index: number) => (
              <li key={index} className="flex justify-between items-center bg-gray-50 dark:bg-gray-700/50 p-3 rounded-lg">
                <div className="flex items-center gap-3">
                    <span className="font-semibold text-gray-500 dark:text-gray-400 w-12 text-center">{entry.period}</span>
                    <span className="font-bold text-gray-800 dark:text-white">{entry.name}</span>
                </div>
                <div className="flex items-center gap-4">
                    <span className="text-sm text-gray-400 dark:text-gray-500">{convertTo12HourFormat(periodTimes[entry.period]?.start)}</span>
                     {entry.name !== 'فراغ' && (
                        entry.link ? (
                            <a 
                            href={entry.link} 
                            target="_blank" 
                            rel="noopener noreferrer"
                            className="flex items-center gap-1.5 bg-teal-100 dark:bg-teal-800/50 text-teal-700 dark:text-teal-200 font-bold py-1.5 px-3 rounded-lg hover:bg-teal-200 dark:hover:bg-teal-700/60 transition-colors text-sm"
                            >
                            <ExternalLinkIcon className="h-4 w-4" />
                            <span>دخول</span>
                            </a>
                        ) : (
                            <button
                            disabled
                            className="flex items-center gap-1.5 bg-gray-200 dark:bg-gray-600 text-gray-500 dark:text-gray-400 font-bold py-1.5 px-3 rounded-lg cursor-not-allowed text-sm"
                            >
                            <span> مغلق </span>
                            </button>
                        )
                    )}
                </div>
              </li>
            ))}
          </ul>
        ) : (
          <p className="text-center text-gray-500 dark:text-gray-400 py-4">
            لا توجد حصص دراسية اليوم. استمتع بعطلتك!
          </p>
        )}
      </div>
    </div>
  );
};

export default TodayView;
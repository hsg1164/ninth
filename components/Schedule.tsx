import React, { useState, useEffect, useMemo } from 'react';
import { schedulesByDivision, arabicDayNames, divisions, periodTimes, dayNames } from '../data/schedule';
import { subjectDetailsMap } from '../data/subjects';
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

// A single, beautifully styled card for a class
const ClassCard: React.FC<{ entry: ScheduleEntry, delay: number }> = ({ entry, delay }) => {
  const details = subjectDetailsMap[entry.name];
  const isFreePeriod = entry.name === 'فراغ';

  if (!details && !isFreePeriod) {
    return null; // Don't render if subject details are missing and it's not a free period
  }

  const Icon = details?.icon;
  const periodTime = periodTimes[entry.period]?.start;

  const cardBaseStyle = "bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-5 flex flex-col justify-between transition-all duration-300 hover:shadow-xl hover:-translate-y-1.5 animate-fadeInUp";

  return (
    <div className={cardBaseStyle} style={{ animationDelay: `${delay}ms` }}>
      <div>
        <div className="flex items-start justify-between">
          <div className="flex items-center gap-4">
            {Icon && (
              <div className={`p-3 rounded-xl ${details.lightColorClass} ${details.darkColorClass}`}>
                <Icon className={`h-8 w-8 ${details.textColorClass} ${details.darkTextColorClass}`} />
              </div>
            )}
            <div>
              <p className={`font-bold text-lg ${details?.textColorClass || 'text-gray-800'} ${details?.darkTextColorClass || 'dark:text-gray-200'}`}>{entry.name}</p>
              <p className="text-gray-500 dark:text-gray-400 text-sm">{entry.period}</p>
            </div>
          </div>
          {periodTime && <span className="font-bold text-gray-400 dark:text-gray-500 text-sm">{convertTo12HourFormat(periodTime)}</span>}
        </div>
      </div>
      
      {isFreePeriod ? (
        <div className="mt-4 text-center py-2 bg-gray-100 dark:bg-gray-700 rounded-lg text-gray-500 dark:text-gray-400 font-semibold">
          فترة راحة
        </div>
      ) : (
        <a
          href={entry.link ?? '#'}
          target="_blank"
          rel="noopener noreferrer"
          className={`mt-4 flex items-center justify-center gap-2 text-center py-3 px-4 rounded-lg font-bold text-white transition-all duration-300 shadow-md hover:shadow-lg
            ${entry.link 
              ? `${details.lightColorClass.replace('bg-', 'bg-gradient-to-r from-').replace('-50', '-500')} to-${details.color}-600` 
              : 'bg-gray-400 dark:bg-gray-600 cursor-not-allowed'
            }`}
        >
          <ExternalLinkIcon className="h-5 w-5" />
          <span>انضم للحصة</span>
        </a>
      )}
    </div>
  );
};

// Info card to display the end-of-day time
const EndOfDayInfo: React.FC<{ message: string }> = ({ message }) => (
    <div className="bg-teal-50 dark:bg-teal-900/40 border-r-4 border-teal-500 p-4 rounded-lg shadow-sm animate-fadeInUp" style={{ animationDelay: `100ms` }}>
        <div className="flex items-center">
            <svg className="h-6 w-6 text-teal-500 mr-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            <p className="text-teal-800 dark:text-teal-200 font-semibold">{message}</p>
        </div>
    </div>
);


const Schedule: React.FC = () => {
  const [selectedDivision, setSelectedDivision] = useState<string>(divisions[0]);
  const [selectedDay, setSelectedDay] = useState<string>(dayNames[new Date().getDay()] || 'Sunday');

  useEffect(() => {
    // Handle weekend case: default to Sunday if it's Friday or Saturday
    const currentDayIndex = new Date().getDay();
    if (currentDayIndex === 5 || currentDayIndex === 6) {
        setSelectedDay('Sunday');
    } else {
        setSelectedDay(dayNames[currentDayIndex]);
    }
  }, []);
  
  const daysOfWeek = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday'];
  const daySchedule = schedulesByDivision[selectedDivision]?.[selectedDay] || [];
  
  const endOfDayMessage = useMemo(() => {
    const actualClasses = daySchedule.filter(c => c.name !== 'فراغ');
    if (actualClasses.length === 0) {
      return "اليوم هو يوم عطلة لهذه الشعبة.";
    }

    const lastClass = actualClasses[actualClasses.length - 1];
    const lastPeriodInfo = Object.values(periodTimes).find(p => p.end === periodTimes[lastClass.period]?.end);

    if (lastPeriodInfo) {
      const [endHour, endMinute] = lastPeriodInfo.end.split(':').map(Number);
      const endDate = new Date();
      endDate.setHours(endHour, endMinute + 5, 0, 0); // Add 5 minutes
      
      const endOfDayTime = `${String(endDate.getHours()).padStart(2, '0')}:${String(endDate.getMinutes()).padStart(2, '0')}`;
      return `ينتهي اليوم الدراسي الساعة ${convertTo12HourFormat(endOfDayTime)}`;
    }

    return "لا يمكن تحديد وقت انتهاء اليوم.";
  }, [daySchedule]);


  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-2xl sm:text-3xl font-bold mb-2">الجدول الدراسي اليومي</h1>
        <p className="text-md sm:text-lg text-gray-600 dark:text-gray-400">
          اختر شعبتك ويومك لعرض الحصص الدراسية.
        </p>
      </div>
      
      <div className="space-y-6 sticky top-20 z-20 bg-gray-100/80 dark:bg-gray-900/80 backdrop-blur-lg p-4 rounded-2xl shadow-sm">
        {/* Division Selector */}
        <div className="bg-gray-200/50 dark:bg-gray-900/40 p-1.5 rounded-xl grid grid-cols-3 sm:grid-cols-5 gap-1.5">
          {divisions.map((division) => (
            <button
              key={division}
              onClick={() => setSelectedDivision(division)}
              className={`w-full py-2 px-4 rounded-lg font-bold sm:text-lg transition-all duration-300 ${
                selectedDivision === division
                  ? 'bg-white dark:bg-gray-700 text-teal-600 dark:text-white shadow-md'
                  : 'bg-transparent text-gray-600 dark:text-gray-300 hover:bg-white/50 dark:hover:bg-gray-700/50'
              }`}
            >
              شعبة {division}
            </button>
          ))}
        </div>
        {/* Day Selector */}
        <div className="bg-gray-200/50 dark:bg-gray-900/40 p-1.5 rounded-xl grid grid-cols-3 sm:grid-cols-5 gap-1.5">
          {daysOfWeek.map((day) => (
            <button
              key={day}
              onClick={() => setSelectedDay(day)}
              className={`w-full py-2 px-2 rounded-lg font-semibold text-sm sm:text-base transition-all duration-300 ${
                selectedDay === day
                  ? 'bg-white dark:bg-gray-700 text-indigo-600 dark:text-white shadow-md'
                  : 'bg-transparent text-gray-600 dark:text-gray-300 hover:bg-white/50 dark:hover:bg-gray-700/50'
              }`}
            >
              {arabicDayNames[day]}
            </button>
          ))}
        </div>
      </div>
      
      <EndOfDayInfo message={endOfDayMessage} />

      <div key={`${selectedDivision}-${selectedDay}`} className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4 gap-6">
        {daySchedule.length > 0 ? (
          daySchedule.map((entry, index) => (
            <ClassCard key={index} entry={entry} delay={index * 80} />
          ))
        ) : (
          <div className="col-span-full text-center py-12 bg-white dark:bg-gray-800 rounded-2xl shadow-lg animate-fadeInUp">
            <h3 className="text-2xl font-bold text-gray-700 dark:text-gray-200">لا توجد حصص دراسية</h3>
            <p className="text-gray-500 dark:text-gray-400 mt-2">يبدو أنه يوم عطلة لهذه الشعبة. استمتع بوقتك!</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Schedule;
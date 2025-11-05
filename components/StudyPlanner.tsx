import React, { useState } from 'react';
import { Task } from '../types.ts';

const StudyPlanner: React.FC = () => {
  const [tasks, setTasks] = useState<Task[]>([
    { id: 1, text: "حل واجب الرياضيات صفحة 25", completed: false },
    { id: 2, text: "مراجعة درس العلوم الأول", completed: true },
    { id: 3, text: "كتابة موضوع تعبير باللغة العربية", completed: false },
  ]);
  const [newTask, setNewTask] = useState("");

  const handleAddTask = (e: React.FormEvent) => {
    e.preventDefault();
    if (newTask.trim() === "") return;
    const task: Task = {
      id: Date.now(),
      text: newTask,
      completed: false,
    };
    setTasks([...tasks, task]);
    setNewTask("");
  };

  const toggleTask = (id: number) => {
    setTasks(
      tasks.map((task) =>
        task.id === id ? { ...task, completed: !task.completed } : task
      )
    );
  };
  
  const deleteTask = (id: number) => {
      setTasks(tasks.filter(task => task.id !== id));
  }

  return (
    <div>
      <h1 className="text-3xl font-bold mb-6">منظم المهام الدراسية</h1>
      <div className="bg-white dark:bg-gray-800 p-6 rounded-2xl shadow-lg">
        <form onSubmit={handleAddTask} className="flex gap-4 mb-6">
          <input
            type="text"
            value={newTask}
            onChange={(e) => setNewTask(e.target.value)}
            placeholder="أضف مهمة جديدة..."
            className="flex-1 p-3 rounded-lg border-2 border-gray-200 dark:border-gray-600 bg-gray-50 dark:bg-gray-700 focus:outline-none focus:border-teal-500"
          />
          <button
            type="submit"
            className="bg-teal-600 text-white font-bold py-3 px-6 rounded-lg hover:bg-teal-700 transition-colors"
          >
            إضافة
          </button>
        </form>
        <div className="space-y-3">
          {tasks.map((task) => (
            <div
              key={task.id}
              className="flex items-center justify-between p-4 bg-gray-100 dark:bg-gray-700 rounded-lg"
            >
              <div className="flex items-center">
                <input
                  type="checkbox"
                  checked={task.completed}
                  onChange={() => toggleTask(task.id)}
                  className="w-5 h-5 ml-4 text-teal-600 bg-gray-100 border-gray-300 rounded focus:ring-teal-500 dark:focus:ring-teal-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                />
                <span
                  className={`text-lg ${
                    task.completed ? "line-through text-gray-500" : ""
                  }`}
                >
                  {task.text}
                </span>
              </div>
              <button onClick={() => deleteTask(task.id)} className="text-red-500 hover:text-red-700">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                </svg>
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default StudyPlanner;
export interface ScheduleEntry {
  period: string;
  name: string;
  link: string | null;
}

// FIX: Added missing Task interface for StudyPlanner component
export interface Task {
  id: number;
  text: string;
  completed: boolean;
}

// FIX: Added missing ChatMessage interface for StudyAssistant component
export interface ChatMessage {
  sender: 'user' | 'assistant';
  text: string;
  image?: string;
}

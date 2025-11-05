export interface ScheduleEntry {
  period: string;
  name: string;
  link: string | null;
}

export interface ChatMessage {
  sender: 'user' | 'assistant';
  text: string;
  image?: string; // For displaying image previews in the chat
}

// FIX: Added missing Task interface for StudyPlanner component
export interface Task {
  id: number;
  text: string;
  completed: boolean;
}
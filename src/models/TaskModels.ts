export type TaskModel = {
  id: string;
  name: string;
  duration: number; //in minutes
  startDate: number;
  completeDate: number | null;
  interruptDate: number | null;
  type: 'focus' | 'shortBreak' | 'longBreak';
};

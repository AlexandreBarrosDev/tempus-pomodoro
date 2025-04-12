import { TaskModel } from './TaskModels';

export type TaskStateModel = {
  tasks: TaskModel[];
  secondsRemaining: number;
  formatSecondsRemaining: string;
  activeTask: TaskModel | null;
  currentCycle: number; //de 1 a 8
  config: {
    workTime: number;
    shortBreakTime: number;
    longBreakTime: number;
  };
};

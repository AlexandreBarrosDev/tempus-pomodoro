import { TaskModel } from './TaskModels';

export type TaskStateModel = {
  tasks: TaskModel[];
  secondsRemaining: number;
  formattedSecondsRemaining: string;
  activeTask: TaskModel | null;
  currentCycle: number; //de 1 a 8
  config: {
    focus: number;
    shortBreak: number;
    longBreak: number;
  };
};

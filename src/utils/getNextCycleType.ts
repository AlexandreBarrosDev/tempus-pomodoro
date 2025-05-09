import { TaskModel } from '../models/TaskModels';

export function getNextCycleType(currentCycle: number): TaskModel['type'] {
  if (currentCycle % 8 === 0) return 'longBreak';
  if (currentCycle % 2 === 0) return 'shortBreak';
  return 'focus';
}

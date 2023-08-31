import tasksData from '../../database.json';
import { Task } from '../entities/Task';

export const getTasks = (): Task[] => {
  return tasksData.tasks;
};

export const saveTask = (task: Task): void => {
  tasksData.tasks.push(task); 
};

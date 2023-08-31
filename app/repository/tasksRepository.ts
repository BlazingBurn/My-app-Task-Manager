import tasksData from '../../database.json';
import { Task } from '../entities/Task';
// import fs from 'fs/promises'; // Importez fs/promises pour les opérations asynchrones
import fs from 'fs'; // Importez le module fs
import { promisify } from 'util'; // Importez le module util pour promisifier les fonctions


export const getTasks = (): Task[] => {
  return tasksData.tasks;
};

const TASKS_JSON_PATH = '../../database.json'; // Remplacez par le chemin approprié

export const saveTask = async (task: Task): Promise<void> => {
  try {
    fs.writeFileSync(TASKS_JSON_PATH, JSON.stringify(tasksData.tasks, null, 4));
  } catch (error) {
    console.error('Error saving task:', error);
  }
};






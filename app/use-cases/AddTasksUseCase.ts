import { useDispatch } from '@/node_modules/react-redux/es/index';
import { Task, TaskData } from '../entities/Task';
import { addTask } from '../slices/tasksSlice';
import { saveTask, getTasks } from '../repository/tasksRepository';

export const useAddTask = () => {
  const dispatch = useDispatch();

  const addNewTask = (taskData: TaskData) => {
    const newTask: Task = {
      id: getTasks().length + 1,
      title: taskData.title,
    };
    
    // Enregistrez la nouvelle tâche dans le repository
    // saveTask(newTask);

    dispatch(addTask(newTask));
  };

  return {
    addNewTask,
  };
};

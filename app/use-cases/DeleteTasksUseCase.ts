import { useDispatch } from '@/node_modules/react-redux/es/exports';
import { deleteTask } from '../slices/tasksSlice';

export function useDeleteTask() {
  const dispatch = useDispatch();

  const deleteTaskById = (taskId: number) => {
    dispatch(deleteTask(taskId));
  };

  return { deleteTask: deleteTaskById };
}
import { useDispatch } from 'react-redux';
import { deleteTask } from '../slices/tasksSlice';

export function useDeleteTask() {
  const dispatch = useDispatch();

  const deleteTaskById = (taskId: number) => {
    dispatch(deleteTask(taskId));
  };

  return { deleteTask: deleteTaskById };
}
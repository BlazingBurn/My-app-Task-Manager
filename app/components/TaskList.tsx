"use client"; // This is a client component 👈🏽
import { useSelector } from '@/node_modules/react-redux/es/exports';
import { RootState } from '../store';
import { useDeleteTask } from '../use-cases/DeleteTasksUseCase';
import { Task } from '../entities/Task';

export default function TaskList() {
    const tasks = useSelector((state: RootState) => state.tasks.tasks);

    console.log('====================================');
    console.log(tasks);
    console.log('====================================');
 
    const { deleteTask } = useDeleteTask(); 
    const handleDeleteTask = (taskId: number) => {
        deleteTask(taskId);
      };

    return (
       <ul className="list-disc list-inside space-y-2">
        {tasks.map((task: Task) => (
        <li key={task.id} className="flex items-center py-1">
            <input type="checkbox" className="mr-2" />
            <span className="flex-grow">{task.title}</span>
            <button className="text-red-500 hover:text-red-700" onClick={() => handleDeleteTask(task.id)}>
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
                </svg>
             </button>
        </li>
        ))}
       </ul>


    );
}

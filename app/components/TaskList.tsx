"use client"; // This is a client component 👈🏽
import { useSelector} from 'react-redux';
import { RootState } from '../store';

export default function TaskList() {
    const tasks = useSelector((state: RootState) => state.tasks);
    
    return (
       <ul class="list-disc list-inside space-y-2">
  {tasks.map(task => (
    <li key={task.id} class="flex items-center py-1">
      <input type="checkbox" class="mr-2" />
      <span class="flex-grow">{task.title}</span>
      <button class="text-red-500 hover:text-red-700">
        <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
        </svg>
      </button>
    </li>
  ))}
</ul>


    );
}

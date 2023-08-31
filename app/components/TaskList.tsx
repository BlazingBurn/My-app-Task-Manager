"use client"; // This is a client component 👈🏽
import { useSelector} from 'react-redux';
import { RootState } from '../store';

export default function TaskList() {
    const tasks = useSelector((state: RootState) => state.tasks);
    
    return (
        <ul class="list-disc list-inside">
  {tasks.map(task => (
    <li key={task.id} class="py-1">{task.title}</li>
  ))}
</ul>

    );
}

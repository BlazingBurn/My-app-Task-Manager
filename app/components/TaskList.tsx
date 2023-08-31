"use client"; // This is a client component 👈🏽
import { useSelector} from 'react-redux';
import { RootState } from '../store';

export default function TaskList() {
    const tasks = useSelector((state: RootState) => state.tasks);
    
    return (
        <ul>
        {tasks.map(task => (
            <li key={task.id}>{task.title}</li>
        ))}
        </ul>
    );
}

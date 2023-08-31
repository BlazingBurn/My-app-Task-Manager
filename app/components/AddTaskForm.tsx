"use client"; // This is a client component 👈🏽

import { useState } from 'react';
import { useAddTask } from '../use-cases/AddtasksUseCase';

export default function AddTaskForm() {
    const [taskTitle, setTaskTitle] = useState('');
    const { addNewTask } = useAddTask();
  
    const handleAddTask = () => {
      if (taskTitle.trim() !== '') {
        addNewTask({ title: taskTitle });
        setTaskTitle('');
      }
    };
  
    return (
      <div class="flex items-center space-x-2">
  <input
    type="text"
    class="border rounded py-1 px-2 focus:outline-none focus:ring focus:border-blue-300"
    value={taskTitle}
    onChange={e => setTaskTitle(e.target.value)}
    placeholder="Entrez le titre de la tâche"
  />
  <button class="bg-blue-500 hover:bg-blue-600 text-white py-1 px-3 rounded focus:outline-none focus:ring focus:border-blue-300" onClick={handleAddTask}>Ajouter une tâche</button>
</div>

    );
}
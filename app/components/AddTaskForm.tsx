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
      <div>
        <input
          type="text"
          value={taskTitle}
          onChange={e => setTaskTitle(e.target.value)}
          placeholder="Enter task title"
        />
        <button onClick={handleAddTask}>Add Task</button>
      </div>
    );
}
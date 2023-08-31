import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Task } from '../entities/Task';
import { getTasks } from '../repository/tasksRepository';

interface TasksState {
  tasks: Task[];
}

const initialState: TasksState = {
  tasks : getTasks()
}

const tasksSlice = createSlice({
  name: 'tasks',
  initialState,
  reducers: {
    addTask: (state, action) => {
      console.log(action)
      state.tasks.push(action.payload);
      console.log(state)
    },
    deleteTask:(state, action)=> {
      console.log(state)
      state.tasks = state.tasks.filter((task: Task) => task.id !== action.payload);
    },
    // TODO Ajoutez d'autres reducers ici pour gérer la modification et la suppression des tâches.
  },

});

export const { addTask, deleteTask } = tasksSlice.actions;
export default tasksSlice.reducer;

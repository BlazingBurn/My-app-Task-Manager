import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { getTasks } from '../repository/tasksRepository';

const tasksSlice = createSlice({
  name: 'tasks',
  initialState: [],
  reducers: {
    addTask: (state, action) => {
      state.push(action.payload);
    },
    deleteTask(state, action: PayloadAction<number>) {
      state.tasks = state.tasks.filter(task => task.id !== action.payload);
    },
    // TODO Ajoutez d'autres reducers ici pour gérer la modification et la suppression des tâches.
  },

  // Ajoutez une partie "extraReducers" pour récupérer les tâches au démarrage
  extraReducers: (builder) => {
    builder.addCase('tasks/fetchTasks', (state, action) => {
      const tasks = getTasks();
      return [...state, ...tasks]; // Ajoute les tâches récupérées à l'état initial
    });
  },
});

export const { addTask, deleteTask } = tasksSlice.actions;
export default tasksSlice.reducer;

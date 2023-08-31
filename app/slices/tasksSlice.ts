import { createSlice } from '@reduxjs/toolkit';
import { saveTask, getTasks } from '../repository/tasksRepository';

const tasksSlice = createSlice({
  name: 'tasks',
  initialState: [],
  reducers: {
    addTask: (state, action) => {
      state.push(action.payload);
    },
    // TODO Ajoutez d'autres reducers ici pour gérer la modification et la suppression des tâches.
  },

  // Ajoutez une partie "extraReducers" pour récupérer les tâches au démarrage
  extraReducers: (builder) => {
    builder.addCase('tasks/fetchTasks', (state, action) => {
      // Utilisez getTasks pour récupérer les tâches
      const tasks = getTasks();
      return [...state, ...tasks]; // Ajoute les tâches récupérées à l'état initial
    });
  },
});

export const { addTask } = tasksSlice.actions;
export default tasksSlice.reducer;

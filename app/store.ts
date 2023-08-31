import { configureStore } from '@reduxjs/toolkit';
import tasksReducer from './slices/tasksSlice';

const store = configureStore({
  reducer: {
    tasks: tasksReducer,
  },
});

// Appel à la récupération des tâches au démarrage de l'application
store.dispatch({ type: 'tasks/fetchTasks' });

export type RootState = ReturnType<typeof store.getState>;
export default store;

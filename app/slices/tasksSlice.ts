import { createSlice } from '@reduxjs/toolkit';

const tasksSlice = createSlice({
  name: 'tasks',
  initialState: [],
  reducers: {
    addTask: (state, action) => {
      state.push(action.payload);
    },
    // TODO Ajoutez d'autres reducers ici pour gérer la modification et la suppression des tâches.
  },
});

export const { addTask } = tasksSlice.actions;
export default tasksSlice.reducer;

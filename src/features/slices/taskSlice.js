import {createSlice} from '@reduxjs/toolkit';

export const taskSlice = createSlice({
  name: 'task',
  initialState: {
    tasks: [],
  },
  reducers: {
    setTasks: (state, action) => {
      state.tasks = [...state.tasks, action.payload];
    },
  },
});

export const {setTasks} = taskSlice.actions;

export default taskSlice.reducer;
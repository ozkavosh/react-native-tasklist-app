import {createSlice} from '@reduxjs/toolkit';

export const taskSlice = createSlice({
  name: 'task',
  initialState: {
    tasks: [],
    tasksInProgress: 0,
  },
  reducers: {
    setTasks: (state, action) => {
      state.tasks = action.payload;
    },
    setTasksInProgress: (state, action) => {
      state.tasksInProgress = action.payload;
    },
  },
});

export const {setTasks, setTasksInProgress} = taskSlice.actions;

export default taskSlice.reducer;

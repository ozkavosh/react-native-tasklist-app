import { configureStore } from "@reduxjs/toolkit";
import loaderReducer from './slices/loaderSlice';
import taskReducer from './slices/taskSlice';

const store = configureStore({
    reducer: {
      loader: loaderReducer,
      task: taskReducer
    },
});

export default store;

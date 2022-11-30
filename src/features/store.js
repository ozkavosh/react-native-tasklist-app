import { configureStore } from "@reduxjs/toolkit";
import loaderReducer from './slices/loaderSlice';
import taskReducer from './slices/taskSlice';
import localeReducer from './slices/localeSlice';

const store = configureStore({
    reducer: {
      loader: loaderReducer,
      task: taskReducer,
      locale: localeReducer
    },
});

export default store;

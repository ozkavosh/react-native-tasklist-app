import {createSlice} from '@reduxjs/toolkit';

export const loaderSlice = createSlice({
  name: 'loader',
  initialState: {
    show: false,
  },
  reducers: {
    show: state => {
      state.show = true;
    },
    hide: state => {
      state.show = false;
    },
  },
});

export const {show, hide} = loaderSlice.actions;

export default loaderSlice.reducer;

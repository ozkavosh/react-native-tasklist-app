import {createSlice} from '@reduxjs/toolkit';

export const localeSlice = createSlice({
  name: 'locale',
  initialState: {
    selectedLocale: 'es',
  },
  reducers: {
    switchLocale: state => {
      state.selectedLocale = state.selectedLocale === 'es' ? 'en' : 'es';
    },
  },
});

export const {switchLocale} = localeSlice.actions;

export default localeSlice.reducer;
import React from 'react';
import {AuthContextProvider} from './src/context/authContext';
import {Provider} from 'react-redux';
import store from './src/features/store';
import MainNavigation from './src/components/MainNavigation/MainNavigation';

const App = () => {
  return (
    <AuthContextProvider>
      <Provider store={store}>
        <MainNavigation/>
      </Provider>
    </AuthContextProvider>
  );
};

export default App;

import React from 'react';
import {AuthContextProvider} from './src/context/authContext';
import {Provider} from 'react-redux';
import store from './src/features/store';
import MainNavigation from './src/components/MainNavigation/MainNavigation';

const App = () => {
  return (
    <Provider store={store}>
      <AuthContextProvider>
        <MainNavigation />
      </AuthContextProvider>
    </Provider>
  );
};

export default App;

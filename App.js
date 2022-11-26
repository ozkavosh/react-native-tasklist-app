import React from 'react';
import {AuthContextProvider} from './src/context/authContext';
import {Provider} from 'react-redux';
import store from './src/features/store';
import MainNavigation from './src/components/MainNavigation/MainNavigation';
import {GestureHandlerRootView} from 'react-native-gesture-handler';

const App = () => {
  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <Provider store={store}>
        <AuthContextProvider>
          <MainNavigation />
        </AuthContextProvider>
      </Provider>
    </GestureHandlerRootView>
  );
};

export default App;

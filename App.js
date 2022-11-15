import React from 'react';
import {StatusBar} from 'react-native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {NavigationContainer, DefaultTheme} from '@react-navigation/native';
import Home from './src/screens/Home/Home';
import SignIn from './src/screens/SignIn/SignIn';
import OnBoarding from './src/screens/OnBoarding/OnBoarding';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import SignUp from './src/screens/SignUp/SignUp';
import FlashMessage from 'react-native-flash-message';
import {AuthContextProvider} from './src/context/authContext';
import NoAuthRoute from './src/components/NoAuthRoute/NoAuthRoute';
import AuthRoute from './src/components/AuthRoute/AuthRoute';

const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();

const navigatorTheme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    background: '#EDEDEE',
  },
};

const App = () => {
  return (
    <AuthContextProvider>
      <NavigationContainer theme={navigatorTheme}>
        <StatusBar
          translucent
          backgroundColor="transparent"
          barStyle="dark-content"
        />
        <Stack.Navigator
          initialRouteName="OnBoarding"
          screenOptions={{headerShown: false}}>
          <Stack.Screen name="OnBoarding" component={OnBoarding} />
          <Stack.Screen name="SignIn">
            {props => <NoAuthRoute {...props}><SignIn {...props}/></NoAuthRoute>}
          </Stack.Screen>
          <Stack.Screen name="SignUp">
            {props => <NoAuthRoute {...props}><SignUp {...props}/></NoAuthRoute>}
          </Stack.Screen>
          <Stack.Screen name="Home">
            {props => <AuthRoute {...props}><Home {...props}/></AuthRoute>}
          </Stack.Screen>
        </Stack.Navigator>
        <FlashMessage position="top" />
      </NavigationContainer>
    </AuthContextProvider>
  );
};

export default App;

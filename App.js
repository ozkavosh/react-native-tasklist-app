import React from 'react';
import { StatusBar } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import {NavigationContainer, DefaultTheme} from '@react-navigation/native';
import Home from './src/screens/Home/Home';
import SignIn from './src/screens/SignIn/SignIn';
import OnBoarding from './src/screens/OnBoarding/OnBoarding';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import SignUp from './src/screens/SignUp/SignUp';

const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();

const navigatorTheme = {
  ...DefaultTheme,
  colors:{
    ...DefaultTheme.colors,
    background: '#EDEDEE'
  }
}

const App = () => {

  return (
    <NavigationContainer theme={navigatorTheme}>
      <StatusBar
        translucent
        backgroundColor="transparent"
        barStyle="dark-content"
      />
      <Stack.Navigator initialRouteName='Home' screenOptions={{ headerShown: false }}>
        <Stack.Screen name="OnBoarding" component={OnBoarding}/>
        <Stack.Screen name="SignIn" component={SignIn}/>
        <Stack.Screen name="SignUp" component={SignUp}/>
        <Stack.Screen name="Home" component={Home}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;

import {StatusBar} from 'react-native';
import Home from '../../screens/Home/Home';
import SignIn from '../../screens/SignIn/SignIn';
import OnBoarding from '../../screens/OnBoarding/OnBoarding';
import SignUp from '../../screens/SignUp/SignUp';
import AddTask from '../../screens/AddTask/AddTask';
import FlashMessage from 'react-native-flash-message';
import NoAuthRoute from '../NoAuthRoute/NoAuthRoute';
import AuthRoute from '../AuthRoute/AuthRoute';
import Loader from '../Loader/Loader';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {NavigationContainer, DefaultTheme} from '@react-navigation/native';
import { useSelector } from 'react-redux';
const Stack = createNativeStackNavigator();

const navigatorTheme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    background: '#EDEDEE',
  },
};

const MainNavigation = () => {
  const { show } = useSelector((state) => state.loader);

  return (
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
          {props => (
            <NoAuthRoute {...props}>
              <SignIn {...props} />
            </NoAuthRoute>
          )}
        </Stack.Screen>
        <Stack.Screen name="SignUp">
          {props => (
            <NoAuthRoute {...props}>
              <SignUp {...props} />
            </NoAuthRoute>
          )}
        </Stack.Screen>
        <Stack.Screen name="Home">
          {props => (
            <AuthRoute {...props}>
              <Home {...props} />
            </AuthRoute>
          )}
        </Stack.Screen>
        <Stack.Screen name="AddTask" component={AddTask} />
      </Stack.Navigator>
      { show ? <Loader/> : null }
      <FlashMessage position="top" />
    </NavigationContainer>
  );
};

export default MainNavigation;

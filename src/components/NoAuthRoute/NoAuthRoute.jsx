import { useEffect } from 'react';
import {useAuthContext} from '../../context/authContext';
import { StackActions } from '@react-navigation/native';

const NoAuthRoute = ({children, navigation}) => {
  const {auth} = useAuthContext();

  useEffect(() => {
    if(auth.token){
      navigation.dispatch(
        StackActions.replace('Home')
      );
    }
  }, [auth.token]);

  return !auth.token ? children : null;
};

export default NoAuthRoute;

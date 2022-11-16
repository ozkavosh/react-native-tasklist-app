import {useContext, createContext, useReducer, useEffect} from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {showMessage} from 'react-native-flash-message';
import axios from 'axios';

const AuthContext = createContext(null);

export const useAuthContext = () => {
  return useContext(AuthContext);
};

export const AuthContextProvider = ({children}) => {
  const INITIAL_AUTH = {token: null, user: null};

  const [auth, authDispatch] = useReducer((state, action) => {
    switch (action.type) {
      case 'LOGOUT':
        return INITIAL_AUTH;
      case 'SET_AUTH':
        return {user: action.payload.user, token: action.payload.token};
      case 'SET_USER':
        return {...state, user: action.payload};
      case 'SET_TOKEN':
        return {...state, token: action.payload};
      default:
        return state;
    }
  }, INITIAL_AUTH);

  const setToken = async token => {
    await AsyncStorage.setItem('token', token);
    authDispatch({type: 'SET_TOKEN', payload: token});
  };

  const setUser = user => {
    showMessage({
      message: `Welcome ${user.name}`,
      type: 'success',
    });
    authDispatch({type: 'SET_USER', payload: user});
  };

  const setAuth = (user, token) => {
    authDispatch({type: 'SET_AUTH', payload: {user, token}});
  };

  const logout = async () => {
    try{
      await AsyncStorage.removeItem(token);
      authDispatch({type: 'LOGOUT'});
    }catch(e){
      authDispatch({type: 'LOGOUT'});
    }
  };

  useEffect(() => {
    (async () => {
      try {
        const token = await AsyncStorage.getItem('token');
        if(!token) return logout();
        setToken(token);
      } catch (e) {
        logout();
      }
    })();
  }, []);

  useEffect(() => {
    if(auth.token){
      (async () => {
        try{
          const request = await axios.get('https://ozkavosh-todo-api.glitch.me/user/me', { headers: { 'Authorization': 'Bearer ' + auth.token} });
          const user = request.data;
          setUser(user);
        }catch(e){
          logout();
          console.log(e);
        }
      })()
    }
  }, [auth.token]);

  return (
    <AuthContext.Provider value={{auth, setAuth, setToken, setUser, logout}}>
      {children}
    </AuthContext.Provider>
  );
};

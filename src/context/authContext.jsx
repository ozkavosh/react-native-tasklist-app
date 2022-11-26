import {useContext, createContext, useReducer, useEffect} from 'react';
import {useDispatch} from 'react-redux';
import {show, hide} from '../features/slices/loaderSlice';
import AsyncStorage from '@react-native-async-storage/async-storage';
import showMessage from '../utils/showMessage';
import axios from 'axios';
import t from '../utils/translate';

const AuthContext = createContext(null);

export const useAuthContext = () => {
  return useContext(AuthContext);
};

export const AuthContextProvider = ({children}) => {
  const dispatch = useDispatch();
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
      title: 'Éxito!',
      message: t('displayMessages.userWelcomeMessage')(user.name),
      type: 'success',
    });
    authDispatch({type: 'SET_USER', payload: user});
  };

  const setAuth = (user, token) => {
    authDispatch({type: 'SET_AUTH', payload: {user, token}});
  };

  const logout = async () => {
    try {
      dispatch(show());
      await AsyncStorage.removeItem('token');
      authDispatch({type: 'LOGOUT'});
    } catch (e) {
      authDispatch({type: 'LOGOUT'});
    } finally {
      dispatch(hide());
    }
  };

  //Read token on startup
  useEffect(() => {
    (async () => {
      try {
        dispatch(show());
        const token = await AsyncStorage.getItem('token');
        if (!token) return logout();
        setToken(token);
      } catch (e) {
        logout();
      } finally {
        dispatch(hide());
      }
    })();
  }, []);

  //Fetch user on every token change
  useEffect(() => {
    if (auth.token) {
      (async () => {
        try {
          dispatch(show());
          const request = await axios.get(
            'https://ozkavosh-todo-api.glitch.me/user/me',
            {headers: {Authorization: 'Bearer ' + auth.token}},
          );
          const user = request.data;
          setUser(user);
        } catch (e) {
          logout();
          console.log(e);
        } finally {
          dispatch(hide());
        }
      })();
    }
  }, [auth.token]);

  return (
    <AuthContext.Provider value={{auth, setAuth, setToken, setUser, logout}}>
      {children}
    </AuthContext.Provider>
  );
};

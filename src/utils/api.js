import {API_BASE_URL} from '@env';
import AsyncStorage from '@react-native-async-storage/async-storage';
import axios from 'axios';

const API_ENDPOINTS = {
  signUp: '/user/register',
  signIn: '/user/login',
  addTask: '/task',
  getTasks: '/task'
};

const getEndpoint = key => {
  return API_BASE_URL + API_ENDPOINTS[key];
};

const getHeadersWithToken = async () => {
  const token = await AsyncStorage.getItem('token');
  return {headers: {Authorization: 'Bearer ' + token}};
};

export const postSignUp = async userData => {
  try {
    const request = await axios.post(getEndpoint('signUp'), userData);
    return request;
  } catch (e) {
    throw e;
  }
};

export const postSignIn = async userData => {
  try {
    const request = await axios.post(getEndpoint('signIn'), userData);
    return request;
  } catch (e) {
    throw e;
  }
};

export const postTask = async taskData => {
  try {
    const request = await axios.post(
      getEndpoint('addTask'),
      taskData,
      await getHeadersWithToken(),
    );
    return request;
  } catch (e) {
    throw e;
  }
};

export const getTasks = async () => {
    try {
      const request = await axios.get(
        getEndpoint('getTasks'),
        await getHeadersWithToken(),
      );
      return request;
    } catch (e) {
      throw e;
    }
  };

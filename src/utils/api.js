import {API_BASE_URL} from '@env';
import AsyncStorage from '@react-native-async-storage/async-storage';
import t from './translate';
import axios from 'axios';
import log from './log';

const API_ENDPOINTS = {
  signUp: '/user/register',
  signIn: '/user/login',
  addTask: '/task',
  getTasks: '/task',
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
    log.warn(e.response);
    throw new Error(t(`displayMessages.${e.response.data.code}`));
  }
};

export const postSignIn = async userData => {
  try {
    const request = await axios.post(getEndpoint('signIn'), userData);
    return request;
  } catch (e) {
    log.warn(e.response);
    throw new Error(t(`displayMessages.${e.response.data.code}`));
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
    log.warn(e.response);
    throw new Error(t(`displayMessages.${e.response.data.code}`));
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
    log.warn(e.response);
    throw new Error(t(`displayMessages.${e.response.data.code}`));
  }
};

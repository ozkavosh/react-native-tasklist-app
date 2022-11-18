import {View} from 'react-native';
import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { show, hide } from '../../features/slices/loaderSlice';
import TaskListHeader from '../TaskListHeader/TaskListHeader';
import TaskList from '../TaskList/TaskList';
import axios from 'axios';
import { useAuthContext } from '../../context/authContext';
import styles from './styles';

const TaskListContainer = ({navigation}) => {
  const [tasks, setTasks] = useState([]);
  const { auth } = useAuthContext();
  const dispatch = useDispatch();

  useEffect(() => {
    const unsubscribe = navigation.addListener('focus', async () => {
      try {
        dispatch(show());
        const request = await axios.get(
          'https://ozkavosh-todo-api.glitch.me/task',
          {headers: {Authorization: 'Bearer ' + auth.token}},
        );
        setTasks(request.data?.data || []);
      } catch (e) {
        console.log(e);
        setTasks([]);
      } finally {
        dispatch(hide());
      }
    });

    return () => unsubscribe;
  }, [navigation]);

  return (
    <View
      style={styles.taskListContainer}>
      <TaskListHeader navigation={navigation} />
      <TaskList tasks={tasks} />
    </View>
  );
};

export default TaskListContainer;

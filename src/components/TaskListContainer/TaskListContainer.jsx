import {View} from 'react-native';
import React, { useEffect, useState } from 'react';
import TaskListHeader from '../TaskListHeader/TaskListHeader';
import TaskList from '../TaskList/TaskList';
import axios from 'axios';
import { useAuthContext } from '../../context/authContext';

const TaskListContainer = ({navigation}) => {
  const [tasks, setTasks] = useState([]);
  const { auth } = useAuthContext();

  useEffect(() => {
    const unsubscribe = navigation.addListener('focus', async () => {
      try {
        const request = await axios.get(
          'https://ozkavosh-todo-api.glitch.me/task',
          {headers: {Authorization: 'Bearer ' + auth.token}},
        );
        setTasks(request.data?.data || []);
      } catch (e) {
        console.log(e);
        setTasks([]);
      }
    });

    return () => unsubscribe;
  }, [navigation]);

  return (
    <View
      style={{
        backgroundColor: 'white',
        flex: 1,
        paddingHorizontal: 25,
        paddingVertical: 15,
        elevation: 6,
        borderRadius: 15,
        shadowColor: '#000',
        shadowOffset: {width: 0, height: 2},
        shadowOpacity: 0.5,
        shadowRadius: 2,
      }}>
      <TaskListHeader navigation={navigation} />
      <TaskList tasks={tasks} />
    </View>
  );
};

export default TaskListContainer;

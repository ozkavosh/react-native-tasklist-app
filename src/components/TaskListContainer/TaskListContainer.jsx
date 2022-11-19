import {View} from 'react-native';
import React, {useEffect, useState} from 'react';
import TaskListHeader from '../TaskListHeader/TaskListHeader';
import TaskList from '../TaskList/TaskList';
import styles from './styles';
import fetchTasks from '../../utils/fetchTasks';

const TaskListContainer = ({navigation}) => {
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    const unsubscribe = navigation.addListener('focus', async () => {
      fetchTasks({setTasks});
    });

    return () => unsubscribe;
  }, [navigation]);

  return (
    <View style={styles.taskListContainer}>
      <TaskListHeader navigation={navigation} />
      <TaskList tasks={tasks} setTasks={setTasks} />
    </View>
  );
};

export default TaskListContainer;

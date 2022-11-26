import {View} from 'react-native';
import React, {useEffect} from 'react';
import TaskListHeader from '../TaskListHeader/TaskListHeader';
import TaskList from '../TaskList/TaskList';
import styles from './styles';
import fetchTasks from '../../utils/fetchTasks';

const TaskListContainer = ({navigation}) => {
  useEffect(() => {
    const unsubscribe = navigation.addListener('focus', async () => {
      fetchTasks();
    });

    return () => unsubscribe;
  }, [navigation]);

  return (
    <View style={styles.taskListContainer}>
      <TaskListHeader navigation={navigation} />
      <TaskList/>
    </View>
  );
};

export default TaskListContainer;

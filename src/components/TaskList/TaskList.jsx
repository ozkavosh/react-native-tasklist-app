import {FlatList} from 'react-native';
import React from 'react';
import TaskListItem from '../TaskListItem/TaskListItem';
import styles from './styles';

const TaskList = ({tasks}) => {
  return (
    <FlatList
      data={tasks}
      extraData={tasks}
      keyExtractor={task => task._id}
      renderItem={({item}) => <TaskListItem task={item} />}
      style={styles.taskList}
    />
  );
};

export default TaskList;

import {FlatList} from 'react-native';
import React from 'react';
import TaskListItem from '../TaskListItem/TaskListItem';

const TaskList = ({tasks}) => {
  return (
    <FlatList
      data={tasks}
      extraData={tasks}
      keyExtractor={task => task._id}
      renderItem={({item}) => <TaskListItem task={item} />}
      style={{flex: 1, width: '100%'}}
    />
  );
};

export default TaskList;

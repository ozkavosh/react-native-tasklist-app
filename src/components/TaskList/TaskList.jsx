import {FlatList, RefreshControl} from 'react-native';
import React from 'react';
import {useSelector} from 'react-redux';
import TaskListItem from '../TaskListItem/TaskListItem';
import styles from './styles';
import fetchTasks from '../../utils/fetchTasks';
import TaskListEmpty from '../TaskListEmpty/TaskListEmpty';

const TaskList = ({tasks, setTasks}) => {
  const {show} = useSelector(state => state.loader);

  return (
    <FlatList
      data={tasks}
      extraData={tasks}
      keyExtractor={task => task._id}
      renderItem={({item}) => <TaskListItem task={item} />}
      refreshControl={
        <RefreshControl
          onRefresh={() => fetchTasks({setTasks})}
          refreshing={show}
        />
      }
      ListEmptyComponent={<TaskListEmpty/>}
      style={styles.taskList}
    />
  );
};

export default TaskList;

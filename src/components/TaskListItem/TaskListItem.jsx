import {View} from 'react-native';
import {P} from '../Text/Text';
import React, { useState } from 'react';
import Checkbox from '../Checkbox/Checkbox';
import Icon from 'react-native-vector-icons/FontAwesome';
import styles from './styles';
import DeleteTaskModal from '../DeleteTaskModal/DeleteTaskModal';

const TaskListItem = ({task, setTasks}) => {
  const [visibleModal, setVisibleModal] = useState(false);

  return (
    <View
      style={styles.taskListItem}>
      <Checkbox style={styles.checkBox} />
      <P>{task?.description}</P>
      <Icon style={{ marginLeft: 'auto'}} name="trash" size={20} color="#000" onPress={() => setVisibleModal(prev => !prev)}  />
      {visibleModal && <DeleteTaskModal setVisibleModal={setVisibleModal} task={task} setTasks={setTasks} />}
    </View>
  );
};

export default TaskListItem;

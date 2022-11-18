import {View} from 'react-native';
import {P} from '../Text/Text';
import React from 'react';
import Checkbox from '../Checkbox/Checkbox';
import Icon from 'react-native-vector-icons/FontAwesome';
import styles from './styles';

const TaskListItem = ({task}) => {
  return (
    <View
      style={styles.taskListItem}>
      <Checkbox style={styles.checkBox} />
      <P>{task?.description}</P>
      {/* <Icon style={{ marginLeft: 'auto'}} name="trash" size={20} color="#000"  /> */}
    </View>
  );
};

export default TaskListItem;

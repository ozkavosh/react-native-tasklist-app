import {View} from 'react-native';
import {P} from '../Text/Text';
import React from 'react';
import Checkbox from '../Checkbox/Checkbox';
import Icon from 'react-native-vector-icons/FontAwesome';

const TaskListItem = ({task}) => {
  return (
    <View
      style={{
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 13,
      }}>
      <Checkbox style={{marginRight: 5}} />
      <P>{task?.description}</P>
      {/* <Icon style={{ marginLeft: 'auto'}} name="trash" size={20} color="#000"  /> */}
    </View>
  );
};

export default TaskListItem;

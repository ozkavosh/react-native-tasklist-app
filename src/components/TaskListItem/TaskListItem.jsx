import {View} from 'react-native';
import {P} from '../Text/Text';
import React, {useState} from 'react';
import Checkbox from '../Checkbox/Checkbox';
import Icon from 'react-native-vector-icons/FontAwesome';
import styles from './styles';
import DeleteTaskModal from '../DeleteTaskModal/DeleteTaskModal';
import {useNavigation} from '@react-navigation/native';

const TaskListItem = ({task, setTasks}) => {
  const [visibleModal, setVisibleModal] = useState(false);
  const navigation = useNavigation();

  return (
    <View style={styles.taskListItem}>
      <Checkbox checked={task?.completed} style={styles.checkBox} />
      <P>{task?.description}</P>
      <Icon
        style={{marginLeft: 'auto'}}
        name="pencil"
        size={18}
        color="#000"
        onPress={() => navigation.navigate('AddTask', {task})}
      />
      <Icon
        style={{marginLeft: 15}}
        name="trash-o"
        size={18}
        color="#000"
        onPress={() => setVisibleModal(prev => !prev)}
      />
      {visibleModal && (
        <DeleteTaskModal
          setVisibleModal={setVisibleModal}
          task={task}
          setTasks={setTasks}
        />
      )}
    </View>
  );
};

export default TaskListItem;

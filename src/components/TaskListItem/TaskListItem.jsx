import {View} from 'react-native';
import {P} from '../Text/Text';
import React, {useState} from 'react';
import BouncyCheckbox from "react-native-bouncy-checkbox";
import Icon from 'react-native-vector-icons/FontAwesome';
import styles from './styles';
import DeleteTaskModal from '../DeleteTaskModal/DeleteTaskModal';
import {useNavigation} from '@react-navigation/native';
import checkTask from '../../utils/checkTask';
import colors from '../../utils/colors';

const TaskListItem = ({task}) => {
  const [visibleModal, setVisibleModal] = useState(false);
  const navigation = useNavigation();

  return (
    <View style={styles.taskListItem}>
      <BouncyCheckbox fillColor={colors.primary} isChecked={task?.completed} disableBuiltInState onPress={()=> checkTask(task)}/>
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
        />
      )}
    </View>
  );
};

export default TaskListItem;

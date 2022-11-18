import {View} from 'react-native';
import {P} from '../Text/Text';
import React from 'react';
import Button from '../StyledButton/StyledButton';
import t from '../../utils/translate';
import {useAuthContext} from '../../context/authContext';
import styles from './styles';

const TaskListHeader = ({navigation}) => {
  const {logout} = useAuthContext();

  return (
    <View style={styles.taskListHeader}>
      <P bold>{t('home.taskListHeaderTitle')}</P>
      <Button
        style={styles.button}
        title="+"
        onPress={() => navigation.navigate('AddTask')}
        // onPress={logout}
      />
    </View>
  );
};

export default TaskListHeader;

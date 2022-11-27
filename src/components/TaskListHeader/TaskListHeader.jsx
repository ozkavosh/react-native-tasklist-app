import {View} from 'react-native';
import {P} from '../Text/Text';
import React from 'react';
import Button from '../StyledButton/StyledButton';
import t from '../../utils/translate';
import styles from './styles';

const TaskListHeader = ({navigation}) => {
  return (
    <View style={styles.taskListHeader}>
      <P fs={15} bold>{t('home.taskListHeaderTitle')}</P>
      <Button
        style={styles.button}
        title="+"
        onPress={() => navigation.navigate('AddTask')}
      />
    </View>
  );
};

export default TaskListHeader;

import {View} from 'react-native';
import {P} from '../Text/Text';
import React from 'react';
import Button from '../StyledButton/StyledButton';
import useTranslate from '../../hooks/useTranslate';
import styles from './styles';

const TaskListHeader = ({navigation}) => {
  const t = useTranslate();

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

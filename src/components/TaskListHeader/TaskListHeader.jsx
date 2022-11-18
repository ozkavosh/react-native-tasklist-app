import {View} from 'react-native';
import {P} from '../Text/Text';
import React from 'react';
import Button from '../StyledButton/StyledButton';
import t from '../../utils/translate';
import { useAuthContext } from '../../context/authContext';

const TaskListHeader = ({navigation}) => {
  const { logout } = useAuthContext();

  return (
    <View
      style={{
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginBottom: 25,
      }}>
      <P bold>{t('home.taskListHeaderTitle')}</P>
      <Button
        style={{
          width: 32,
          height: 32,
          alignItems: 'center',
          justifyContent: 'center',
        }}
        title="+"
        onPress={() => navigation.navigate('AddTask')}
        // onPress={logout}
      />
    </View>
  );
};

export default TaskListHeader;

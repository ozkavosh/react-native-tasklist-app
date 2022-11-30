import {Image, View} from 'react-native';
import {P, Span} from '../Text/Text';
import useTranslate from '../../hooks/useTranslate';
import React from 'react';

const TaskListEmpty = () => {
  const t = useTranslate();

  return (
    <View style={{height: 150, justifyContent: 'center'}}>
      <Image
        source={require('../../assets/pointing-line.png')}
        style={{
          width: 64,
          height: 75,
          position: 'absolute',
          right: 12,
          top: 5,
        }}
      />
      <P center>{t('home.taskListEmptyMessage')}</P>
      <Span center bold primary>
        {t('home.taskListEmptySpanMessage')}
      </Span>
    </View>
  );
};

export default TaskListEmpty;

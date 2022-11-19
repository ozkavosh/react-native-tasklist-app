import {View} from 'react-native';
import React from 'react';
import TimedGreeting from '../TimedGreeting/TimedGreeting';
import Base from '../ClockBase/ClockBase';
import styles from './styles';

const Clock = () => {
  return (
    <View style={styles.clock}>
      <TimedGreeting />
      <Base />
    </View>
  );
};

export default Clock;

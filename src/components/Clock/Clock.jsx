import {View} from 'react-native';
import React from 'react';
import Base from '../ClockBase/ClockBase';
import styles from './styles';

const Clock = () => {
  return (
    <View style={styles.clock}>
      <Base />
    </View>
  );
};

export default Clock;

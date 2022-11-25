import {View, ActivityIndicator, Image} from 'react-native';
import { H1, P } from '../Text/Text';
import React from 'react';
import styles from './styles';

const Loader = () => {
  return (
    <View
      style={styles.loader}>
      {/* <ActivityIndicator size="large" color="white" /> */}
      <Image source={require('../../assets/loading.gif')} style={{ width: 110, height: 100 }} />
    </View>
  );
};

export default Loader;

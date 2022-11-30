import {View, Image} from 'react-native';
import React from 'react';
import styles from './styles';

const Loader = () => {
  return (
    <View
      style={styles.loader}>
      <Image source={require('../../assets/loading.gif')} style={{ width: 110, height: 100 }} />
    </View>
  );
};

export default Loader;

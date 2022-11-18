import {View, ActivityIndicator} from 'react-native';
import React from 'react';

const Loader = () => {
  return (
    <View
      style={{
        position: 'absolute',
        backgroundColor: '#0000001d',
        flex: 1,
        width: '100%',
        height: '100%',
        alignItems: 'center',
        justifyContent: 'center',
      }}>
      <ActivityIndicator size="large" color="#50C2C9" />
    </View>
  );
};

export default Loader;

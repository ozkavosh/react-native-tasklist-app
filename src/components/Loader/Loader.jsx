import {View, ActivityIndicator} from 'react-native';
import React from 'react';

export const Loader = () => {
  return (
    <View
      style={{
        position: 'absolute',
        backgroundColor: '#0000004d',
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
      }}>
      <ActivityIndicator size="large" color="#50C2C9" />
    </View>
  );
};

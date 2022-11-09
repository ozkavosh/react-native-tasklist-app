import {Image} from 'react-native';
import React from 'react';
import {RGBA} from 'react-native-color-matrix-image-filters';
import styles from './styles';

const Ellipse = ({light}) => {
  if (light)
    return (
      <RGBA red={255} green={255} blue={255}>
        <Image
          source={require('../../assets/elipse.png')}
          style={styles.ellipse}
        />
      </RGBA>
    );

  return (
    <Image source={require('../../assets/elipse.png')} style={styles.ellipse} />
  );
};

export default Ellipse;

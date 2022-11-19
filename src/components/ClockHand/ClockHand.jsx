import {withAnchorPoint} from 'react-native-anchor-point';
import React from 'react';
import {View} from 'react-native';
import styles from './styles';
import styleVariations from './styleVariations';

const Hand = ({time, type}) => {
  const height = styleVariations['height'][type];
  const width = styleVariations['width'][type];
  const left = styleVariations['left'][type];
  const backgroundColor = styleVariations['backgroundColor'][type];

  const getTransform = () => {
    let transform = {
      transform: [{rotate: `${time + 90}deg`}],
    };

    return withAnchorPoint(transform, {x: 1, y: 0.5}, {width, height});
  };

  return (
    <View
      style={[
        {width, height, backgroundColor, left, ...getTransform()},
        styles.clockHand,
      ]}
    />
  );
};

export default Hand;

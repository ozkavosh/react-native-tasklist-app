import {View} from 'react-native';
import React from 'react';
import styled, {css} from 'styled-components/native';
import {withAnchorPoint} from 'react-native-anchor-point';
import t from '../../utils/translate';

const Hand = ({time, type}) => {
  const height = type === 'seconds' ? 2 : type === 'minutes' ? 3 : 5;
  const width = type === 'seconds' ? 50 : type === 'minutes' ? 45 : 35;
  const left = type === 'seconds' ? '15%' : type === 'minutes' ? '18.5%' : '25.3%';
  const backgroundColor =
    type === 'seconds' ? '#c8dbe2' : type === 'minutes' ? '#9fc5c6' : '#9fc5c6';

  const getTransform = () => {
    let transform = {
      transform: [{rotate: `${time+90}deg`}],
    };

    return withAnchorPoint(transform, {x: 1, y: 0.5}, {width, height});
  };

  return (
    <View
      style={{
        position: 'absolute',
        width,
        height,
        backgroundColor,
        left,
        top: '50%',
        elevation: 2,
        ...getTransform(),
      }}
    />
  );
};

const MainHour = styled.Text`
  position: absolute;
  font-weight: bold;
  font-size: 15px;
  color: #88b5b5;
  ${props => {
    switch (props.position) {
      case 'bottom':
        return css`
          bottom: 0;
          left: 47%;
        `;
      case 'left':
        return css`
          top: 42%;
          left: 5%;
        `;
      case 'right':
        return css`
          top: 42%;
          right: 5%;
        `;
      default:
        return css`
          top: 0;
          left: 44%;
        `;
    }
  }}
`;

const Base = () => {
  const [time, setTime] = React.useState({seconds: 0, minutes: 0, hours: 0});

  React.useEffect(() => {
    const timer = setInterval(() => {
      const seconds = new Date(Date.now()).getSeconds();
      const minutes = new Date(Date.now()).getMinutes();
      const hours = new Date(Date.now()).getHours();
      setTime({
        seconds: (seconds / 60) * 360,
        minutes: (minutes / 60) * 360 + (seconds / 60) * 6,
        hours: (hours / 12) * 360 + (minutes / 60) * 30,
      });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <View
      style={{
        width: 134,
        height: 134,
        backgroundColor: '#dcf9fd',
        borderRadius: 134 / 2,
        elevation: 7,
      }}>
      <MainHour>12</MainHour>
      <MainHour position="right">3</MainHour>
      <MainHour position="bottom">6</MainHour>
      <MainHour position="left">9</MainHour>

      <Hand time={time.seconds} type="seconds" />
      <Hand time={time.minutes} type="minutes" />
      <Hand time={time.hours} type="hours" />

      <View
        style={{
          backgroundColor: '#c9dce3',
          position: 'absolute',
          left: '46%',
          top: '45%',
          width: 14,
          height: 14,
          borderRadius: 14 / 2,
          elevation: 4,
        }}
      />
    </View>
  );
};

const TimedGreeting = styled.Text`
  width: 100%;
  font-weight: bold;
  text-align: right;
  margin-bottom: 15px;
`;

const getTimedGreeting = () => {
  const hours = new Date(Date.now()).getHours();
  return hours < 12 ? t('home.clockGreetingAM') : t('home.clockGreetingPM');
}

const Clock = () => {
  return (
    <View style={{width: '100%', alignItems: 'center'}}>
      <TimedGreeting>{ `${getTimedGreeting()}` }</TimedGreeting>
      <Base />
    </View>
  );
};

export default Clock;

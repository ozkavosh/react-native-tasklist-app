import {View} from 'react-native';
import React from 'react';
import MainHour from '../ClockMainHour/ClockMainHour';
import Hand from '../ClockHand/ClockHand';
import styles from './styles';

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
    <View style={styles.clockBase}>
      <MainHour>12</MainHour>
      <MainHour position="right">3</MainHour>
      <MainHour position="bottom">6</MainHour>
      <MainHour position="left">9</MainHour>

      <Hand time={time.seconds} type="seconds" />
      <Hand time={time.minutes} type="minutes" />
      <Hand time={time.hours} type="hours" />

      <View style={styles.clockNotch} />
    </View>
  );
};

export default Base;

import t from '../../utils/translate';
import styled from 'styled-components/native';

const TimedGreetingText = styled.Text`
  width: 100%;
  font-weight: bold;
  text-align: right;
  margin-bottom: 15px;
`;

const TimedGreeting = () => {
  const getTimedGreeting = () => {
    const hours = new Date(Date.now()).getHours();
    return hours < 12
      ? t('home.clockGreetingMorning')
      : hours < 18
      ? t('home.clockGreetingEvening')
      : t('home.clockGreetingNight');
  };

  return <TimedGreetingText>{getTimedGreeting()}</TimedGreetingText>;
};

export default TimedGreeting;

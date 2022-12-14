import useTranslate from '../../hooks/useTranslate';
import styled from 'styled-components/native';
import { useAuthContext } from '../../context/authContext';
import colors from '../../utils/colors';

const TimedGreetingText = styled.Text`
  width: 100%;
  color: ${colors.primary};
  font-weight: bold;
  font-size: 24px;
  text-transform: capitalize;
  margin-top: 25px;
`;

const TimedGreeting = () => {
  const { auth } = useAuthContext();
  const t = useTranslate();

  const getTimedGreeting = () => {
    const hours = new Date(Date.now()).getHours();
    return hours < 12
      ? t('home.clockGreetingMorning')
      : hours < 18
      ? t('home.clockGreetingEvening')
      : t('home.clockGreetingNight');
  };

  return <TimedGreetingText>{`${getTimedGreeting()} ${auth?.user?.name?.split(' ')[0]}`}</TimedGreetingText>;
};

export default TimedGreeting;

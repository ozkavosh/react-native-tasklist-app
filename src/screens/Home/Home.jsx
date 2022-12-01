import React from 'react';
import MainContainer from '../../components/MainContainer/MainContainer';
import Ellipse from '../../components/Ellipse/Ellipse';
import Clock from '../../components/Clock/Clock';
import {P} from '../../components/Text/Text';
import useTranslate from '../../hooks/useTranslate';
import TaskListContainer from '../../components/TaskListContainer/TaskListContainer';
import UserStatusBar from '../../components/UserStatusBar/UserStatusBar';
import TimedGreeting from '../../components/TimedGreeting/TimedGreeting';
import { useSelector } from 'react-redux';

const Home = ({navigation}) => {
  const t = useTranslate();
  const { tasksInProgress } = useSelector(state => state.task);

  return (
    <MainContainer>
      <Ellipse light />

      <UserStatusBar />

      <Clock />

      <TimedGreeting />

      <P fs={16} mb={15} bold>
        {tasksInProgress ? t('home.taskListRemaining')(tasksInProgress) : t('home.taskListNoRemaining')}
      </P>
      <TaskListContainer navigation={navigation} />
    </MainContainer>
  );
};

export default Home;

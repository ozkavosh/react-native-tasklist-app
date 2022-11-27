import React from 'react';
import MainContainer from '../../components/MainContainer/MainContainer';
import Ellipse from '../../components/Ellipse/Ellipse';
import Clock from '../../components/Clock/Clock';
import {P} from '../../components/Text/Text';
import t from '../../utils/translate';
import TaskListContainer from '../../components/TaskListContainer/TaskListContainer';
import UserStatusBar from '../../components/UserStatusBar/UserStatusBar';

const Home = ({navigation}) => {
  return (
    <MainContainer>
      <Ellipse light />

      <UserStatusBar />

      <Clock />

      <P fs={16} mv={15} bold>
        {t('home.taskListTitle')}
      </P>
      <TaskListContainer navigation={navigation} />
    </MainContainer>
  );
};

export default Home;

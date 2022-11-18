import {View, Image} from 'react-native';
import React from 'react';
import MainContainer from '../../components/MainContainer/MainContainer';
import styles from './styles';
import Ellipse from '../../components/Ellipse/Ellipse';
import Clock from '../../components/Clock/Clock';
import {useAuthContext} from '../../context/authContext';
import {H1, P} from '../../components/Text/Text';
import t from '../../utils/translate';
import TaskListContainer from '../../components/TaskListContainer/TaskListContainer';

const Home = ({navigation}) => {
  const {auth} = useAuthContext();

  return (
    <MainContainer>
      <Ellipse light />

      <View style={styles.userStatusBar}>
        <View style={styles.userAvatar}>
          {false ? (
            <Image
              style={styles.avatarImg}
              source={{uri: null, width: 128, height: 128}}
            />
          ) : (
            <View style={styles.avatarPlaceHolder} />
          )}
        </View>

        <H1 mv={15} light>
          {t('home.welcomeMessage')} {auth?.user?.name}{' '}
        </H1>
      </View>

      <Clock />

      <P mv={15} bold>
        {t('home.taskListTitle')}
      </P>
      <TaskListContainer navigation={navigation} />
    </MainContainer>
  );
};

export default Home;

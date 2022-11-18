import {View, Image, TouchableOpacity, Text} from 'react-native';
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
  const {auth, logout} = useAuthContext();

  return (
    <MainContainer>
      <Ellipse light />

      <View style={styles.userStatusBar}>
        <View style={styles.userAvatar}>
          {true ? (
            <Image
              style={styles.avatarImg}
              source={{
                uri: 'https://static.wikia.nocookie.net/omori/images/8/89/Omori_Neutral_%28No_Background%29.gif/revision/latest?cb=20211217073238&format=original',
                width: 110,
                height: 110,
              }}
            />
          ) : (
            <View style={styles.avatarPlaceHolder} />
          )}
          <TouchableOpacity onPress={logout}
            style={styles.logoutBtn}>
            <Text>X</Text>
          </TouchableOpacity>
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

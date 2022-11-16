import {View, Image} from 'react-native';
import React from 'react';
import MainContainer from '../../components/MainContainer/MainContainer';
import styles from './styles';
import Ellipse from '../../components/Ellipse/Ellipse';
import Clock from '../../components/Clock/Clock';
import { useAuthContext } from '../../context/authContext';
import { H1 } from '../../components/Text/Text';
import Button from '../../components/StyledButton/StyledButton';

const Home = ({navigation}) => {
  const { auth, logout } = useAuthContext();

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

        <H1 mv={30} light> Welcome {auth?.user?.name} </H1>
      </View>

      <Clock/>

      <Button onPress={logout} title="Logout" />
    </MainContainer>
  );
};

export default Home;

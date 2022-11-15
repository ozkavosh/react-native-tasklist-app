import {View, Text, Image} from 'react-native';
import React from 'react';
import MainContainer from '../../components/MainContainer/MainContainer';
import styles from './styles';
import Ellipse from '../../components/Ellipse/Ellipse';
import Clock from '../../components/Clock/Clock';

const Home = ({navigation}) => {
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

        <Text style={styles.h1}>Welcome Jorgito Perez</Text>
      </View>

      <Clock/>
    </MainContainer>
  );
};

export default Home;

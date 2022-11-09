import {View, Text, TextInput, Image} from 'react-native';
import React from 'react';
import MainContainer from '../../components/MainContainer/MainContainer';
import Button from '../../components/StyledButton/StyledButton';
import styles from './styles';
import Ellipse from '../../components/Ellipse/Ellipse';

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
    </MainContainer>
  );
};

export default Home;

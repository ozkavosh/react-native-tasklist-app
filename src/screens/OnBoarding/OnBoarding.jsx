import { View, Text, Image } from 'react-native'
import React from 'react'
import MainContainer from '../../components/MainContainer/MainContainer';
import Button from '../../components/StyledButton/StyledButton';
import styles from './styles';
import Ellipse from '../../components/Ellipse/Ellipse';
import { showMessage, hideMessage } from "react-native-flash-message";

const OnBoarding = ({navigation}) => {
  return (
    <MainContainer style={{ alignItems: 'center' }}>
      <Ellipse />

      <View style={styles.header}>
        <Image source={require('../../assets/onboarding.png')} style={styles.headerImg}/>
        <Text style={styles.h1}>Get things done with TODo!</Text>
      </View>

      <Text style={styles.p}>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Id, tempora. Esse natus suscipit cumque perspiciatis eos, aliquam quae ducimus iure quasi.</Text>

      <Button title="Get Started" onPress={() => navigation.navigate('SignUp')} style={{ alignSelf: 'stretch' }}/>
    </MainContainer>
  )
}

export default OnBoarding
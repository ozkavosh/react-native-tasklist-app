import { View, Text, Image } from 'react-native'
import React from 'react'
import MainContainer from '../../components/MainContainer/MainContainer';
import { StyledButton, StyledButtonText } from '../../components/StyledButton/StyledButton';
import styles from './styles';

const OnBoarding = ({navigation}) => {
  return (
    <MainContainer style={{ alignItems: 'center' }}>
      <Image source={require('../../assets/elipse.png')} style={styles.backgroundImg} />

      <View style={styles.header}>
        <Image source={require('../../assets/onboarding.png')} style={styles.headerImg}/>
        <Text style={styles.h1}>Get things done with TODo!</Text>
      </View>

      <Text style={styles.p}>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Id, tempora. Esse natus suscipit cumque perspiciatis eos, aliquam quae ducimus iure quasi.</Text>

      <StyledButton onPress={() => navigation.navigate('SignUp')} style={{ alignSelf: 'stretch' }}>
        <StyledButtonText>Get Started</StyledButtonText>
      </StyledButton>
    </MainContainer>
  )
}

export default OnBoarding
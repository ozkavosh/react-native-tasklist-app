import {View, Text, TextInput, Image} from 'react-native';
import React from 'react';
import MainContainer from '../../components/MainContainer/MainContainer';
import {
  StyledButton,
  StyledButtonText,
} from '../../components/StyledButton/StyledButton';
import styles from './styles';

const SignUp = ({navigation}) => {
  return (
    <MainContainer>
      <Image
        source={require('../../assets/elipse.png')}
        style={styles.backgroundImg}
      />

      <View style={styles.header}>
        <Text style={styles.h1}>Welcome Onboard!</Text>
        <Text>Let's help you meet up your tasks.</Text>
      </View>

      <View style={styles.inputGroup}>
        <TextInput style={styles.input} placeholder="Enter your full name" />
        <TextInput style={styles.input} placeholder="Enter your e-mail" />
        <TextInput style={styles.input} placeholder="Enter your password" />
        <TextInput style={styles.input} placeholder="Confirm password" />
      </View>

      <StyledButton>
        <StyledButtonText>Register</StyledButtonText>
      </StyledButton>

      <Text style={styles.helperText}>
        Already have an account ?{' '}
        <Text
          onPress={() => navigation.navigate('SignIn')}
          style={styles.textMain}>
          Sign in
        </Text>{' '}
      </Text>
    </MainContainer>
  );
};

export default SignUp;

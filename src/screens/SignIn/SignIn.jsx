import { View, Text, TextInput, Image } from 'react-native'
import React from 'react'
import MainContainer from '../../components/MainContainer/MainContainer';
import Button from '../../components/StyledButton/StyledButton';
import styles from './styles';
import Ellipse from '../../components/Ellipse/Ellipse';

const SignIn = ({navigation}) => {
  return (
    <MainContainer>
      <Ellipse />

      <View style={styles.header}>
        <Text style={styles.h1}>Welcome Back!</Text>
        <Image source={require('../../assets/login.png')} style={styles.headerImg}/>
      </View>

      <View style={styles.inputGroup}>
        <TextInput style={styles.input} placeholder="Enter your e-mail"/>
        <TextInput style={styles.input} placeholder="Enter your password"/>
      </View>

      <Text style={[styles.textMain, styles.passwordText]}>Forget password?</Text>

      <Button title={"Log in"} />

      <Text style={styles.helperText}>Don't have an account ? <Text onPress={() => navigation.navigate('SignUp')} style={styles.textMain}>Sign up</Text> </Text>
    </MainContainer>
  )
}

export default SignIn
import {View, Text, TextInput, KeyboardAvoidingView} from 'react-native';
import React from 'react';
import MainContainer from '../../components/MainContainer/MainContainer';
import Button from '../../components/StyledButton/StyledButton';
import styles from './styles';
import Ellipse from '../../components/Ellipse/Ellipse';

const SignUp = ({navigation}) => {
  return (
    <MainContainer>
      <Ellipse />

      <View style={styles.header}>
        <Text style={styles.h1}>Welcome Onboard!</Text>
        <Text>Let's help you meet up your tasks.</Text>
      </View>

      <KeyboardAvoidingView behavior={Platform.OS == 'ios' ? 'padding' : 'height'} style={styles.inputGroup}>
        <TextInput style={styles.input} placeholder="Enter your full name" />
        <TextInput style={styles.input} placeholder="Enter your e-mail" />
        <TextInput style={styles.input} placeholder="Enter your password" />
        <TextInput style={styles.input} placeholder="Confirm password" />
      </KeyboardAvoidingView>

      <Button title="Register" />

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

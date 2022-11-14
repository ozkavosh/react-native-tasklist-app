import { View, Text, TextInput, Image } from 'react-native'
import React, { useReducer } from 'react'
import MainContainer from '../../components/MainContainer/MainContainer';
import Button from '../../components/StyledButton/StyledButton';
import styles from './styles';
import Ellipse from '../../components/Ellipse/Ellipse';
import SIGNIN_FIELDS from './signInFields';
import axios from 'axios';
import useForm from '../../hooks/useForm';
import Form from '../../components/Form/Form';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {showMessage} from 'react-native-flash-message';

const SignIn = ({navigation}) => {
  const [formState, handleInput, validateFields] = useForm(SIGNIN_FIELDS);

  const handleSubmit = async () => {
    try {
      const {email, password} = formState;
      const errors = validateFields(formState);

      if (errors.length)
        return showMessage({
          message: errors.join('\n\n'),
          type: 'warning',
        });

      const request = await axios.post('http://localhost:3001/user/login', {
        email,
        password,
      });

      const { token } = request.data;
      await AsyncStorage.setItem("token", token);

      showMessage({
        message: 'Sesión iniciada exitosamente',
        type: 'success',
      });

      navigation.navigate('Home');
    } catch (e) {
      showMessage({
        message: e?.response?.request?._response || 'Error inesperado',
        type: 'warning',
      });
    }
  };

  return (
    <MainContainer>
      <Ellipse />

      <View style={styles.header}>
        <Text style={styles.h1}>Welcome Back!</Text>
        <Image source={require('../../assets/login.png')} style={styles.headerImg}/>
      </View>

      <Form formStyle={styles.inputGroup} inputStyle={styles.input} formState={formState} handleInput={handleInput} />

      <Text style={[styles.textMain, styles.passwordText]}>Forget password?</Text>

      <Button onPress={handleSubmit} title={"Log in"} />

      <Text style={styles.helperText}>Don't have an account ? <Text onPress={() => navigation.navigate('SignUp')} style={styles.textMain}>Sign up</Text> </Text>
    </MainContainer>
  )
}

export default SignIn
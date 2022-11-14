import {View, Text} from 'react-native';
import React, { useEffect } from 'react';
import MainContainer from '../../components/MainContainer/MainContainer';
import Button from '../../components/StyledButton/StyledButton';
import styles from './styles';
import Ellipse from '../../components/Ellipse/Ellipse';
import axios from 'axios';
import {showMessage} from 'react-native-flash-message';
import SIGNUP_FIELDS from './signUpFields';
import useForm from '../../hooks/useForm';
import Form from '../../components/Form/Form';
import AsyncStorage from '@react-native-async-storage/async-storage';

const SignUp = ({navigation}) => {
  const [formState, handleInput, validateFields] = useForm(SIGNUP_FIELDS);

  const handleSubmit = async () => {
    try {
      const {email, name, password} = formState;
      const errors = validateFields(formState);

      if (errors.length)
        return showMessage({
          message: errors.join('\n\n'),
          type: 'warning',
        });

      const request = await axios.post('http://localhost:3001/user/register', {
        email,
        name,
        password,
      });

      const { token } = request.data;
      await AsyncStorage.setItem("token", token);

      showMessage({
        message: 'Cuenta creada exitosamente',
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
        <Text style={styles.h1}>Welcome Onboard!</Text>
        <Text>Let's help you meet up your tasks.</Text>
      </View>

      <Form
        formState={formState}
        handleInput={handleInput}
        formStyle={styles.inputGroup}
        inputStyle={styles.input}
      />
      <Button onPress={handleSubmit} title="Register" />

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

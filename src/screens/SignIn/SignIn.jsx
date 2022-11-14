import {View, Text, Image} from 'react-native';
import React from 'react';
import MainContainer from '../../components/MainContainer/MainContainer';
import Button from '../../components/StyledButton/StyledButton';
import styles from './styles';
import Ellipse from '../../components/Ellipse/Ellipse';
import SIGNIN_FIELDS from './signInFields';
import useForm from '../../hooks/useForm';
import Form from '../../components/Form/Form';
import handleSubmit from '../../utils/handleSubmit';

const SignIn = ({navigation}) => {
  const [formState, handleInput, validateFields, resetFields] = useForm(SIGNIN_FIELDS);

  return (
    <MainContainer>
      <Ellipse />

      <View style={styles.header}>
        <Text style={styles.h1}>Welcome Back!</Text>
        <Image
          source={require('../../assets/login.png')}
          style={styles.headerImg}
        />
      </View>

      <Form
        formStyle={styles.inputGroup}
        inputStyle={styles.input}
        formState={formState}
        handleInput={handleInput}
      />

      <Text style={[styles.textMain, styles.passwordText]}>
        Forget password?
      </Text>

      <Button
        onPress={() =>
          handleSubmit(
            navigation,
            formState,
            validateFields,
            resetFields,
            'http://localhost:3001/user/login',
            'Sesión iniciada con éxito',
          )
        }
        title={'Log in'}
      />

      <Text style={styles.helperText}>
        Don't have an account ?{' '}
        <Text
          onPress={() => navigation.navigate('SignUp')}
          style={styles.textMain}>
          Sign up
        </Text>{' '}
      </Text>
    </MainContainer>
  );
};

export default SignIn;

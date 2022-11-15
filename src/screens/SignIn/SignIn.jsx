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
import {useAuthContext} from '../../context/authContext';

const SignIn = ({navigation}) => {
  const [formState, handleInput, validateFields, resetFields] =
    useForm(SIGNIN_FIELDS);
  const {setToken} = useAuthContext();

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
          handleSubmit({
            formState,
            validateFields,
            resetFields,
            setToken,
            postUrl: 'http://localhost:3001/user/login',
          })
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

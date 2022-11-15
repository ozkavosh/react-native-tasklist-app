import {View, Text} from 'react-native';
import React from 'react';
import MainContainer from '../../components/MainContainer/MainContainer';
import Button from '../../components/StyledButton/StyledButton';
import styles from './styles';
import Ellipse from '../../components/Ellipse/Ellipse';
import SIGNUP_FIELDS from './signUpFields';
import useForm from '../../hooks/useForm';
import Form from '../../components/Form/Form';
import handleSubmit from '../../utils/handleSubmit';
import {useAuthContext} from '../../context/authContext';

const SignUp = ({navigation}) => {
  const [formState, handleInput, validateFields, resetFields] =
    useForm(SIGNUP_FIELDS);
  const {setToken} = useAuthContext();

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
      <Button
        onPress={() =>
          handleSubmit({
            formState,
            validateFields,
            resetFields,
            setToken,
            postUrl: 'http://localhost:3001/user/register',
          })
        }
        title="Register"
      />

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

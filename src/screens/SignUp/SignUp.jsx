import {View} from 'react-native';
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
import {H1, P, Span} from '../../components/Text/Text';

const SignUp = ({navigation}) => {
  const [formState, handleInput, validateFields, resetFields] =
    useForm(SIGNUP_FIELDS);
  const {setToken} = useAuthContext();

  return (
    <MainContainer>
      <Ellipse />

      <View style={styles.header}>
        <H1 mb={15}>Welcome Onboard!</H1>
        <P>Let's help you meet up your tasks.</P>
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
            postUrl: 'https://ozkavosh-todo-api.glitch.me/user/register',
          })
        }
        title="Register"
      />

      <P mt={15} center>
        Already have an account ?{' '}
        <Span bold primary onPress={() => navigation.navigate('SignIn')}>
          Sign in
        </Span>
      </P>
    </MainContainer>
  );
};

export default SignUp;

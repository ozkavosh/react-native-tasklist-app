import {View, Image} from 'react-native';
import React from 'react';
import MainContainer from '../../components/MainContainer/MainContainer';
import Button from '../../components/StyledButton/StyledButton';
import styles from './styles';
import Ellipse from '../../components/Ellipse/Ellipse';
import SIGNIN_FIELDS from './signInFields';
import useForm from '../../hooks/useForm';
import Form from '../../components/Form/Form';
import handleSubmit from '../../utils/handleAuthSubmit';
import {useAuthContext} from '../../context/authContext';
import {H1, P, Span} from '../../components/Text/Text';
import useTranslate from '../../hooks/useTranslate';

const SignIn = ({navigation}) => {
  const t = useTranslate();
  const [formState, handleInput, validateFields, resetFields] =
    useForm(SIGNIN_FIELDS);
  const {setToken} = useAuthContext();

  return (
    <MainContainer>
      <Ellipse />

      <View style={styles.header}>
        <H1 mb={15}>{t('signIn.welcomeMessage')}</H1>
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

      <P mt={35} mb={45} center primary>
        {t('signIn.passwordMessage')}
      </P>

      <Button
        onPress={() =>
          handleSubmit({
            formState,
            validateFields,
            resetFields,
            setToken,
            type: 'signIn',
          })
        }
        title={t('signIn.buttonTitle')}
      />

      <P mt={15} center>
        {t('signIn.signUpText')}{' '}
        <Span primary bold onPress={() => navigation.replace('SignUp')}>
          {t('signIn.signUpSpanText')}
        </Span>
      </P>
    </MainContainer>
  );
};

export default SignIn;

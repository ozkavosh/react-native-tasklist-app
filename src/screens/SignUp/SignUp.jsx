import {View} from 'react-native';
import React from 'react';
import MainContainer from '../../components/MainContainer/MainContainer';
import Button from '../../components/StyledButton/StyledButton';
import styles from './styles';
import Ellipse from '../../components/Ellipse/Ellipse';
import SIGNUP_FIELDS from './signUpFields';
import useForm from '../../hooks/useForm';
import Form from '../../components/Form/Form';
import handleSubmit from '../../utils/handleAuthSubmit';
import {useAuthContext} from '../../context/authContext';
import {H1, P, Span} from '../../components/Text/Text';
import t from '../../utils/translate';

const SignUp = ({navigation}) => {
  const [formState, handleInput, validateFields, resetFields] =
    useForm(SIGNUP_FIELDS);
  const {setToken} = useAuthContext();

  return (
    <MainContainer>
      <Ellipse />

      <View style={styles.header}>
        <H1 mb={15}>{t('signUp.welcomeMessage')}</H1>
        <P>{t('signUp.subtitleMessage')}</P>
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
            type: 'signUp',
          })
        }
        title={t('signUp.buttonTitle')}
      />

      <P mt={15} center>
        {t("signUp.signInText")}{' '}
        <Span bold primary onPress={() => navigation.replace('SignIn')}>
        {t("signUp.signInSpanText")}
        </Span>
      </P>
    </MainContainer>
  );
};

export default SignUp;

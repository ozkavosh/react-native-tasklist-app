import {KeyboardAvoidingView, TextInput} from 'react-native';
import React from 'react';
import t from '../../utils/translate';

const Form = ({formStyle, inputStyle, formState, handleInput}) => {
  return (
    <KeyboardAvoidingView
      behavior={Platform.OS == 'ios' ? 'padding' : 'height'}
      style={formStyle}>
      {Object.keys(formState).map(field => (
        <TextInput
          key={field}
          value={formState[field]}
          onChangeText={value => handleInput(field, value)}
          style={inputStyle}
          secureTextEntry={field === t('signUpFields.password') || field === t('signUpFields.passwordConfirm')}
          placeholder={field === t('signUpFields.passwordConfirm') ? t('signUp.placeholderPasswordConfirm') : t('signUp.placeholderDefault')(field)}
        />
      ))}
    </KeyboardAvoidingView>
  );
};

export default Form;

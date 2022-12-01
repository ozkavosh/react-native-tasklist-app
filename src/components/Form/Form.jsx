import {KeyboardAvoidingView, TextInput} from 'react-native';
import React from 'react';
import useTranslate from '../../hooks/useTranslate';

const Form = ({formStyle, inputStyle, formState, handleInput}) => {
  const t = useTranslate();

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
          secureTextEntry={
            field === 'password' ||
            field === 'passwordConfirm'
          }
          placeholder={
            field === 'passwordConfirm'
              ? t('form.placeholderPasswordConfirm')
              : t('form.placeholderDefault')(t(`formFields.${field}`))
          }
        />
      ))}
    </KeyboardAvoidingView>
  );
};

export default Form;

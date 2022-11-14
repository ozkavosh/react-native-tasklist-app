import {KeyboardAvoidingView, TextInput} from 'react-native';
import React from 'react';

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
          secureTextEntry={field === "password" || field === "passwordConfirm"}
          placeholder={field === "passwordConfirm" ? "Confirm your password" : `Enter your ${field}`}
        />
      ))}
    </KeyboardAvoidingView>
  );
};

export default Form;

import {useReducer} from 'react';
import t from '../utils/translate';

const useForm = fields => {
  const [formState, formDispatch] = useReducer((state, action) => {
    switch (action.type) {
      case 'RESET_FIELDS':
        return fields;
      case 'SET_FIELD':
        return {...state, [action.payload.field]: action.payload.value};
      default:
        return state;
    }
  }, fields);

  const handleInput = (field, value) => {
    formDispatch({type: 'SET_FIELD', payload: {field, value}});
  };

  const resetFields = () => {
    formDispatch({type: 'RESET_FIELDS'});
  }

  const validateFields = (fields) => {
    const errors = [];
    
    for(k in fields){
        if(!fields[k]){
            errors.push(`Field ${k} must not be empty`);
        }
    }

    if(fields[t('signUpFields.name')] && !/^[a-zA-Z]+( [a-zA-Z]+)*$/.test(fields[t('signUpFields.name')])){
        errors.push("Name may only contain letters and spaces between them");
    }

    if(fields[t('signUpFields.email')] && !/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/.test(fields[t('signUpFields.email')])){
        errors.push("Email must be a valid email address");
    }

    if(fields[t('signUpFields.password')] && fields[t('signUpFields.password')].length < 7){
        errors.push("Password must be at least 7 characters");
    }

    if(fields[t('signUpFields.passwordConfirm')] && fields[t('signUpFields.passwordConfirm')] !== fields[t('signUpFields.password')]){
        errors.push("Password must match");
    }

    return errors;
  }

  return [formState, handleInput, validateFields, resetFields];
};

export default useForm;

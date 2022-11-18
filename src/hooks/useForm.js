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
            errors.push(t('formValidations.emptyField')(k));
        }
    }

    if(fields[t('formFields.name')] && !/^[a-zA-Z]+( [a-zA-Z]+)*$/.test(fields[t('formFields.name')])){
        errors.push(t('formValidations.nameFormat'));
    }

    if(fields[t('formFields.email')] && !/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/.test(fields[t('formFields.email')])){
        errors.push(t('formValidations.emailFormat'));
    }

    if(fields[t('formFields.password')] && fields[t('formFields.password')].length < 7){
        errors.push(t('formValidations.passwordLength'));
    }

    if(fields[t('formFields.passwordConfirm')] && fields[t('formFields.passwordConfirm')] !== fields[t('formFields.password')]){
        errors.push(t('formValidations.passwordMatch'));
    }

    return errors;
  }

  return [formState, handleInput, validateFields, resetFields];
};

export default useForm;

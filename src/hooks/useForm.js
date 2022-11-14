import {useReducer} from 'react';

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

    if(fields.name && !/^[a-zA-Z]+( [a-zA-Z]+)*$/.test(fields.name)){
        errors.push("Name may only contain letters and spaces between them");
    }

    if(fields.email && !/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/.test(fields.email)){
        errors.push("Email must be a valid email address");
    }

    if(fields.password && fields.password.length < 7){
        errors.push("Password must be at least 7 characters");
    }

    if(fields.passwordConfirm && fields.passwordConfirm !== fields.password){
        errors.push("Password must match");
    }

    return errors;
  }

  return [formState, handleInput, validateFields, resetFields];
};

export default useForm;

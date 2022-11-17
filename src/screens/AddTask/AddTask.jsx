import {View, Text} from 'react-native';
import MainContainer from '../../components/MainContainer/MainContainer';
import Ellipse from '../../components/Ellipse/Ellipse';
import {H1, P} from '../../components/Text/Text';
import Form from '../../components/Form/Form';
import useForm from '../../hooks/useForm';
import React from 'react';
import Button from '../../components/StyledButton/StyledButton';
import axios from 'axios';
import t from '../../utils/translate';
import {showMessage} from 'react-native-flash-message';
import {useAuthContext} from '../../context/authContext';

const AddTask = () => {
  const [formState, handleInput] = useForm({description: ''});
  const {auth} = useAuthContext();

  const handleSubmit = async () => {
    try {
      const {description} = formState;

      if (!description)
        return showMessage({
          message: 'La tarea no puede quedar vacía',
          type: 'warning',
        });

      const request = await axios.post(
        'https://ozkavosh-todo-api.glitch.me/task',
        {description},
        {headers: {Authorization: 'Bearer ' + auth.token}},
      );

      console.log(request.data);

      showMessage({
        message: 'Tarea agregada con éxito',
        type: 'success',
      });
    } catch (e) {
      console.log(e);
      showMessage({
        message: e?.response?.request?._response || 'Error inesperado',
        type: 'warning',
      });
    }
  };

  return (
    <MainContainer>
      <Ellipse />

      <Form
        formState={formState}
        handleInput={handleInput}
        formStyle={{marginTop: 265}}
        inputStyle={{
          borderRadius: 30,
          height: 50,
          color: 'black',
          backgroundColor: 'white',
          marginBottom: 20,
          paddingHorizontal: 35,
        }}
      />

      <Button onPress={handleSubmit} title={t('addTask.addTaskBtnTitle')} />
    </MainContainer>
  );
};

export default AddTask;

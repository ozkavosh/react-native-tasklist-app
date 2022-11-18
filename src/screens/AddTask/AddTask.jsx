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
import ADD_TASK_FIELDS from './addTaskFields';
import { useDispatch } from 'react-redux';
import { show, hide } from '../../features/slices/loaderSlice';
import styles from './styles';

const AddTask = () => {
  const [formState, handleInput, validateFields, resetFields] = useForm(ADD_TASK_FIELDS);
  const dispatch = useDispatch();
  const {auth} = useAuthContext();

  const handleSubmit = async () => {
    try {
      dispatch(show());
      const {[t('formFields.description')]: description} = formState;
      const errors = validateFields(formState);

      if (errors.length)
        return showMessage({
          message: errors.join('\n\n'),
          type: 'warning',
        });

      const request = await axios.post(
        'https://ozkavosh-todo-api.glitch.me/task',
        {description},
        {headers: {Authorization: 'Bearer ' + auth.token}},
      );

      resetFields();

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
    } finally {
      dispatch(hide());
    }
  };

  return (
    <MainContainer>
      <Ellipse />

      <H1 mt={325} mb={15}>{t('addTask.addTaskTitle')}</H1>
      <Form
        formState={formState}
        handleInput={handleInput}
        inputStyle={styles.input}
      />

      <Button style={{ marginTop: 'auto' }} onPress={handleSubmit} title={t('addTask.addTaskBtnTitle')} />
    </MainContainer>
  );
};

export default AddTask;

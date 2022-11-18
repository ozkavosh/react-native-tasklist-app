import axios from 'axios';
import store from '../features/store';
import { show, hide } from '../features/slices/loaderSlice';
import t from './translate';
import {showMessage} from 'react-native-flash-message';

const handleSubmit = async ({ formState, token, validateFields, resetFields }) => {
    try {
      store.dispatch(show());
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
        {headers: {Authorization: 'Bearer ' + token}},
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
      store.dispatch(hide());
    }
  };

  export default handleSubmit;
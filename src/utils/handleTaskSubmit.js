import store from '../features/store';
import { show, hide } from '../features/slices/loaderSlice';
import t from './translate';
import {showMessage} from 'react-native-flash-message';
import { postTask } from './api';

const handleSubmit = async ({ formState, validateFields, resetFields, goBack }) => {
    try {
      store.dispatch(show());
      const {[t('formFields.description')]: description} = formState;
      const errors = validateFields(formState);

      if (errors.length)
        return showMessage({
          message: errors.join('\n\n'),
          type: 'warning',
        });

      const request = await postTask({ description });

      resetFields();

      showMessage({
        message: t('displayMessages.taskCreationSuccessMessage'),
        type: 'success',
      });

      goBack();
    } catch (e) {
      console.log(e);
      showMessage({
        message: e?.response?.request?._response || t('displayMessages.defaultErrorMessage'),
        type: 'warning',
      });
    } finally {
      store.dispatch(hide());
    }
  };

  export default handleSubmit;
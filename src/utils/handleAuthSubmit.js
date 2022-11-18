import {showMessage} from 'react-native-flash-message';
import store from '../features/store';
import {show, hide} from '../features/slices/loaderSlice';
import t from './translate';
import axios from 'axios';

const handleSubmit = async ({
  formState,
  validateFields,
  resetFields,
  postUrl,
  setToken,
}) => {
  try {
    store.dispatch(show());
    const {
      [t('formFields.email')]: email,
      [t('formFields.password')]: password,
      [t('formFields.name')]: name,
    } = formState;
    const errors = validateFields(formState);

    if (errors.length)
      return showMessage({
        message: errors.join('\n\n'),
        type: 'warning',
      });

    const request = await axios.post(postUrl, {
      email,
      password,
      name,
    });

    resetFields();

    const {token} = request.data;
    setToken(token);
  } catch (e) {
    console.log(e);
    showMessage({
      message:
        e?.response?.request?._response ||
        t('displayMessages.defaultErrorMessage'),
      type: 'warning',
    });
  } finally {
    store.dispatch(hide());
  }
};

export default handleSubmit;

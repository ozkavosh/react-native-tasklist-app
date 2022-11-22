import {showMessage} from 'react-native-flash-message';
import store from '../features/store';
import {show, hide} from '../features/slices/loaderSlice';
import t from './translate';
import {postSignIn, postSignUp} from './api';

const handleSubmit = async ({
  formState,
  validateFields,
  resetFields,
  setToken,
  type,
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

    const request =
      type === 'signUp'
        ? await postSignUp({name, email, password})
        : await postSignIn({email, password});

    resetFields();

    const {token} = request.data;
    setToken(token);
  } catch (e) {
    showMessage({
      message:
        e.message ||
        t('displayMessages.defaultErrorMessage'),
      type: 'warning',
    });
  } finally {
    store.dispatch(hide());
  }
};

export default handleSubmit;

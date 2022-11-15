import {showMessage} from 'react-native-flash-message';
import axios from 'axios';

const handleSubmit = async ({
  formState,
  validateFields,
  resetFields,
  postUrl,
  setToken,
}) => {
  try {
    const {email, password, name} = formState;
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
      message: e?.response?.request?._response || 'Error inesperado',
      type: 'warning',
    });
  }
};

export default handleSubmit;

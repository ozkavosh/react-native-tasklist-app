import {showMessage} from 'react-native-flash-message';
import AsyncStorage from '@react-native-async-storage/async-storage';
import axios from 'axios';

const handleSubmit = async (
  navigation,
  formState,
  validateFields,
  postUrl,
  successMessage,
) => {
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
      name
    });

    const {token} = request.data;
    await AsyncStorage.setItem('token', token);

    showMessage({
      message: successMessage,
      type: 'success',
    });

    navigation.navigate('Home');
  } catch (e) {
    showMessage({
      message: e?.response?.request?._response || 'Error inesperado',
      type: 'warning',
    });
  }
};

export default handleSubmit;

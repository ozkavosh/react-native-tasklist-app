import {showMessage} from 'react-native-flash-message';

export default ({title, message, type}) => showMessage({
    message: title,
    description: message,
    type,
    icon: 'auto',
    statusBarHeight: 30
});

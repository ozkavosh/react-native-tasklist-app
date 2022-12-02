import {showMessage} from 'react-native-flash-message';
import colors from './colors';

const messageColors = {
    warning: '#ee6363',
    success: colors.tertiary,
    error: 'red'
}

export default ({title, message, type}) => showMessage({
    message: title,
    description: message,
    type,
    icon: 'auto',
    statusBarHeight: 30,
    backgroundColor: messageColors[type]
});

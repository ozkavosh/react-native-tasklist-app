import {showMessage} from 'react-native-flash-message';
import colors from './colors';

const messageColors = {
    warning: colors.primary,
    success: colors.tertiary,
    error: colors.secondary
}

export default ({title, message, type}) => showMessage({
    message: title,
    description: message,
    type,
    icon: 'auto',
    statusBarHeight: 30,
    backgroundColor: messageColors[type]
});

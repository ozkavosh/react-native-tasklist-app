import {StyleSheet} from 'react-native';
import colors from '../../utils/colors';

const styles = StyleSheet.create({
  input: {
    borderRadius: 30,
    height: 50,
    color: colors.primary,
    backgroundColor: colors.secondary,
    marginBottom: 20,
    paddingHorizontal: 35,
  },
  inputGroup: {
    justifyContent: 'flex-end',
  }
});

export default styles;

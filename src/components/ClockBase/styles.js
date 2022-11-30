import {StyleSheet} from 'react-native';
import colors from '../../utils/colors';

const styles = StyleSheet.create({
  clockBase: {
    width: 134,
    height: 134,
    backgroundColor: colors.secondary,
    borderRadius: 134 / 2,
    elevation: 7,
  },
  clockNotch: {
    backgroundColor: colors.primary,
    position: 'absolute',
    left: '46%',
    top: '45%',
    width: 14,
    height: 14,
    borderRadius: 14 / 2,
    elevation: 4,
  },
});

export default styles;

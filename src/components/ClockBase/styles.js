import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  clockBase: {
    width: 134,
    height: 134,
    backgroundColor: '#dcf9fd',
    borderRadius: 134 / 2,
    elevation: 7,
  },
  clockNotch: {
    backgroundColor: '#c9dce3',
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

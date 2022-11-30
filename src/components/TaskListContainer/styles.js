import {StyleSheet} from 'react-native';
import colors from '../../utils/colors';

const styles = StyleSheet.create({
  taskListContainer: {
    backgroundColor: colors.secondary,
    flex: 1,
    paddingHorizontal: 25,
    paddingVertical: 15,
    elevation: 6,
    borderRadius: 15,
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.5,
    shadowRadius: 2,
  },
});

export default styles;

import {StyleSheet} from 'react-native';
import colors from '../../utils/colors';

const styles = StyleSheet.create({
  avatarPlaceHolder: {
    width: 110,
    height: 110,
    backgroundColor: colors.primary,
    borderRadius: 60,
  },
  avatarImg: {
    width: 40,
    height: 40,
    borderRadius: 60,
    borderWidth: 1,
    borderColor: colors.primary,
  },
  userAvatar: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  userStatusBar: {
    alignItems: 'center',
    justifyContent: 'space-between',
    flexDirection: 'row',
    marginBottom: 10,
    paddingTop: 50,
    zIndex: 1,
  },
  menuBtn: {
  },
  welcomeText: {
    color: colors.primary
  }
});

export default styles;

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
    width: 110,
    height: 110,
    borderRadius: 60,
    borderWidth: 3,
    borderColor: colors.primary,
  },
  userAvatar: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  userStatusBar: {
    left: '-6%',
    width: '112%',
    backgroundColor: colors.background,
    alignItems: 'center',
    marginBottom: 10,
    paddingTop: 80,
    zIndex: -1,
  },
  logoutBtn: {
    position: 'absolute',
    backgroundColor: colors.primary,
    paddingHorizontal: 5,
    paddingVertical: 5,
    borderRadius: 30,
    right: 0,
    bottom: 0,
  },
  welcomeText: {
    color: colors.primary
  }
});

export default styles;

import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  avatarPlaceHolder: {
    width: 110,
    height: 110,
    backgroundColor: 'white',
    borderRadius: 60,
  },
  avatarImg: {
    borderRadius: 60,
    borderWidth: 3,
    borderColor: 'white',
  },
  userAvatar: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  userStatusBar: {
    left: "-6%",
    backgroundColor: '#50C2C9',
    width: '112%',
    alignItems: 'center',
    marginBottom: 20,
    paddingTop: 100,
    zIndex: -1
  },
})

export default styles;
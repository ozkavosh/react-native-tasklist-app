import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  avatarPlaceHolder: {
    width: 110,
    height: 110,
    backgroundColor: 'white',
    borderRadius: 60,
  },
  avatarImg: {
    width: 110,
    height: 110,
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
  logoutBtn: {
    position: 'absolute',
    backgroundColor: 'white',
    paddingHorizontal: 10,
    paddingVertical: 5,
    borderRadius: 20,
    right: 0,
    bottom: 0
  }
})

export default styles;
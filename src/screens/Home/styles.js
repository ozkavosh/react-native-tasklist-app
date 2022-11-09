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
    marginBottom: '10%',
    paddingTop: 135,
    zIndex: -1
  },
  backgroundImg: {
    position: 'absolute',
    top: -105,
    left: -125
  },
  h1: {
    fontWeight: 'bold',
    color: 'white',
    fontSize: 19,
    marginVertical: 30
  },
  textMain: {
    color: "#50C2C9",
    fontWeight: 'bold',
  },
  passwordText: {
    marginTop: 35,
    marginBottom: 45,
    width: "100%",
    textAlign: "center"
  },
  helperText: {
    marginTop: 15,
    width: "100%",
    textAlign: "center"
  },
  input: {
    borderRadius: 30,
    height: 50,
    color: 'black',
    backgroundColor: 'white',
    marginBottom: 20,
    paddingHorizontal: 35,
  }
})

  export default styles;
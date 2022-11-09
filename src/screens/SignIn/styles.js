import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  headerImg: {
    width: 165,
    height: 165
  },
  backgroundImg: {
    position: 'absolute',
    top: -105,
    left: -125
  },
  h1: {
    fontWeight: 'bold',
    color: 'black',
    fontSize: 19,
    marginBottom: 15
  },
  header: {
    alignItems: 'center',
    marginTop: 165,
    marginBottom: 35
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
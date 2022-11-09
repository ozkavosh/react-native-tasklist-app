import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
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
      marginBottom: 75
    },
    textMain: {
      color: "#50C2C9",
      fontWeight: 'bold',
    },
    helperText: {
      marginTop: 15,
      width: "100%",
      textAlign: "center"
    },
    inputGroup: {
      marginBottom: 55
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
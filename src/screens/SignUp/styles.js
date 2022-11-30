import { StyleSheet } from "react-native";
import colors from "../../utils/colors";

const styles = StyleSheet.create({
    header: {
      alignItems: 'center',
      marginTop: 165,
      marginBottom: 75
    },
    inputGroup: {
      marginBottom: 55,
      justifyContent: "flex-end"
    },
    input: {
      borderRadius: 30,
      height: 50,
      color: colors.primary,
      backgroundColor: colors.secondary,
      marginBottom: 20,
      paddingHorizontal: 35,
    }
  })

  export default styles;
import { Platform, StatusBar, StyleSheet } from "react-native";
import { RFValue as rf } from "react-native-responsive-fontsize";
import { getPercent } from "../../middleware";
import { light } from "../../scheme";

//Styles Styles starts here
export const styles = ({ width, height }) =>
  StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: light?.background,
    },
    labletext: {
      fontFamily: "Medium",
      fontSize: rf(16),
      color: light?.labletext,
      paddingLeft: getPercent(5, width),
      marginVertical: 15,
    },
    policytext: {
      fontFamily: "Regular",
      fontSize: rf(14),
      color: light?.fieldbody,
      textAlign: "justify",
      paddingHorizontal: getPercent(5, width),
      marginTop: getPercent(3, height),
    },
    btnwraper: {
      alignItems: "center",
      marginVertical: getPercent(2, height),
    },
  });

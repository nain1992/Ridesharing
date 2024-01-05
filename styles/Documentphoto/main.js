import { Platform, StatusBar, StyleSheet } from "react-native";
import { RFValue as rf } from "react-native-responsive-fontsize";
import { getPercent } from "../../middleware";
import { light } from "../../scheme";

//Styles Styles starts here
export const styles = ({ width, height }) =>
  StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: "#000000",
    },
    btnwrapper: {
      flex: 1,
      bottom: getPercent(5, height),
      justifyContent: "flex-end",
      alignSelf: "center",
      zIndex: 999,
    },
  });

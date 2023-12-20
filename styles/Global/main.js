import { Platform, StatusBar, StyleSheet } from "react-native";
import { RFValue as rf } from "react-native-responsive-fontsize";
import { getPercent } from "../../middleware";
import { light } from "../../scheme";

//standardButton Styles starts here
export const standardButtonStyles = ({ width, height }) =>
  StyleSheet.create({
    container: {
      height: getPercent(7, height),
      width: getPercent(90, width),
      backgroundColor: light.btnbody,
      borderRadius: 8,
      shadowColor: "#000",
      shadowOffset: {
        width: 5,
        height: 6,
      },
      shadowOpacity: 2,
      shadowRadius: 1,
      elevation: 6,
      alignItems: "center",
      justifyContent: "center",
    },
    text: {
      fontSize: rf(15),
      fontFamily: "Medium",
      color: light.BtnText,
    },
  });

//loader Styles starts here
export const loaderStyles = ({ width, height }) =>
  StyleSheet.create({
    container: {
      width: width,
      height: height,
      alignItems: "center",
      justifyContent: "center",
      backgroundColor: "#fff",
      position: "absolute",
      left: 0,
      zIndex: 9999999,
      top: getPercent(20, height),
    },
  });

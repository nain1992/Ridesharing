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
    lablewrapper: {
      paddingHorizontal: getPercent(5, height),
    },
    selecttext: {
      fontFamily: "SemiBold",
      fontSize: rf(18),
      color: light?.LableText,
    },
    results: {
      fontFamily: "Regular",
      fontSize: rf(13),
      color: light?.fieldtext,
    },
  });

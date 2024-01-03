import { Platform, StatusBar, StyleSheet } from "react-native";
import { RFValue as rf } from "react-native-responsive-fontsize";
import { getPercent } from "../../middleware";
import { light } from "../../scheme";

//Styles Styles starts here
export const styles = ({ width, height }) =>
  StyleSheet.create({
    container: {
      height: getPercent(9, height),
      width: getPercent(90, width),
      borderWidth: 1,
      borderColor: light?.btnbody,
      borderRadius: 10,
      alignSelf: "center",
      flexDirection: "row",
      alignItems: "center",
      paddingHorizontal: 10,
      justifyContent: "space-between",
      marginVertical: 5,
    },
    namewrapper: {},
    nametext: {
      fontFamily: "SemiBold",
      fontSize: rf(12),
      color: light?.standardtext,
    },
    mustandtext: {
      fontFamily: "SemiBold",
      fontSize: rf(12),
      color: light?.fieldtext,
    },
    timetext: {
      fontFamily: "SemiBold",
      fontSize: rf(12),
      color: light?.standardtext,
    },
  });

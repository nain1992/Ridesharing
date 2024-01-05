import { Platform, StatusBar, StyleSheet } from "react-native";
import { RFValue as rf } from "react-native-responsive-fontsize";
import { getPercent } from "../../middleware";
import { light } from "../../scheme";

//Styles Styles starts here
export const styles = ({ width, height }) =>
  StyleSheet.create({
    container: {
      paddingHorizontal: getPercent(5, width),
    },
    btnwrapper: {
      alignItems: "center",
      marginVertical: 10,
    },
    commentbody: {
      height: getPercent(18, height),
      width: getPercent(90, width),
      borderRadius: 10,
      borderWidth: 1,
      borderColor: light?.fieldtext,

      alignSelf: "center",
      marginVertical: 10,
    },
    input: {
      width: "100%",
      fontFamily: "Regular",
      fontSize: rf(12),
      color: light?.standardtext,
    },

    pikeropener: {
      height: getPercent(7, height),
      width: getPercent(30, width),
      borderRadius: 10,
      padding: 10,
      marginVertical: 5,
      flexDirection: "row",
      justifyContent: "space-between",
    },
    pickerdropdown: {
      height: getPercent(20, height),
      width: getPercent(30, width),
      left: 15,
      borderRadius: 10,
      backgroundColor: light?.background,
      padding: 10,
      position: "absolute",
      top: getPercent(10, height),
      zIndex: 9999,
      shadowColor: "#000",
      shadowOffset: {
        width: 0,
        height: 2,
      },
      shadowOpacity: 0.25,
      shadowRadius: 3.84,

      elevation: 5,
    },
    inputstyles: {
      fontFamily: "Regular",
      fontSize: rf(13),
      color: light?.standardtext,
      marginVertical: 5,
    },
    titletext: {
      fontFamily: "Regular",
      fontSize: rf(13),
      color: light?.standardtext,
    },
  });

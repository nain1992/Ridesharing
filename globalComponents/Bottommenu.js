import { useEffect, useState } from "react";
import {
  View,
  useWindowDimensions,
  Image,
  TouchableOpacity,
} from "react-native";
import { connect } from "react-redux";
import { Bottommenustyles } from "../styles/Global/main";

const Bottommenu = (props) => {
  let { active } = props;

  let { width, height } = useWindowDimensions();
  let styles = Bottommenustyles({ width, height });

  let icons = [
    {
      image:
        active === "Home"
          ? require("../assets/bottommenu/1.png")
          : require("../assets/bottommenu/5.png"),
      onPress: () => props?.navigation?.navigate("Home"),
    },
    {
      image:
        active === "History"
          ? require("../assets/bottommenu/6.png")
          : require("../assets/bottommenu/2.png"),
      onPress: () => props?.navigation?.navigate("History"),
    },
    {
      image:
        active === "Home"
          ? require("../assets/bottommenu/3.png")
          : require("../assets/bottommenu/7.png"),
      onPress: () => props?.navigation?.navigate(""),
    },
    {
      image:
        active === "Home"
          ? require("../assets/bottommenu/4.png")
          : require("../assets/bottommenu/8.png"),
      onPress: () => props?.navigation?.navigate(""),
    },
  ];

  return (
    <View style={styles.container}>
      {icons?.map((item, index) => {
        return (
          <TouchableOpacity
            key={index}
            onPress={item?.onPress}
            style={styles.iconbody}
          >
            <Image
              source={item?.image}
              style={{ height: "100%", width: "100%" }}
              resizeMode="contain"
            />
          </TouchableOpacity>
        );
      })}
    </View>
  );
};

const mapStateToProps = (state) => ({
  errors: state.errors.errors,
});
export default connect(mapStateToProps, {})(Bottommenu);

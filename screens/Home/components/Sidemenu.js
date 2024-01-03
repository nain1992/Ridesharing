import { useEffect, useState } from "react";
import {
  Text,
  View,
  useWindowDimensions,
  Image,
  TouchableOpacity,
  ScrollView,
  Modal,
} from "react-native";
import { connect } from "react-redux";
import { styles as _styles } from "../../../styles/Home/Sidemenu";
import { Ionicons } from "@expo/vector-icons";
import { getPercent } from "../../../middleware";
import { light } from "../../../scheme";

const Sidemenu = (props) => {
  let { onBackPress } = props;

  let { width, height } = useWindowDimensions();
  let styles = _styles({ width, height });
  let options = [
    {
      icon: require("../../../assets/sidemenu/1.png"),
      title: "Settings",
    },
    {
      icon: require("../../../assets/sidemenu/2.png"),
      title: "Edit profile",
    },
    {
      icon: require("../../../assets/sidemenu/3.png"),
      title: "About Us",
    },
    {
      icon: require("../../../assets/sidemenu/4.png"),
      title: "Help and Support",
    },
    {
      icon: require("../../../assets/sidemenu/5.png"),
      title: "Notification Settings",
    },
    {
      icon: require("../../../assets/sidemenu/6.png"),
      title: "Contact & FAQ",
    },
    {
      icon: require("../../../assets/sidemenu/7.png"),
      title: "Logout",
    },
  ];
  return (
    <Modal transparent animationType="fade">
      <View style={{ flex: 1, backgroundColor: "#26262629" }}></View>
      <View style={styles.container}>
        <TouchableOpacity onPress={onBackPress} style={styles.backiconwrapper}>
          <Ionicons
            name="chevron-back"
            size={getPercent(3, height)}
            color={light?.LableText}
          />
          <Text style={styles.backtext}>Back</Text>
        </TouchableOpacity>
        <View style={styles.profilewrapper}>
          <View style={styles.framebody}>
            <Image
              source={require("../../../assets/images/user.png")}
              style={{ height: "100%", width: "100%" }}
              resizeMode="contain"
            />
          </View>
          <View>
            <Text style={styles.nametext}>Nate Samson</Text>
            <Text style={styles.emailtext}>nate@email.con</Text>
          </View>
        </View>
        {options?.map((item, index) => {
          return (
            <TouchableOpacity key={index} style={styles.optionswrapper}>
              <View style={styles.iconbody}>
                <Image
                  source={item?.icon}
                  style={{ height: "100%", width: "100%" }}
                  resizeMode="contain"
                />
              </View>

              <Text style={styles.optionstext}>{item?.title}</Text>
            </TouchableOpacity>
          );
        })}
      </View>
    </Modal>
  );
};

const mapStateToProps = (state) => ({
  errors: state.errors.errors,
});
export default connect(mapStateToProps, {})(Sidemenu);

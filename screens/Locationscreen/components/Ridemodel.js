import { useEffect, useState } from "react";
import {
  Text,
  View,
  useWindowDimensions,
  Image,
  TouchableOpacity,
  ScrollView,
  Modal,
  TextInput,
} from "react-native";
import { connect } from "react-redux";
import { styles as _styles } from "../../../styles/Locationscreen/Ridermodel";
import { AntDesign } from "@expo/vector-icons";
import { light } from "../../../scheme";
import Globalicons from "../../../globalComponents/Globalicons";
import StandardButton from "../../../globalComponents/StandardButton";

const Selectaddressmodel = (props) => {
  let { onPress, onclosepress } = props;

  let { width, height } = useWindowDimensions();
  let styles = _styles({ width, height });

  let recent = [
    {
      icon: require("../../../assets/icons/11.png"),
      lable: "Office",
      address: "2972 Westheimer Rd. Santa Ana, Illinois 85486",
      km: "2.7 km",
    },
    {
      icon: require("../../../assets/icons/11.png"),
      lable: "Office",
      address: "2972 Westheimer Rd. Santa Ana, Illinois 85486",
      km: "2.7 km",
    },
    {
      icon: require("../../../assets/icons/11.png"),
      lable: "Office",
      address: "2972 Westheimer Rd. Santa Ana, Illinois 85486",
      km: "2.7 km",
    },
    {
      icon: require("../../../assets/icons/11.png"),
      lable: "Office",
      address: "2972 Westheimer Rd. Santa Ana, Illinois 85486",
      km: "2.7 km",
    },
    {
      icon: require("../../../assets/icons/11.png"),
      lable: "Office",
      address: "2972 Westheimer Rd. Santa Ana, Illinois 85486",
      km: "2.7 km",
    },
  ];
  return (
    <Modal transparent animationType="slide">
      <View style={{ flex: 1, backgroundColor: "#00000aaa" }}></View>
      <View style={styles.container}>
        <TouchableOpacity onPress={onclosepress} style={styles.closeiconbody}>
          <AntDesign name="close" size={20} color={light?.standardtext} />
        </TouchableOpacity>
        <View style={styles.pickuplocationbody}>
          <Globalicons image={require("../../../assets/icons/pick.png")} />
          <TextInput
            placeholder="From"
            placeholderTextColor={light?.fieldbody}
            style={styles.inputstyles}
            multiline
          />
        </View>
        <View style={styles.pickuplocationbody}>
          <Globalicons image={require("../../../assets/icons/drop.png")} />
          <TextInput
            placeholder="To"
            placeholderTextColor={light?.fieldbody}
            style={styles.inputstyles}
            multiline
          />
        </View>
        <Text style={styles.recenttext}>Recent Search</Text>
        <ScrollView showsVerticalScrollIndicator={false}>
          {recent?.map((item, index) => {
            return (
              <View key={index} style={styles.recentbody}>
                <Globalicons image={item?.icon} />
                <View style={styles.textbody}>
                  <Text style={styles.recentlocationstext}>{item?.lable}</Text>
                  <Text style={styles.recentaddresstext}>{item?.address}</Text>
                </View>
                <Text style={styles.kmtext}>{item?.km}</Text>
              </View>
            );
          })}
          <View style={styles.btnwrappr}>
            <StandardButton title={"Confirm Location"} />
          </View>
        </ScrollView>
      </View>
    </Modal>
  );
};

const mapStateToProps = (state) => ({
  errors: state.errors.errors,
});
export default connect(mapStateToProps, {})(Selectaddressmodel);

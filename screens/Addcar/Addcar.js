import { useEffect, useState } from "react";
import {
  Text,
  View,
  useWindowDimensions,
  Image,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import { connect } from "react-redux";
import { styles as _styles } from "../../styles/Addcar/main";
import Notificationsheader from "../Notifications/components/Notificationsheader";
import Cardetailspicker from "./components/Cardetailspicker";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";

const Addcar = (props) => {
  let {} = props;

  let { width, height } = useWindowDimensions();
  let styles = _styles({ width, height });

  return (
    <View style={styles.container}>
      <Notificationsheader title={"Add Car"} navigation={props?.navigation} />
      <KeyboardAwareScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.profilepicwrapper}>
          <View style={styles.framewrapper}></View>
          <TouchableOpacity style={styles.uploadiconbody}>
            <Image
              source={require("../../assets/icons/edit.png")}
              style={{ height: "50%", width: "50%" }}
              resizeMode="contain"
            />
          </TouchableOpacity>
        </View>
        <View style={styles.pickerwrapper}>
          <Cardetailspicker title={"Car Make"} />
          <Cardetailspicker title={"Car Model"} />
          <Cardetailspicker title={"Model year"} />
          <Cardetailspicker title={"Car Assembly"} />
          <Cardetailspicker title={"Car Variant"} />
          <Cardetailspicker title={"Car Type"} />
          <Cardetailspicker title={"Car Transmission"} />
          <Cardetailspicker title={"Engine Capacity"} />
          <Cardetailspicker title={"Engine Type"} />
          <Cardetailspicker title={"Body Color"} />
          <Cardetailspicker title={"Seating Capacity"} />
          <Cardetailspicker title={"Registration City"} />
          <Cardetailspicker title={"Pickup City"} />
        </View>
      </KeyboardAwareScrollView>
    </View>
  );
};

const mapStateToProps = (state) => ({
  errors: state.errors.Addcar,
});
export default connect(mapStateToProps, {})(Addcar);

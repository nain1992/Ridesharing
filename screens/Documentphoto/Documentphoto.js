import { useState } from "react";
import {
  Image,
  Text,
  View,
  useWindowDimensions,
  Button,
  TouchableOpacity,
  Modal,
} from "react-native";
import { connect } from "react-redux";
import { styles as _styles } from "../../styles/Documentphoto/main";
import { Camera, CameraType } from "expo-camera";
import Picturetaker from "./component/Picturetaker";
import StandardButton from "../../globalComponents/StandardButton";
const Rideridverification = (props) => {
  let {} = props;
  let { width, height } = useWindowDimensions();
  let styles = _styles({ width, height });

  return (
    <View style={styles.container}>
      <Picturetaker />
      <View style={styles.btnwrapper}>
        <StandardButton
          title={"Confirm"}
          onPress={() => props?.navigation?.navigate("Rideridverification2")}
        />
      </View>
    </View>
  );
};

const mapStateToProps = (state) => ({
  errors: state.errors.errors,
});
export default connect(mapStateToProps, {})(Rideridverification);

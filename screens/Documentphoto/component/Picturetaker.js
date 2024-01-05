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
import { styles as _styles } from "../../../styles/Documentphoto/Pickertaker";
import { Camera, CameraType } from "expo-camera";
const Rideridverification = (props) => {
  let {} = props;
  let { width, height } = useWindowDimensions();
  let styles = _styles({ width, height });

  const [type, setType] = useState(CameraType.back);
  const [permission, requestPermission] = Camera.useCameraPermissions();

  if (!permission) {
    // Camera permissions are still loading
    return <View />;
  }

  if (!permission.granted) {
    // Camera permissions are not granted yet
    return (
      <View style={styles.container}>
        <Text style={{ textAlign: "center" }}>
          We need your permission to show the camera
        </Text>
        <Button onPress={requestPermission} title="grant permission" />
      </View>
    );
  }

  function toggleCameraType() {
    setType((current) =>
      current === CameraType.back ? CameraType.front : CameraType.back
    );
  }

  return (
    <View style={styles.wrapper}>
      <Camera ratio="4:3" style={styles.camera} type={type}></Camera>
    </View>
  );
};

const mapStateToProps = (state) => ({
  errors: state.errors.errors,
});
export default connect(mapStateToProps, {})(Rideridverification);

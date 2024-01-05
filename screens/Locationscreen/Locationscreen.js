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
import { styles as _styles } from "../../styles/Locationscreen/main";
import MapView, { Marker } from "react-native-maps";
import * as Location from "expo-location";
import Homeheader from "../Home/components/Homeheader";
import Sidemenu from "../Home/components/Sidemenu";
import Ridemodel from "./components/Ridemodel";

const Locationscreen = (props) => {
  let {} = props;

  let { width, height } = useWindowDimensions();
  let styles = _styles({ width, height });
  const [location, setLocation] = useState(null);
  const [ismodelvisible, setIsmodelvisible] = useState(true);
  const [issidemodelvisible, setIssidemodelvisible] = useState(false);

  useEffect(() => {
    (async () => {
      let { status } = await Location.requestForegroundPermissionsAsync();
      if (status !== "granted") {
        console.error("Location permission denied.");
        return;
      }

      let location = await Location.getCurrentPositionAsync({});
      setLocation(location);
    })();
  }, []);

  return (
    <View style={styles.container}>
      <Homeheader
        onBellPress={() => props?.navigation?.navigate("Notifications")}
        onMenuPress={() => setIssidemodelvisible(true)}
      />
      {location && (
        <View style={styles.mapwrapper}>
          <MapView
            style={styles.map}
            initialRegion={{
              latitude: location.coords.latitude,
              longitude: location.coords.longitude,
              latitudeDelta: 0.0922,
              longitudeDelta: 0.0421,
            }}
          >
            <Marker
              coordinate={{
                latitude: location.coords.latitude,
                longitude: location.coords.longitude,
              }}
              title="My Location"
            />
          </MapView>
        </View>
      )}

      {ismodelvisible && (
        <Ridemodel onclosepress={() => setIsmodelvisible(false)} />
      )}
      {issidemodelvisible && (
        <Sidemenu
          setIssidemodelvisible={setIssidemodelvisible}
          onBackPress={() => setIssidemodelvisible(false)}
          navigation={props?.navigation}
        />
      )}
    </View>
  );
};

const mapStateToProps = (state) => ({
  errors: state.errors.errors,
});
export default connect(mapStateToProps, {})(Locationscreen);

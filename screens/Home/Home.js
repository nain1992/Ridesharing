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
import { styles as _styles } from "../../styles/Home/main";
import MapView, { Marker } from "react-native-maps";
import * as Location from "expo-location";
import Homeheader from "./components/Homeheader";
import Bottommenu from "../../globalComponents/Bottommenu";

const Home = (props) => {
  let {} = props;

  let { width, height } = useWindowDimensions();
  let styles = _styles({ width, height });
  const [location, setLocation] = useState(null);

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
      <Homeheader />
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
      <Bottommenu active={"Home"} navigation={props?.navigation} />
    </View>
  );
};

const mapStateToProps = (state) => ({
  errors: state.errors.errors,
});
export default connect(mapStateToProps, {})(Home);

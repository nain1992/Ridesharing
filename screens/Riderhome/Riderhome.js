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
import Locationsearch from "./components/Locationsearch";
import Selectaddressmodel from "./components/Selectaddressmodel";
import Sidemenu from "./components/Sidemenu";
import Selecttimemodel from "./components/Selecttimemodel";

const Home = (props) => {
  let {} = props;

  let { width, height } = useWindowDimensions();
  let styles = _styles({ width, height });
  const [location, setLocation] = useState(null);
  const [ismodelvisible, setIsmodelvisible] = useState(false);
  const [issidemodelvisible, setIssidemodelvisible] = useState(false);
  const [istimevisible, setIstimevisible] = useState(false);

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
      <Bottommenu active={"Home"} navigation={props?.navigation} />
      <Locationsearch
        onBtnPress={() => props?.navigation?.navigate("Request")}
        onPress={() => setIsmodelvisible(true)}
      />

      {ismodelvisible && (
        <Selectaddressmodel
          onclosepress={() => setIsmodelvisible(false)}
          onBtnPress={() => {
            setIsmodelvisible(false);
            setIstimevisible(true);
          }}
        />
      )}
      {issidemodelvisible && (
        <Sidemenu
          setIssidemodelvisible={setIssidemodelvisible}
          onBackPress={() => setIssidemodelvisible(false)}
          navigation={props?.navigation}
        />
      )}

      {istimevisible && (
        <Selecttimemodel
          onclosepress={() => setIstimevisible(false)}
          onConfirmPress={() => {
            setIstimevisible(false);
            props?.navigation?.navigate("Addcar");
          }}
        />
      )}
    </View>
  );
};

const mapStateToProps = (state) => ({
  errors: state.errors.errors,
});
export default connect(mapStateToProps, {})(Home);

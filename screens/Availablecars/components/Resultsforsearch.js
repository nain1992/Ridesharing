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
import { styles as _styles } from "../../../styles/Availablecars/Resutlsforsearch";
import Globalicons from "../../../globalComponents/Globalicons";

const Resultsforsearch = (props) => {
  let { onBtnPress } = props;

  let { width, height } = useWindowDimensions();
  let styles = _styles({ width, height });

  return (
    <View style={styles.container}>
      <View style={styles.carnamedetailswrapper}>
        <Text style={styles.nametext}>BMW Cabrio</Text>
        <Text style={styles.automatictext}>Automatic | 3 seats | Octane</Text>
        <View style={styles.timebody}>
          <Globalicons image={require("../../../assets/icons/11.png")} />
          <Text style={styles.meterstext}>800m</Text>
        </View>
        <View style={styles.timebody}>
          <Globalicons image={require("../../../assets/icons/15.png")} />
          <Text style={styles.meterstext}>06:00pm</Text>
        </View>
        <Text style={styles.nametext}>7/12/2023</Text>
      </View>
      <View style={styles.btnwrapper}>
        <View style={styles.imagebody}>
          <Image
            source={require("../../../assets/images/car1.png")}
            style={{ height: "100%", width: "100%" }}
            resizeMode="contain"
          />
        </View>
        <TouchableOpacity onPress={onBtnPress} style={styles.btnbody}>
          <Text style={styles.btntext}>Ride now</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const mapStateToProps = (state) => ({
  errors: state.errors.errors,
});
export default connect(mapStateToProps, {})(Resultsforsearch);

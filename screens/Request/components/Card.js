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
import { styles as _styles } from "../../../styles/Request/Card";
import Globalicons from "../../../globalComponents/Globalicons";
import { light } from "../../../scheme";

const Card = (props) => {
  let { onBtnPress } = props;

  let { width, height } = useWindowDimensions();
  let styles = _styles({ width, height });

  return (
    <View style={styles.container}>
      <View style={styles.userdetailswrapper}>
        <View style={styles.picbody}>
          <Image
            source={require("../../../assets/images/user.png")}
            style={{ height: "100%", width: "100%" }}
            resizeMode="contain"
          />
        </View>
        <View style={styles.namewrapper}>
          <Text style={styles.nametext}>Annette Black</Text>
          <Text style={styles.meters}>800m</Text>
          <Text style={styles.meters}>6:00 pm</Text>
        </View>
        <Text style={styles.nametext}>7/12/2023</Text>
      </View>
      <View style={styles.btnwrapper}>
        <TouchableOpacity onPress={onBtnPress} style={styles.cancelbtn}>
          <Text
            style={[
              styles.btntext,
              {
                color: light?.btnbody,
              },
            ]}
          >
            Cancel
          </Text>
        </TouchableOpacity>
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
export default connect(mapStateToProps, {})(Card);

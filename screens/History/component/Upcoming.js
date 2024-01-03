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
import { styles as _styles } from "../../../styles/History/Upcoming";
import { light } from "../../../scheme";

const Upcoming = (props) => {
  let { name, area, time, color } = props;

  let { width, height } = useWindowDimensions();
  let styles = _styles({ width, height });

  return (
    <View style={styles.container}>
      <View style={styles.namewrapper}>
        <Text style={styles.nametext}>{name}</Text>
        <Text style={styles.mustandtext}>{area}</Text>
      </View>
      <Text
        style={[
          styles.timetext,
          {
            color: color,
          },
        ]}
      >
        {time}
      </Text>
    </View>
  );
};

const mapStateToProps = (state) => ({
  errors: state.errors.errors,
});
export default connect(mapStateToProps, {})(Upcoming);

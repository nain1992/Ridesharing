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
import { styles as _styles } from "../../styles/Availablecars/main";
import Globalheader from "../../globalComponents/Globalheader";
import Resultsforsearch from "./components/Resultsforsearch";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";

const Availablecars = (props) => {
  let {} = props;

  let { width, height } = useWindowDimensions();
  let styles = _styles({ width, height });

  return (
    <View style={styles.container}>
      <Globalheader navigation={props?.navigation} />
      <View style={styles.lablewrapper}>
        <Text style={styles.selecttext}>Avaiable cars for ride</Text>
        <Text style={styles.results}>18 cars found</Text>
      </View>
      <KeyboardAwareScrollView showsVerticalScrollIndicator={false}>
        {[1, 2, 2, 2, 2, 2]?.map((item, index) => {
          return (
            <Resultsforsearch
              onBtnPress={() => props?.navigation?.navigate("Requestbooking")}
              key={index}
            />
          );
        })}
      </KeyboardAwareScrollView>
    </View>
  );
};

const mapStateToProps = (state) => ({
  errors: state.errors.errors,
});
export default connect(mapStateToProps, {})(Availablecars);

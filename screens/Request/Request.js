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
import { styles as _styles } from "../../styles/Request/main";
import Globalheader from "../../globalComponents/Globalheader";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import Notificationsheader from "../Notifications/components/Notificationsheader";
import Card from "./components/Card";

const Request = (props) => {
  let {} = props;

  let { width, height } = useWindowDimensions();
  let styles = _styles({ width, height });

  return (
    <View style={styles.container}>
      <Notificationsheader title={"Requests"} navigation={props?.navigation} />
      <KeyboardAwareScrollView showsVerticalScrollIndicator={false}>
        {[1, 2, 2, 2, 2, 2]?.map((item, index) => {
          return (
            <Card
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
export default connect(mapStateToProps, {})(Request);

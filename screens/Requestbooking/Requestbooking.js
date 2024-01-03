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
import { styles as _styles } from "../../styles/Requestbooking/main";
import Notificationsheader from "../Notifications/components/Notificationsheader";
import Globalicons from "../../globalComponents/Globalicons";
import Carfield from "./components/Carfield";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import Paymentmethod from "./components/Paymentmethod";
import StandardButton from "../../globalComponents/StandardButton";
import Paymentsuccessmodel from "./components/Paymentsuccessmodel";

const Requestbooking = (props) => {
  let {} = props;

  let { width, height } = useWindowDimensions();
  let styles = _styles({ width, height });

  const [ispaymanetmodelvisible, setIspaymanetmodelvisible] = useState(false);

  return (
    <View style={styles.container}>
      <Notificationsheader title={"Request"} navigation={props?.navigation} />
      <KeyboardAwareScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.pickanddropdetailswrapper}>
          <View style={styles.iconwrapper}>
            <View style={styles.currentlocaicon}>
              <Globalicons image={require("../../assets/icons/red.png")} />
            </View>
            <View style={styles.lineicon}>
              <Image
                source={require("../../assets/icons/Line.png")}
                style={{ height: "100%", width: "100%" }}
                resizeMode="contain"
              />
            </View>
            <View style={styles.currentlocaicon}>
              <Globalicons image={require("../../assets/icons/green.png")} />
            </View>
          </View>
          <View style={styles.textwrapper}>
            <View style={styles.textbody}>
              <Text style={styles.currentext}>Current location</Text>
              <Text style={styles.rdtext}>
                2972 Westheimer Rd. Santa Ana, Illinois 85486
              </Text>
            </View>
            <View style={styles.textbody}>
              <Text style={styles.currentext}>Office</Text>
              <Text style={styles.rdtext}>
                1901 Thornridge Cir. Shiloh, Hawaii 81063
              </Text>
            </View>
          </View>
        </View>
        <Carfield />
        <View style={styles.datebody}>
          <Text style={styles.rdtext}>Date</Text>
        </View>
        <View style={styles.datebody}>
          <Text style={styles.rdtext}>Time</Text>
        </View>
        <Text style={styles.selectpaymenttext}>Select payment method</Text>
        <Paymentmethod
          // onCardpress
          image={require("../../assets/icons/visa.png")}
          cardnum={"**** **** **** 8970"}
          expiry={"Expires: 12/26"}
        />
        <Paymentmethod
          image={require("../../assets/icons/paypal.png")}
          cardnum={"**** **** **** 8970"}
          expiry={"Expires: 12/26"}
        />
        <Paymentmethod
          image={require("../../assets/icons/master.png")}
          cardnum={"**** **** **** 8970"}
          expiry={"Expires: 12/26"}
        />
        <Paymentmethod
          image={require("../../assets/icons/cash.png")}
          cardnum={"**** **** **** 8970"}
          expiry={"Expires: 12/26"}
        />
        <View style={styles.btnwraper}>
          <StandardButton
            onPress={() => setIspaymanetmodelvisible(true)}
            title={"Confirm Booking"}
          />
        </View>

        {ispaymanetmodelvisible && (
          <Paymentsuccessmodel
            onClosepress={() => setIspaymanetmodelvisible(false)}
          />
        )}
      </KeyboardAwareScrollView>
    </View>
  );
};

const mapStateToProps = (state) => ({
  errors: state.errors.errors,
});
export default connect(mapStateToProps, {})(Requestbooking);

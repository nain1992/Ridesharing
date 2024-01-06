import { useState } from "react";
import {
  Text,
  View,
  useWindowDimensions,
  Image,
  TouchableOpacity,
  TextInput,
} from "react-native";
import { connect } from "react-redux";
import { styles as _styles } from "../../styles/Chat/main";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import { getPercent } from "../../middleware";
import Notificationsheader from "../Notifications/components/Notificationsheader";
import Incomingmsg from "./components/Incomingmsg";
import Outgoingmsg from "./components/Outgoingmsg";
import { light } from "../../scheme";
const Chat = (props) => {
  let {} = props;
  let { width, height } = useWindowDimensions();
  let styles = _styles({ width, height });

  const [ismsgtyped, setIsmsgtyped] = useState("");

  return (
    <View style={styles.container}>
      <Notificationsheader title={"Chat"} navigation={props?.navigation} />
      {[1, 3, 3]?.map((item, index) => {
        return (
          <Incomingmsg
            key={index}
            image={require("../../assets/images/user.png")}
            incomingmsg={"Welcome to Car2go Customer Service"}
            time={"8:29 am"}
          />
        );
      })}
      {[1, 3, 3]?.map((item, index) => {
        return (
          <Outgoingmsg
            key={index}
            outgoingmsg={"Welcome to Car2go Customer Service"}
            time={"8:29 am"}
          />
        );
      })}
      <View style={styles.typemsgwrapper}>
        <TouchableOpacity style={styles.iconbody}>
          <Image
            source={require("../../assets/icons/plus.png")}
            style={{ height: "100%", width: "100%" }}
            resizeMode="contain"
          />
        </TouchableOpacity>
        <View style={styles.typemsgbody}>
          <TextInput
            style={styles.inputstyles}
            placeholder={"Type your message"}
            placeholderTextColor={light?.fieldtext}
            multiline
          />
          <TouchableOpacity style={styles.iconbody}>
            <Image
              source={require("../../assets/icons/send.png")}
              style={{ height: "100%", width: "100%" }}
              resizeMode="contain"
            />
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

const mapStateToProps = (state) => ({
  errors: state.errors.errors,
});
export default connect(mapStateToProps, {})(Chat);

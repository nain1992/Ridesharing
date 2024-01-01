import { useState } from "react";
import {
  Text,
  View,
  useWindowDimensions,
  TouchableOpacity,
  Image,
} from "react-native";
import { connect } from "react-redux";
import { styles as _styles } from "../../styles/Register/main";
import Globalheader from "../../globalComponents/Globalheader";
import Globalfields from "../../globalComponents/Globalfields";
import Globalicons from "../../globalComponents/Globalicons";
import StandardButton from "../../globalComponents/StandardButton";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";

const Riderregister = (props) => {
  let {} = props;
  let { width, height } = useWindowDimensions();
  let styles = _styles({ width, height });

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const _handleSignup = () => {
    props?.navigation?.navigate("Riderenterphone");
  };
  return (
    <View style={styles.container}>
      <KeyboardAwareScrollView showsVerticalScrollIndicator={false}>
        <Globalheader navigation={props?.navigation} />
        <View style={styles.signupwrapper}>
          <Text style={styles.signuptext}>Sign up</Text>
        </View>
        <View style={styles.fieldwrapper}>
          <Globalfields
            multiline
            placeholder="Name"
            onChangeText={(val) => setName(val)}
            value={name}
          />
          <Globalfields
            multiline
            placeholder="Email"
            onChangeText={(val) => setEmail(val)}
            value={email}
          />
          <Globalfields
            multiline
            placeholder="Password"
            onChangeText={(val) => setPassword(val)}
            value={password}
          />
        </View>
        <View style={styles.termswrapper}>
          <Globalicons image={require("../../assets/icons/5.png")} />
          <Text style={styles.signinguptext}>
            By signing up. you agree to the Terms of service and Privacy policy.
          </Text>
        </View>
        <View style={styles.btnwrapper}>
          <StandardButton title={"Sign up"} onPress={_handleSignup} />
        </View>
        <View style={styles.alreadywrapper}>
          <Text style={styles.alreadytext}>
            Already have an account? <Text style={styles.signup}>Sign in</Text>
          </Text>
        </View>
      </KeyboardAwareScrollView>
    </View>
  );
};

const mapStateToProps = (state) => ({
  errors: state.errors.errors,
});
export default connect(mapStateToProps, {})(Riderregister);

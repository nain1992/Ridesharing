import {
  Text,
  View,
  useWindowDimensions,
  TouchableOpacity,
  Image,
  TextInput,
} from "react-native";
import { connect } from "react-redux";
import { styles as _styles } from "../../styles/Changepassword/main";
import Notificationsheader from "../Notifications/components/Notificationsheader";
import { Entypo, Ionicons } from "@expo/vector-icons";
import { light } from "../../scheme";
import StandardButton from "../../globalComponents/StandardButton";
import { getPercent } from "../../middleware";
import { useState } from "react";

const Changepassword = (props) => {
  let {} = props;
  let { width, height } = useWindowDimensions();
  let styles = _styles({ width, height });

  const [oldpassword, setOldpassword] = useState(false);
  const [newpassword, setNewpassword] = useState(false);
  const [confirmpasword, setConfirmpasword] = useState(false);

  return (
    <View style={styles.container}>
      <Notificationsheader
        title={"Change Password"}
        navigation={props?.navigation}
      />
      <View style={{ marginTop: getPercent(3, height) }}>
        <View style={styles.fieldbody}>
          <TextInput
            placeholder="Old Password"
            multiline
            placeholderTextColor={light?.fieldtext}
            style={styles.input}
          />
          <TouchableOpacity>
            <Ionicons
              name="md-eye-off-outline"
              size={15}
              color={light?.standardtext}
            />
          </TouchableOpacity>
        </View>
        <View style={styles.fieldbody}>
          <TextInput
            placeholder="New Password"
            multiline
            placeholderTextColor={light?.fieldtext}
            style={styles.input}
          />
          <TouchableOpacity>
            <Ionicons
              name="md-eye-off-outline"
              size={15}
              color={light?.standardtext}
            />
          </TouchableOpacity>
        </View>
        <View style={styles.fieldbody}>
          <TextInput
            placeholder="Confirm Password"
            multiline
            placeholderTextColor={light?.fieldtext}
            style={styles.input}
          />
          <TouchableOpacity>
            <Ionicons
              name="md-eye-off-outline"
              size={15}
              color={light?.standardtext}
            />
          </TouchableOpacity>
        </View>
      </View>
      <View style={styles.btnwrapper}>
        <StandardButton title={"Save"} />
      </View>
    </View>
  );
};

const mapStateToProps = (state) => ({
  errors: state.errors.errors,
});
export default connect(mapStateToProps, {})(Changepassword);

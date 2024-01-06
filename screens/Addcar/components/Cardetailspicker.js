import {
  Text,
  View,
  useWindowDimensions,
  TouchableOpacity,
  Image,
  TextInput,
} from "react-native";
import { connect } from "react-redux";
import { styles as _styles } from "../../../styles/Addcar/Cardetailspicker";
import { light } from "../../../scheme";
import { useState } from "react";
import { AntDesign } from "@expo/vector-icons";

const Cardetailspicker = (props) => {
  let { title } = props;
  let { width, height } = useWindowDimensions();
  let styles = _styles({ width, height });

  const [complainreason, setComplainreason] = useState("Audi");
  const [isopen, setisOpen] = useState(false);

  options = ["Audi", "Audi", "Audi"];

  return (
    <View style={styles.container}>
      <Text style={styles.titletext}>{title}</Text>
      <TouchableOpacity
        onPress={() => setisOpen(!isopen)}
        style={styles.pikeropener}
      >
        <Text style={styles.inputstyles}>{complainreason}</Text>
        <AntDesign name="caretdown" size={12} color={light?.standardtext} />
      </TouchableOpacity>
      {isopen ? (
        <View style={styles.pickerdropdown}>
          {options.map((item, index) => {
            return (
              <TouchableOpacity
                onPress={() => {
                  setisOpen(false);
                  setComplainreason(item);
                }}
                key={index}
                style={styles.pikercontainer}
              >
                <Text style={styles.inputstyles}>{item}</Text>
              </TouchableOpacity>
            );
          })}
        </View>
      ) : null}
    </View>
  );
};

const mapStateToProps = (state) => ({
  errors: state.errors.errors,
});
export default connect(mapStateToProps, {})(Cardetailspicker);

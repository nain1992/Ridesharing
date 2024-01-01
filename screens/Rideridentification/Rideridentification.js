import { useState } from "react";
import { Text, View, useWindowDimensions } from "react-native";
import { connect } from "react-redux";
import { styles as _styles } from "../../styles/Rideridentification/main";
import Globalheader from "../../globalComponents/Globalheader";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import Identificationoptions from "./components/Identificationoptions";
import StandardButton from "../../globalComponents/StandardButton";

const Rideridentification = (props) => {
  let {} = props;
  let { width, height } = useWindowDimensions();
  let styles = _styles({ width, height });

  const [isselect, setisSelect] = useState("Local ID");

  return (
    <View style={styles.container}>
      <Globalheader navigation={props?.navigation} />
      <View style={styles.textwrapper}>
        <Text style={styles.textstyles}>Identification</Text>
      </View>
      <Identificationoptions
        isselect={isselect}
        setisSelect={setisSelect}
        onPress={() => setisSelect(true)}
        image={require("../../assets/icons/id1.png")}
        title={"Local ID"}
        image2={
          isselect === "Local ID"
            ? require("../../assets/icons/id5.png")
            : require("../../assets/icons/id4.png")
        }
      />
      <Identificationoptions
        isselect={isselect}
        setisSelect={setisSelect}
        onPress={() => setisSelect(true)}
        image={require("../../assets/icons/id2.png")}
        title={"International passport"}
        image2={
          isselect === "International passport"
            ? require("../../assets/icons/id5.png")
            : require("../../assets/icons/id4.png")
        }
      />
      <Identificationoptions
        isselect={isselect}
        setisSelect={setisSelect}
        onPress={() => setisSelect(true)}
        image={require("../../assets/icons/id3.png")}
        title={"Driving licence"}
        image2={
          isselect === "Driving licence"
            ? require("../../assets/icons/id5.png")
            : require("../../assets/icons/id4.png")
        }
      />
      <View style={styles.btnwrapper}>
        <StandardButton
          title={"Select"}
          onPress={() => props?.navigation?.navigate("Rideridverification")}
        />
      </View>
    </View>
  );
};

const mapStateToProps = (state) => ({
  errors: state.errors.errors,
});
export default connect(mapStateToProps, {})(Rideridentification);

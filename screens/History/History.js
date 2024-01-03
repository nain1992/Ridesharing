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
import { styles as _styles } from "../../styles/History/main";
import Bottommenu from "../../globalComponents/Bottommenu";
import Notificationsheader from "../Notifications/components/Notificationsheader";
import { light } from "../../scheme";
import Upcoming from "./component/Upcoming";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";

const History = (props) => {
  let {} = props;

  let { width, height } = useWindowDimensions();
  let styles = _styles({ width, height });

  const [activebtn, setActivebtn] = useState(0);
  const [upcoming, setUpcoming] = useState(true);
  const [completed, setCompleted] = useState();
  const [cancelled, setCancelled] = useState();

  let btns = ["Upcoming", "Completed", "Cancelled"];

  const _handleactivebtn = (index) => {
    console.log(btns);
    setActivebtn(index);
  };

  return (
    <View style={styles.container}>
      <Notificationsheader title={"History"} navigation={props?.navigation} />
      <View style={styles.recordheadingwrapper}>
        {btns?.map((item, index) => {
          return (
            <TouchableOpacity
              onPress={() => _handleactivebtn(index)}
              key={index}
              style={[
                styles.btnbody,
                {
                  backgroundColor:
                    activebtn === index ? light?.btnbody : "transparent",
                },
              ]}
            >
              <Text
                style={[
                  styles.btntext,
                  {
                    color:
                      activebtn === index
                        ? light?.BtnText
                        : light?.standardtext,
                  },
                ]}
              >
                {item}
              </Text>
            </TouchableOpacity>
          );
        })}
      </View>
      <KeyboardAwareScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.wrapper}>
          {[1, 2, 3, 4, 5, 5]?.map((item, index) => {
            return (
              <Upcoming
                key={index}
                name={"Nate"}
                area={"Mustang Shelby GT"}
                time={"Today at 09:20 am"}
              />
            );
          })}
          {/* {activebtn === "Completed"
            ? [1, 2, 3, 4, 5, 5]?.map((item, index) => {
                return (
                  <Upcoming
                    key={index}
                    name={"Nate"}
                    area={"Mustang Shelby GT"}
                    time={"Done"}
                  />
                );
              })
            : null}
          {activebtn === "Cancelled"
            ? [1, 2, 3, 4, 5, 5]?.map((item, index) => {
                return (
                  <Upcoming
                    key={index}
                    name={"Nate"}
                    area={"Mustang Shelby GT"}
                    time={"Cancel"}
                  />
                );
              })
            : null} */}
        </View>
      </KeyboardAwareScrollView>
      <Bottommenu active={"History"} navigation={props?.navigation} />
    </View>
  );
};

const mapStateToProps = (state) => ({
  errors: state.errors.errors,
});
export default connect(mapStateToProps, {})(History);

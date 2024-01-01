import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import Login from "../screens/Login/Login";
import Onboarding1 from "../screens/Onboarding/Onboarding1";
import Onboarding2 from "../screens/Onboarding/Onboarding2";
import Onboarding3 from "../screens/Onboarding/Onboarding3";
import Welcome from "../screens/Welcome/Welcome";
import Register from "../screens/Register/Register";
import Enterphone from "../screens/Enterphone/Enterphone";
import Phoneverification from "../screens/Phoneverification/Phoneverification";
import Riderwelcome from "../screens/Riderwelcome/Riderwelcome";
import Riderregister from "../screens/Riderregister/Riderregister";
import Riderenterphone from "../screens/Riderenterphone/Riderenterphone";
import Riderphoneverification from "../screens/Riderphoneverification/Riderphoneverification";
import Riderfriendphoneverification from "../screens/Riderfriendphoneverification/Riderfriendphoneverification";
import Riderfriendentercode from "../screens/Riderfriendentercode/Riderfriendentercode";
import Riderenterfamilynumber from "../screens/Riderenterfamilynumber/Riderenterfamilynumber";
import Riderfamilyentercode from "../screens/Riderfamilyentercode/Riderfamilyentercode";

const { Navigator, Screen } = createStackNavigator();

function AppNavigation() {
  return (
    <Navigator screenOptions={{ headerShown: false, animationEnabled: false }}>
      <Screen name="Onboarding1" component={Onboarding1} />
      <Screen name="Onboarding2" component={Onboarding2} />
      <Screen name="Onboarding3" component={Onboarding3} />
      <Screen name="Welcome" component={Welcome} />
      <Screen name="Register" component={Register} />
      <Screen name="Enterphone" component={Enterphone} />
      <Screen name="Phoneverification" component={Phoneverification} />
      <Screen name="Riderwelcome" component={Riderwelcome} />
      <Screen name="Riderregister" component={Riderregister} />
      <Screen name="Riderenterphone" component={Riderenterphone} />
      <Screen
        name="Riderphoneverification"
        component={Riderphoneverification}
      />
      <Screen
        name="Riderfriendphoneverification"
        component={Riderfriendphoneverification}
      />
      <Screen name="Riderfriendentercode" component={Riderfriendentercode} />
      <Screen
        name="Riderenterfamilynumber"
        component={Riderenterfamilynumber}
      />
      <Screen name="Riderfamilyentercode" component={Riderfamilyentercode} />

      <Screen name="Login" component={Login} />
    </Navigator>
  );
}
export const AppNavigator = () => (
  <NavigationContainer>
    <AppNavigation />
  </NavigationContainer>
);

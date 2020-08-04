import React from "react";
import { createAppContainer, createSwitchNavigator } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";
import { createBottomTabNavigator } from "react-navigation-tabs";
import SignupScreen from "./src/screens/SignupScreen";
import LoginScreen from "./src/screens/LoginScreen";
import TrackCreate from "./src/screens/TrackCreate";
import AccountScreen from "./src/screens/AccountScreen";
import TrackList from "./src/screens/TrackList";
import TrackDetail from "./src/screens/TrackDetail";
import { Provider as AuthProvider } from "./src/context/AuthContext";
import { Provider as LocationProvider } from "./src/context/LocationContext";
import { Provider as TrackProvider } from "./src/context/TrackContext";
import { setNavigator } from "./src/navigationRef";
import LoadingScreen from "./src/screens/LoadingScreen";
import { StatusBar } from "react-native";

const switchNavigator = createSwitchNavigator({
  loading: LoadingScreen,
  loginFlow: createStackNavigator({
    Signup: SignupScreen,
    Login: LoginScreen,
  }),
  mainFlow: createBottomTabNavigator({
    trackListFlow: createStackNavigator({
      TrackList: TrackList,
      TrackDetail: TrackDetail,
    }),
    TrackCreate: TrackCreate,
    Account: AccountScreen,
  }),
});

const App = createAppContainer(switchNavigator);

export default () => {
  return (
    <TrackProvider>
      <LocationProvider>
        <AuthProvider>
          <StatusBar backgroundColor="#1d2c4dff" animated={true} />
          <App
            ref={(navigator) => {
              setNavigator(navigator);
            }}
          />
        </AuthProvider>
      </LocationProvider>
    </TrackProvider>
  );
};

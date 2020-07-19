import React from "react";
import {
  createAppContainer,
  createSwitchNavigator,
  createBottomTabNavigator,
} from "react-navigation";
import { createStackNavigator } from 'react-navigation-stack'
import SignupScreen from "./src/screens/SignupScreen";
import LoginScreen from "./src/screens/LoginScreen";
import TrackCreate from "./src/screens/TrackCreate";
import AccountScreen from "./src/screens/AccountScreen";
import TrackList from "./src/screens/TrackList";
import TrackDetail from "./src/screens/TrackDetail";

const switchNavigator = createSwitchNavigator({
  loginFlow: createStackNavigator({
    Signup: SignupScreen,
    Login: LoginScreen,
  }),
  mainFlow: createBottomTabNavigator({
    TrakeCreate: TrackCreate,
    Account: AccountScreen,
    trackListFlow: createStackNavigator({
      TrackList: TrackList,
      TrackDetail: TrackDetail,
    }),
  }),
});

export default createAppContainer(switchNavigator);

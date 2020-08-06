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
import FlashMessage from "react-native-flash-message";
import { MaterialCommunityIcons } from "@expo/vector-icons";

const switchNavigator = createSwitchNavigator({
  loading: LoadingScreen,
  loginFlow: createStackNavigator({
    Signup: SignupScreen,
    Login: LoginScreen,
  }),
  mainFlow: createBottomTabNavigator(
    {
      trackListFlow: createStackNavigator(
        {
          TrackList: TrackList,
          TrackDetail: TrackDetail,
        },
        {
          navigationOptions: {
            title: "Tracks",
            tabBarIcon: ({ focused }) =>
              focused ? (
                <MaterialCommunityIcons
                  name="go-kart-track"
                  size={30}
                  color="#1976D2"
                />
              ) : (
                <MaterialCommunityIcons
                  name="go-kart-track"
                  size={30}
                  color="white"
                />
              ),
          },
        }
      ),
      TrackCreate: TrackCreate,
      Account: AccountScreen,
    },
    {
      initialRouteName: "trackListFlow",
      lazy: true,
      tabBarPosition: "bottom",
      tabBarOptions: {
        iconStyle: {
          // padding: 15,
        },
        showIcon: true,
        showLabel: true,
        activeBackgroundColor: "#1976D24F",
        inactiveBackgroundColor: "#212121",
        activeTintColor: "#1976D2",
        inactiveTintColor: "#fff",
        keyboardHidesTabBar: true,
        labelStyle: {
          fontSize: 16,
          marginHorizontal: 5,
        },
        style: {
          height: 70,
          backgroundColor: "#212121",
          borderTopWidth: 0,
          alignItems: "center",
          justifyContent: "center",
        },
        tabStyle: {
          padding: 5,
          justifyContent: "center",
          alignItems: "center",
        },
      },
    }
  ),
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
          <FlashMessage position="top" />
        </AuthProvider>
      </LocationProvider>
    </TrackProvider>
  );
};

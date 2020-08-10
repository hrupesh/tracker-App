import React, { useEffect, useRef, useContext } from "react";
import {
  StyleSheet,
  View,
  StatusBar,
  ImageBackground,
  Animated,
  TouchableOpacity,
  Image,
} from "react-native";
import { Button, Text } from "react-native-elements";
import { MaterialCommunityIcons, AntDesign } from "@expo/vector-icons";
import { Context as AuthContext } from "../context/AuthContext";
import * as Animatable from "react-native-animatable";

export default function AccountScreen() {
  const btnAnim = useRef(new Animated.Value(0)).current;

  const { logout } = useContext(AuthContext);

  const AnimateBtn = () => {
    // alert("Fading IN");
    Animated.timing(btnAnim, {
      toValue: 500,
      duration: 1000,
      useNativeDriver: false,
    }).start(({ finished }) => {
      logout();
    });
  };

  return (
    <ImageBackground
      resizeMethod="resize"
      resizeMode="cover"
      source={require("../../assets/account.png")}
      style={styles.container}
    >
      {/* <Text
        h1
        h1Style={{ color: "#fff", letterSpacing: 5, fontWeight: "100" }}
        style={styles.text}
      >
        Hey
      </Text>
      <Text
        h2
        h2Style={{ color: "#fff", letterSpacing: 5, fontWeight: "100" }}
        style={styles.text}
      >
        I am Rupesh Chaudhari
      </Text>
      <Image
        source={{
          uri:
            "https://www.clipartkey.com/mpngs/m/36-364563_crying-sad-emoji-png-sad-face-emoji-transparent.png",
        }}
        style={{ height: 300, width: 300 }}
        resizeMode="cover"
      /> */}
      <TouchableOpacity
        activeOpacity={0.8}
        onPress={() => AnimateBtn()}
        style={styles.btnContainer}
      >
        <Animatable.View
          animation="wobble"
          iterationCount="infinite"
          easing="linear"
          style={[
            styles.btn,
            {
              transform: [
                {
                  translateX: btnAnim,
                },
              ],
            },
          ]}
        >
          <Text style={styles.btnText}>
            <AntDesign name="logout" size={24} color="black" />
          </Text>
        </Animatable.View>
      </TouchableOpacity>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#1d2c4d",
    flex: 1,
    padding: 25,
    justifyContent: "space-between",
    alignItems: "center",
  },
  text: {
    backgroundColor: "#0006",
    width: "120%",
    textAlign: "center",
    padding: 25,
    borderRadius: 4,
    textShadowColor: "red",
    textShadowOffset: {
      height: 0,
      width: 0,
    },
    textShadowRadius: 10,
  },
  btn: {
    marginTop: 30,
    margin: 25,
    backgroundColor: "#03A9F4",
    padding: 15,
    // borderRadius: 25,
    elevation: 10,
    // width: 300,
    alignSelf: "center",
    borderRadius: 50,
  },
  btnText: {
    textAlign: "center",
    fontSize: 18,
    color: "white",
    letterSpacing: 4,
    textTransform: "uppercase",
    fontWeight: "bold",
    fontFamily: "Roboto",
  },
});

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
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { Context as AuthContext } from "../context/AuthContext";

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
      source={{ url: "https://picsum.photos/3000/3500" }}
      style={styles.container}
    >
      <StatusBar backgroundColor="#27008F" />
      <Text
        h1
        h1Style={{ color: "#fff", letterSpacing: 5, fontWeight: "100" }}
        style={styles.text}
      >
        Really! 👀
      </Text>
      <Image
        source={{
          uri:
            "https://www.clipartkey.com/mpngs/m/36-364563_crying-sad-emoji-png-sad-face-emoji-transparent.png",
        }}
        style={{ height: 300, width: 300 }}
        resizeMode="cover"
      />
      <TouchableOpacity
        activeOpacity={0.8}
        onPress={() => AnimateBtn()}
        style={styles.btnContainer}
      >
        <Animated.View
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
          <Text style={styles.btnText}>Logout</Text>
        </Animated.View>
      </TouchableOpacity>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#f7f7f7",
    flex: 1,
    padding: 25,
    justifyContent: "space-between",
    alignItems: "center",
  },
  text: {
    backgroundColor: "#0004",
    width: "120%",
    textAlign: "center",
    padding: 25,
    borderRadius: 4,
  },
  btn: {
    marginTop: 30,
    margin: 25,
    backgroundColor: "#512DF8",
    padding: 15,
    // borderRadius: 25,
    elevation: 10,
    width: 300,
    alignSelf: "center",
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

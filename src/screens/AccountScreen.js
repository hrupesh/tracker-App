import React, { useEffect, useRef, useContext } from "react";
import {
  StyleSheet,
  View,
  StatusBar,
  ImageBackground,
  Animated,
  TouchableOpacity,
} from "react-native";
import { Button, Text } from "react-native-elements";
import { MaterialCommunityIcons } from "@expo/vector-icons";

export default function AccountScreen() {
  const btnAnim = useRef(new Animated.Value(0)).current;

  const AnimateBtn = () => {
    // alert("Fading IN");
    Animated.timing(btnAnim, {
      toValue: 1000,
      duration: 1500,
      useNativeDriver: false,
    }).start(({ finished }) => {
      alert("Done!");
    });
  };

  return (
    <ImageBackground
      resizeMethod="resize"
      resizeMode="cover"
      source={{ uri: "https://picsum.photos/3000/3500" }}
      style={styles.container}
    >
      <StatusBar backgroundColor="#27008F" />
      <Text
        h1
        h1Style={{ color: "#fff", letterSpacing: 5, fontWeight: "100" }}
        style={styles.text}
      >
        LOGOUT
      </Text>
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
          <Text style={styles.btnText}>Login</Text>
        </Animated.View>
      </TouchableOpacity>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#27008F",
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
    backgroundColor: "#F44336",
    padding: 10,
    // borderRadius: 25,
    elevation: 10,
    width: "90%",
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

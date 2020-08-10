import React, { useEffect, useRef, useContext } from "react";
import {
  StyleSheet,
  View,
  StatusBar,
  ImageBackground,
  Animated,
  TouchableOpacity,
  Image,
  Dimensions,
  Alert,
} from "react-native";
import { Button, Text } from "react-native-elements";
import { MaterialCommunityIcons, AntDesign } from "@expo/vector-icons";
import { Context as AuthContext } from "../context/AuthContext";
import * as Animatable from "react-native-animatable";

export default function AccountScreen() {
  const btnAnim = useRef(new Animated.Value(0)).current;

  const { logout } = useContext(AuthContext);

  useEffect(() => {
    Alert.alert(
      "Hi!",
      "This is about developer. You can also logout by clicking the red button"
    );
  }, []);

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
    <View style={styles.container}>
      <ImageBackground
        resizeMethod="resize"
        resizeMode="cover"
        source={require("../../assets/account.png")}
        style={{ width: '100%', height: '100%' }}
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
      </ImageBackground>
      <Animatable.View
        animation="tada"
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
        <TouchableOpacity
          activeOpacity={0.8}
          onPress={() => console.log("Pressed!")}
          style={{ zIndex: 999 }}
        >
          <Text style={styles.btnText}>
            <AntDesign name="logout" size={34} color="white" />
          </Text>
        </TouchableOpacity>
      </Animatable.View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#1d2c4d",
    flex: 1,
    // padding: 5,
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
    position: "absolute",
    bottom: 25,
    right: 15,
    marginTop: 30,
    margin: 25,
    backgroundColor: "#F44336",
    padding: 15,
    // borderRadius: 25,
    elevation: 10,
    // width: 300,
    // alignSelf: "stretch",
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

import React from "react";
import { StyleSheet, View, StatusBar, ImageBackground } from "react-native";
import { Button, Text } from "react-native-elements";

export default function AccountScreen() {
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
        h1Style={{ color: "#fff", letterSpacing: 5, fontWeight: "700" }}
        style={styles.text}
      >
        LOGOUT
      </Text>
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
    backgroundColor: "#0002",
    width: "100%",
    textAlign: "center",
    padding: 25,
    borderRadius: 4,
  },
});

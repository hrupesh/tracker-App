import React from "react";
import { StyleSheet, View, StatusBar } from "react-native";
import { Button, Text } from "react-native-elements";

export default function AccountScreen() {
  return (
    <View style={styles.container}>
      <StatusBar backgroundColor="#27008F" />
      <Text h1 h1Style={{ color: "#fff", letterSpacing: 1, fontWeight: "100" }}>
        Account Screen
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#27008F",
    flex: 1,
    padding: 25,
    justifyContent: "space-between",
  },
});

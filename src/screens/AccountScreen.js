import React from "react";
import { StyleSheet, View } from "react-native";
import { Button, Text } from "react-native-elements";

export default function AccountScreen() {
  return (
    <View style={styles.container}>
      <Text h1>Account Screen</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#ccc",
    flex: 1,
  },
});

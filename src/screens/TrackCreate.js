import React, { useEffect, useState } from "react";
import { StyleSheet, SafeAreaView } from "react-native";
import { Text } from "react-native-elements";
import Map from "../components/Map";
import { requestPermissionsAsync } from "expo-location";

export default function TrackCreate() {
  return (
    <SafeAreaView style={styles.container}>
      <Text h3 h3Style={styles.title}>
        Create New Track
      </Text>
      <Map />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  title: {
    textAlign: "center",
    margin: 10,
    fontWeight: "100",
    letterSpacing: 2,
  },
  container: {
    flex: 1,
    backgroundColor: "#512DA80F",
  },
});

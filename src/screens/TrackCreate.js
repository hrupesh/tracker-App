import "../_mockLocation";
import React, { useEffect, useState, useContext } from "react";
import { withNavigationFocus } from "react-navigation";
import { StyleSheet, SafeAreaView } from "react-native";
import { Text } from "react-native-elements";
import Map from "../components/Map";
import {
  requestPermissionsAsync,
  watchPositionAsync,
  Accuracy,
} from "expo-location";
import { Context as LocationContext } from "../context/LocationContext";
import useLocation from "../hooks/useLocation";

const TrackCreate = ({ isFocused }) => {
  const { addLocation } = useContext(LocationContext);

  const [error] = useLocation(addLocation);

  console.log(isFocused);

  return (
    <SafeAreaView style={styles.container}>
      <Map />
      <Text style={styles.title}>New Track</Text>
      {error ? <Text>Error : {error}</Text> : null}
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  title: {
    margin: 15,
    fontSize: 22,
    fontWeight: "100",
    letterSpacing: 2,
    color: "white",
    textShadowColor: "black",
    textShadowRadius: 50,
    textShadowOffset: {
      height: 0,
      width: 0,
    },
  },
  container: {
    flex: 1,
    backgroundColor: "#1d2c4dff",
  },
});

export default withNavigationFocus(TrackCreate);

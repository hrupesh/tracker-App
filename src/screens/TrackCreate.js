import "../_mockLocation";
import React, { useEffect, useState, useContext } from "react";
import { StyleSheet, SafeAreaView } from "react-native";
import { Text } from "react-native-elements";
import Map from "../components/Map";
import {
  requestPermissionsAsync,
  watchPositionAsync,
  Accuracy,
} from "expo-location";
import { Context as LocationContext } from "../context/LocationContext";

export default function TrackCreate() {
  const [error, setError] = useState(null);

  const { addLocation } = useContext(LocationContext);

  const startWatching = async () => {
    try {
      await requestPermissionsAsync();
      await watchPositionAsync(
        {
          accuracy: Accuracy.BestForNavigation,
          timeInterval: 100,
          distanceInterval: 2,
        },
        (location) => {
          addLocation(location);
          // console.log(location);
        }
      );
    } catch (err) {
      setError(err);
    }
  };

  useEffect(() => {
    startWatching();
  }, []);

  return (
    <SafeAreaView style={styles.container}>
      <Map />
      <Text style={styles.title}>New Track</Text>
      {error ? <Text>Error : {error}</Text> : null}
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  title: {
    textAlign: "center",
    margin: 15,
    fontSize: 24,
    fontWeight: "100",
    letterSpacing: 5,
    color: "white",
    textShadowColor: "#512DF8",
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

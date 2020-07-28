import "../_mockLocation";
import React, { useEffect, useState } from "react";
import { StyleSheet, SafeAreaView } from "react-native";
import { Text } from "react-native-elements";
import Map from "../components/Map";
import {
  requestPermissionsAsync,
  watchPositionAsync,
  Accuracy,
} from "expo-location";

export default function TrackCreate() {
  const [error, setError] = useState(null);

  const startWatching = async () => {
    try {
      await requestPermissionsAsync();
      await watchPositionAsync(
        {
          accuracy: Accuracy.BestForNavigation,
          timeInterval: 500,
          distanceInterval: 2,
        },
        (location) => {
          console.log(location);
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
      <Text h3 h3Style={styles.title}>
        Create New Track
      </Text>
      <Map />
      {error ? <Text>Error : {error}</Text> : null}
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

import React from "react";
import { StyleSheet, Text, View } from "react-native";
import MapView, { Polyline } from "react-native-maps";

export default function Map() {
  return (
    <MapView
      style={styles.map}
      initialRegion={{
        latitude: 19.98848,
        longitude: 73.7804288,
        latitudeDelta: 0.1,
        longitudeDelta: 0.1,
      }}
    >
      {/* <Polyline /> */}
    </MapView>
  );
}

const styles = StyleSheet.create({
  map: {
    width: "100%",
    height: "100%",
  },
});

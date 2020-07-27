import React from "react";
import { StyleSheet, Text, View } from "react-native";
import MapView, { Polyline } from "react-native-maps";

export default function Map() {
  return (
    <MapView
      style={styles.map}
      initialRegion={{
        latitude: 20.0381938,
        longitude: 73.80659,
        latitudeDelta: 0.001,
        longitudeDelta: 0.001,
      }}
    >
      {/* <Polyline /> */}
    </MapView>
  );
}

const styles = StyleSheet.create({
  map: {
    width: "100%",
    height: 400,
  },
});

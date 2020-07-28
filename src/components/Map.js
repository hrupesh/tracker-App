import React from "react";
import { StyleSheet, Text, View } from "react-native";
import MapView, { Polyline } from "react-native-maps";

export default function Map() {
  let points = [];
  for (let i = 0; i < 10; i++) {
    points.push({
      latitude: 20.0380938 + i * 0.0001,
      longitude: 73.80659 + i * 0.0001,
    });
  }

  return (
    <MapView
      style={styles.map}
      initialRegion={{
        latitude: 20.0381938,
        longitude: 73.80659,
        latitudeDelta: 0.01,
        longitudeDelta: 0.01,
      }}
    >
      <Polyline coordinates={points} strokeColor="#212121"  />
    </MapView>
  );
}

const styles = StyleSheet.create({
  map: {
    width: "100%",
    height: 400,
  },
});

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
  asd

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
      <Polyline coordinates={points} strokeColor="#512DF8" />
    </MapView>
  );
}

const styles = StyleSheet.create({
  map: {
    width: "100%",
    height: 400,
  },
});

import React from "react";
import { StyleSheet, Text, View } from "react-native";
import MapView, { Polyline, Marker } from "react-native-maps";
import { FontAwesome5 } from "@expo/vector-icons";

export default function Map() {
  let points = [];
  for (let i = 0; i < 20; i++) {
    if (i % 2 === 0) {
      points.push({
        latitude: 20.0380938 + i * 0.0001,
        longitude: 73.80659 + i * 0.0001,
      });
    } else {
      points.push({
        latitude: 20.0380938 - i * 0.0001,
        longitude: 73.80659 + i * 0.0001,
      });
    }
  }

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
      <Polyline coordinates={points} strokeColor="#212121" />
      {points.map((point) => (
        <Marker
          draggable
          image={{ uri: "https://picsum.photos/49/49" }}
          coordinate={point}
          title={"Dynamic Marker"}
          description={"Dynamic Marker Description"}
        />
      ))}
    </MapView>
  );
}

const styles = StyleSheet.create({
  map: {
    width: "100%",
    height: 400,
  },
});

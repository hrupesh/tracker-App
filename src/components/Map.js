import React from "react";
import { StyleSheet, Text, View } from "react-native";
import MapView, { Polyline, Marker } from "react-native-maps";

export default function Map() {
  let points = [];
  // for (let i = 0; i < 20; i++) {
  //   // if (i % 2 === 0) {
  //   //   points.push({
  //   //     latitude: 20.0382773 + i * 0.0001,
  //   //     longitude: 73.8064166 + i * 0.0001,
  //   //   });
  //   // } else {
  //   //   points.push({
  //   //     latitude: 20.0382773 - i * 0.0001,
  //   //     longitude: 73.8064166 + i * 0.0001,
  //   //   });
  //   }
  // }

  const pos = {
    latitude: 20.0382168,
    longitude: 73.8064859,
  };

  return (
    <MapView
      style={styles.map}
      initialRegion={{
        latitude: 20.0382168,
        longitude: 73.8064859,
        latitudeDelta: 0.001,
        longitudeDelta: 0.001,
      }}
    >
      <Polyline coordinates={points} strokeColor="#212121" strokeWidth={5} />
      {/* {points.map((point) => ( */}
      <Marker
        coordinate={pos}
        title="Location"
        description="Desc"
        style={{ height: 50, width: 50 }}
      />
      {/* ))} */}
    </MapView>
  );
}

const styles = StyleSheet.create({
  map: {
    width: "100%",
    height: 400,
  },
});

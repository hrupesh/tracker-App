import React from "react";
import { StyleSheet, Text, View } from "react-native";
import MapView from "react-native-maps";

export default function Map() {
  return (
    <MapView
    style={{ width:'100%',height:'100%' }}
      initialRegion={{
        latitude: 37.78825,
        longitude: -122.4324,
        latitudeDelta: 0.0922,
        longitudeDelta: 0.0421,
      }}
    />
  );
}

const styles = StyleSheet.create({});

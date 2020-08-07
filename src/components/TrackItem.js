import React from "react";
import { StyleSheet, Text, View } from "react-native";

export default function TrackItem({ track }) {
  return (
    <View style={styles.trackCard}>
      <Text style={styles.name}> {track.name} </Text>
      <Text style={styles.length}> {track.locations.length} Meters </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  trackCard: {
    margin: 15,
    marginTop: 20,
    padding: 15,
    backgroundColor: "#03A9F4",
    borderRadius: 10,
    elevation: 10,
    shadowColor: "red",
    shadowOpacity: 0.8,
    shadowRadius: 2,
    shadowOffset: {
      height: 10,
      width: 10,
    },
    flexDirection: "row",
    justifyContent: "space-between",
  },
});

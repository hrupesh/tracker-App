import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { FontAwesome5 } from "@expo/vector-icons";

export default function TrackItem({ track }) {
  return (
    <View style={styles.trackCard}>
      <View style={{ padding: 5 }}>
        <Text style={styles.name}>{track.name}</Text>
        <Text style={styles.length}>
          Distance: {track.locations.length} Metres
        </Text>
      </View>
      <Text style={styles.length}>
        <FontAwesome5 name="map-marked-alt" size={40} color="#212121" />
      </Text>
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
    shadowColor: "white",
    shadowOpacity: 0.5,
    shadowRadius: 5,
    shadowOffset: {
      height: 1,
      width: 1,
    },
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  name: {
    color: "white",
    fontSize: 20,
    letterSpacing: 1,
    fontFamily: "monospace",
    fontWeight: "bold",
    textShadowOffset: {
      height: 0,
      width: 0,
    },
    textShadowRadius: 6,
    textShadowColor: "#000",
    // height: "120%",
  },
  length: {
    paddingVertical: 5,
    color: "#eee",
    fontSize: 16,
    letterSpacing: 1,
    fontFamily: "monospace",
    alignItems: "baseline",
  },
});

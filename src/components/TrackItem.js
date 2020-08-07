import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { Ionicons } from "@expo/vector-icons";

export default function TrackItem({ track }) {
  return (
    <View style={styles.trackCard}>
      <Text style={styles.name}> {track.name} </Text>
      <Text style={styles.length}>
        <Ionicons name="md-speedometer" size={50} color="white" />
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
    fontSize: 18,
    letterSpacing: 1,
    fontFamily: "monospace",
    fontWeight: "bold",
    textShadowOffset: {
      height: 2,
      width: 0,
    },
    textShadowRadius: 4,
    textShadowColor: "#000",
    height: "120%",
  },
  length: {
    // backgroundColor: "#388E3C",
    borderRadius: 50,
    padding: 10,
    fontWeight: "bold",
    fontSize: 16,
    paddingVertical: 18,
    color: "white",
    // elevation: 10,
    height: 60,
    justifyContent: "center",
    alignItems: "center",
  },
});

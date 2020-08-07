import React from "react";
import { StyleSheet, Text, View } from "react-native";

export default function TrackItem({ track }) {
  return (
    <View style={styles.trackCard}>
      <Text style={styles.name}> {track.name} </Text>
      <Text style={styles.length}> {track.locations.length} Mt. </Text>
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
    height:'120%'
  },
  length:{
      backgroundColor:'red',
      borderRadius:50,
    padding:10,
    
  }
});

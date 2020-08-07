import React from "react";
import { StyleSheet, Text, View } from "react-native";

export default function TrackItem({ track }) {
  return (
    <View style={styles.trackCard}>
      <Text> Track Name: {track.name} </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  trackCard: {
    margin: 15,
  },
});

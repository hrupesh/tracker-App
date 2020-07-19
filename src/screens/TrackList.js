import React from "react";
import { StyleSheet, Text, View } from "react-native";

export default function TrackList() {
  return (
    <View>
      <Text>TrackList Screen</Text>
      <Button
        title="Track Details"
        color="dodgerblue"
        onPress={() => navigation.navigate("TrackDetail")}
      />
    </View>
  );
}

const styles = StyleSheet.create({});

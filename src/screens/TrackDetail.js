import React from "react";
import { StyleSheet, Text, View, Button } from "react-native";

export default function TrackDetail({ navigation }) {
  return (
    <View>
      <Text>TrackDetail Screen</Text>
      <Button
        title="Track  List"
        color="dodgerblue"
        onPress={() => navigation.navigate("TrackList")}
      />
    </View>
  );
}

const styles = StyleSheet.create({});

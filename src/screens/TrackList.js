import React from "react";
import { StyleSheet, Text, View, Button } from "react-native";
import { showMessage, hideMessage } from "react-native-flash-message";

export default function TrackList({ navigation }) {
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

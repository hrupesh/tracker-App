import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { TextInput } from "react-native-gesture-handler";

export default function CreateTrackForm() {
  return (
    <View>
      <TextInput placeholder="Enter Track Name Here...." />
    </View>
  );
}

const styles = StyleSheet.create({});

import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { TextInput } from "react-native-gesture-handler";

export default function CreateTrackForm() {
  return (
    <View style={styles.formContainer}>
      <TextInput style={styles.input} placeholder="Enter Track Name Here...." />
    </View>
  );
}

const styles = StyleSheet.create({
  formContainer: {
    marginHorizontal: 15,
  },
  input:{
      height:40,
      fontSize:20,
      padding:5
  }
});

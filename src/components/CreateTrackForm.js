import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { TextInput } from "react-native-gesture-handler";

export default function CreateTrackForm() {
  return (
    <View style={styles.formContainer}>
      <TextInput
        autoCapitalize="none"
        autoCompleteType="off"
        autoCorrect={false}
        style={styles.input}
        placeholder="Track Name"
        placeholderTextColor="#B2EBF2"
      />
    </View>
  );
}

const styles = StyleSheet.create({
  formContainer: {
    marginHorizontal: 15,
  },
  input: {
    height: 50,
    fontSize: 18,
    letterSpacing:2,
    padding: 5,
    borderBottomColor: "#0097A7",
    borderBottomWidth: 2,
    color: "#0097A7",
    
  },
});

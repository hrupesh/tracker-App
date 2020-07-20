import React from "react";
import { StyleSheet, Text, View, Button } from "react-native";
import {
  FormLabel,
  FormInput,
  FormValidationMessage,
} from "react-native-elements";

export default function SignupScreen({ navigation }) {
  return (
    <View>
      <Text>Signup Screen</Text>
      <Button
        title="Login"
        color="#512DF8"
        onPress={() => navigation.navigate("Login")}
      />
      <Button
        title="Main Flow"
        color="dodgerblue"
        onPress={() => navigation.navigate("mainFlow")}
      />
      <FormLabel>Name</FormLabel>
      <FormInput onChangeText={() => alert("Signup")} />
      <FormValidationMessage>Error message</FormValidationMessage>
    </View>
  );
}

const styles = StyleSheet.create({});

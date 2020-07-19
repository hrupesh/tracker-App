import React from "react";
import { StyleSheet, Text, View, Button } from "react-native";

export default function LoginScreen({ navigation }) {
  return (
    <View>
      <Text>Login Screen</Text>
      <Button
        title="Signup"
        color="#512DF8"
        onPress={() => navigation.navigate("Signup")}
      />
      
    </View>
  );
}

const styles = StyleSheet.create({});

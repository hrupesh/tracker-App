import React from "react";
import { StyleSheet, Text, View, Button } from "react-native";

export default function LoginScreen({ navigation }) {
  return (
    <View>
      <Text>Login Screen</Text>
      <Button
        title="Signup"
        color="#512DF8"
        onPress={() => navigation.navigate("Signup", { show: true })}
      />
    </View>
  );

 
}

LoginScreen.navigationOptions = ({ navigation }) => {
    return {
      header: () => {
        return null;
      },
    };
  };

const styles = StyleSheet.create({});

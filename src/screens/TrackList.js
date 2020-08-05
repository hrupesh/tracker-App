import React, { useState, useEffect, useContext } from "react";
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
      <Button
        onPress={() => {
          /* HERE WE GONE SHOW OUR FIRST MESSAGE */
          showMessage({
            message: "Simple message",
            type: "success",
          });
        }}
        title="Request Details"
        color="#841584"
      />
    </View>
  );
}

const styles = StyleSheet.create({});

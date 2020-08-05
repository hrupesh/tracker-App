import React, { useEffect, useContext } from "react";
import { StyleSheet, Text, View, Button } from "react-native";
import { showMessage, hideMessage } from "react-native-flash-message";

export default function TrackList({ navigation }) {
  const msg = navigation.getParam("message");
  // console.log(msg);

  useEffect(() => {
    if (msg) {
      showMessage({
        message: msg,
        type: "success",
        icon: { icon: "success", position: "left" },
        animationDuration: 500,
        floating: true,
        titleStyle: {
          letterSpacing: 1,
        },
      });
    }
  }, [navigation]);

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

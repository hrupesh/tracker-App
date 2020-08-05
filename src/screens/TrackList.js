import React, { useEffect, useContext, useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  Button,
  ActivityIndicator,
} from "react-native";
import AnimatedLoader from "react-native-animated-loader";
import { showMessage, hideMessage } from "react-native-flash-message";
import { Context as TrackContext } from "../context/TrackContext";

export default function TrackList({ navigation }) {
  const msg = navigation.getParam("message");
  // console.log(msg);
  const { state, fetchTracks } = useContext(TrackContext);

  const [loading, setLoading] = useState(true);

  const getTracks = async () => {
    await fetchTracks();
    setLoading(false);
  };

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
    getTracks();
  }, [navigation]);

  return (
    <View>
      <AnimatedLoader
        visible={!loading}
        overlayColor="#000a"
        // source={{
        //   uri:
        //     "https://assets10.lottiefiles.com/datafiles/qm9uaAEoe13l3eQ/data.json",
        // }}
        animationStyle={{ width: 500, height: 500 }}
        speed={1.5}
      />
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

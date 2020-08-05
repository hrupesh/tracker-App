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
import { FlatList } from "react-native-gesture-handler";

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
      {loading ? (
        <AnimatedLoader
          visible
          overlayColor="#1d2c4daf"
          animationStyle={{ width: 500, height: 500 }}
          speed={1.5}
        />
      ) : null}
      {loading ? null : (
        <FlatList
          data={state.tracks}
          keyExtractor={(track) => track._id}
          renderItem={({ item }) => {
            return <Text>Track : {item.name}</Text>;
          }}
        />
      )}
    </View>
  );
}

const styles = StyleSheet.create({});

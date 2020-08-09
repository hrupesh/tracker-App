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
import TrackItem from "../components/TrackItem";
import { navigate } from "../navigationRef";

export default function TrackList({ navigation }) {
  const msg = navigation.getParam("message");
  // console.log(msg);
  const { state, fetchTracks } = useContext(TrackContext);

  const [loading, setLoading] = useState(true);

  const revtracks = Array.prototype.reverse(state.tracks);

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
        duration: 4000,
      });
    }
    getTracks();
  }, [navigation]);

  return (
    <View style={styles.container}>
      <Text style={styles.heading}> Your Tracks </Text>
      {loading ? (
        <AnimatedLoader
          visible
          overlayColor="#1d2c4daf"
          animationStyle={{ width: 500, height: 500 }}
          speed={1}
        />
      ) : null}
      {loading ? null : (
        <FlatList
          // refreshControl={true}
          refreshing={true}
          data={revtracks}
          keyExtractor={(track) => track._id}
          renderItem={({ item }) => {
            return <TrackItem navigation={navigation} track={item} />;
          }}
        />
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#1d2c4d",
  },
  heading: {
    color: "white",
    fontSize: 28,
    letterSpacing: 2,
    fontFamily: "monospace",
    fontWeight: "bold",
    textShadowOffset: {
      height: 0,
      width: 0,
    },
    marginVertical: 15,
    textShadowRadius: 10,
    textShadowColor: "dodgerblue",
    textAlign: "center",
    // height: "120%",
  },
});

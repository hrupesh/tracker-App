import React, { useEffect, useContext, useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  Button,
  ActivityIndicator,
  Image,
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

  // const revtracks = state.tracks.reverse();
  // console.log(revtracks);

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
      {state.tracks.length < 1 && !loading ? (
        <View>
          <Image
            source={{
              uri:
                "data:image/jpeg;base64,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",
            }}
            style={{ width: 200, height: 200 }}
          />
          <Text style={styles.heading}>
            Oops! looks like you have not created any tracks yet. Why don't you
            create one.
          </Text>
        </View>
      ) : null}
      {loading ? null : (
        <FlatList
          // refreshControl={true}
          refreshing={true}
          data={state.tracks.reverse()}
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

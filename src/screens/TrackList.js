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
import { AntDesign } from "@expo/vector-icons";
import * as Animatable from "react-native-animatable";

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
        <Animatable.View
          style={{
            justifyContent: "center",
            alignItems: "center",
            height: "100%",
          }}
          animation="fadeInDown"
          iterationCount={1}
          duration={1500}
        >
          <Image
            source={require("../../assets/sponge.gif")}
            style={{ width: "100%", height: 400 }}
          />
          <Text style={styles.oops}>
            Oops! looks like you have not created any tracks yet. Why don't you
            create one.
          </Text>
          <Animatable.View
            animation="rubberBand"
            iterationCount="infinite"
            duration={1000}
            direction="alternate"
          >
            <AntDesign
              style={styles.downicon}
              name="arrowdown"
              size={24}
              color="black"
            />
          </Animatable.View>
        </Animatable.View>
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
  oops: {
    color: "#FFC107",
    fontSize: 18,
    letterSpacing: 2,
    fontFamily: "monospace",
    fontWeight: "bold",
    textShadowOffset: {
      height: 1,
      width: 0,
    },
    marginVertical: 15,
    textShadowRadius: 6,
    textShadowColor: "red",
    textAlign: "center",
    // height: "120%",
  },
  downicon: {
    color: "tomato",
    fontSize: 50,
    fontWeight: "bold",
    marginTop: 40,
    fontWeight: "bold",
    textShadowColor: "red",
    textShadowOffset: {
      height: 0,
      width: 0,
    },
    textShadowRadius: 6,
  },
});

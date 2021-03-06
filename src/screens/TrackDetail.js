import React, { useContext } from "react";
import {
  StyleSheet,
  Text,
  View,
  Button,
  SafeAreaView,
  Alert,
} from "react-native";
import MapView, { Polyline } from "react-native-maps";
import { Ionicons, MaterialIcons } from "@expo/vector-icons";
import { Context as TrackContext } from "../context/TrackContext";
import * as Animatable from "react-native-animatable";

export default function TrackDetail({ navigation }) {
  const { delTrack } = useContext(TrackContext);
  const track = navigation.getParam("track");

  // console.log(navigation);

  console.log(track);

  const deleteTrack = async (track) => {
    await delTrack(navigation.getParam("track"));
    navigation.navigate("TrackList", {
      message: "Track Deleted",
      type: "danger",
    });
    // alert(" ❌ Track Deleted! ❌ ");
  };

  const confirmDelete = () => {
    Alert.alert(
      "Are you sure?",
      "Deletion is irreverisble 💀 ",
      [
        {
          text: "No!",
          // onPress: () => console.log("Cancel Pressed"),
          style: "cancel",
        },
        {
          text: "Yes, Delete",
          onPress: () => deleteTrack(),
          style: "destructive",
        },
      ],
      { cancelable: false }
    );
    // console.log("Deleting.....");
  };

  const mapStyle = [
    {
      elementType: "geometry",
      stylers: [
        {
          color: "#1d2c4dff",
        },
      ],
    },
    {
      elementType: "labels.text.fill",
      stylers: [
        {
          color: "#8ec3b9",
        },
      ],
    },
    {
      elementType: "labels.text.stroke",
      stylers: [
        {
          color: "#1a3646",
        },
      ],
    },
    {
      featureType: "administrative.country",
      elementType: "geometry.stroke",
      stylers: [
        {
          color: "#4b6878",
        },
      ],
    },
    {
      featureType: "administrative.land_parcel",
      elementType: "labels.text.fill",
      stylers: [
        {
          color: "#64779e",
        },
      ],
    },
    {
      featureType: "administrative.province",
      elementType: "geometry.stroke",
      stylers: [
        {
          color: "#4b6878",
        },
      ],
    },
    {
      featureType: "landscape.man_made",
      elementType: "geometry.stroke",
      stylers: [
        {
          color: "#334e87",
        },
      ],
    },
    {
      featureType: "landscape.natural",
      elementType: "geometry",
      stylers: [
        {
          color: "#023e58",
        },
      ],
    },
    {
      featureType: "poi",
      elementType: "geometry",
      stylers: [
        {
          color: "#283d6a",
        },
      ],
    },
    {
      featureType: "poi",
      elementType: "labels.text.fill",
      stylers: [
        {
          color: "#6f9ba5",
        },
      ],
    },
    {
      featureType: "poi",
      elementType: "labels.text.stroke",
      stylers: [
        {
          color: "#1d2c4d",
        },
      ],
    },
    {
      featureType: "poi.park",
      elementType: "geometry.fill",
      stylers: [
        {
          color: "#023e58",
        },
      ],
    },
    {
      featureType: "poi.park",
      elementType: "labels.text.fill",
      stylers: [
        {
          color: "#3C7680",
        },
      ],
    },
    {
      featureType: "road",
      elementType: "geometry",
      stylers: [
        {
          color: "#304a7d",
        },
      ],
    },
    {
      featureType: "road",
      elementType: "labels.text.fill",
      stylers: [
        {
          color: "#98a5be",
        },
      ],
    },
    {
      featureType: "road",
      elementType: "labels.text.stroke",
      stylers: [
        {
          color: "#1d2c4d",
        },
      ],
    },
    {
      featureType: "road.highway",
      elementType: "geometry",
      stylers: [
        {
          color: "#2c6675",
        },
      ],
    },
    {
      featureType: "road.highway",
      elementType: "geometry.stroke",
      stylers: [
        {
          color: "#255763",
        },
      ],
    },
    {
      featureType: "road.highway",
      elementType: "labels.text.fill",
      stylers: [
        {
          color: "#b0d5ce",
        },
      ],
    },
    {
      featureType: "road.highway",
      elementType: "labels.text.stroke",
      stylers: [
        {
          color: "#023e58",
        },
      ],
    },
    {
      featureType: "transit",
      elementType: "labels.text.fill",
      stylers: [
        {
          color: "#98a5be",
        },
      ],
    },
    {
      featureType: "transit",
      elementType: "labels.text.stroke",
      stylers: [
        {
          color: "#1d2c4d",
        },
      ],
    },
    {
      featureType: "transit.line",
      elementType: "geometry.fill",
      stylers: [
        {
          color: "#283d6a",
        },
      ],
    },
    {
      featureType: "transit.station",
      elementType: "geometry",
      stylers: [
        {
          color: "#3a4762",
        },
      ],
    },
    {
      featureType: "water",
      elementType: "geometry",
      stylers: [
        {
          color: "#0097A7",
        },
      ],
    },
    {
      featureType: "water",
      elementType: "labels.text.fill",
      stylers: [
        {
          color: "#4e6d70",
        },
      ],
    },
  ];

  return (
    <SafeAreaView style={styles.container}>
      <MapView
        customMapStyle={mapStyle}
        style={styles.map}
        initialRegion={{
          ...track.locations[0].coords,
          latitudeDelta: 0.01,
          longitudeDelta: 0.01,
        }}
        followsUserLocation={true}
      >
        <Polyline
          coordinates={track.locations.map((t) => t.coords)}
          strokeColor="#448AFFAF"
          strokeWidth={6}
        />
      </MapView>
      <Ionicons
        style={styles.icon}
        name="ios-arrow-round-back"
        size={24}
        color="black"
        onPress={() => navigation.goBack()}
      />
      <Text style={styles.name}>{track.name}</Text>
      {/* <Animatable.View animation="slideInRight" iterationCount={1}> */}
      <MaterialIcons
        name="delete-sweep"
        size={24}
        color="black"
        style={styles.deleteicon}
        onPress={() => confirmDelete()}
      />
      {/* Todo : Add alert to confirm delete and make call to delete API endpoint   */}
      {/* </Animatable.View> */}
      <Text style={styles.distance}>
        Approx. {track.locations.length} Meters
      </Text>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#1d2c4d",
  },
  map: {
    width: "100%",
    height: "100%",
  },
  name: {
    position: "absolute",
    color: "white",
    fontWeight: "bold",
    fontSize: 22,
    width: "100%",
    textAlign: "center",
    letterSpacing: 2,
    fontFamily: "monospace",
    overflow: "scroll",
    textShadowColor: "#000",
    textShadowRadius: 6,
    textShadowOffset: {
      height: 0,
      width: 0,
    },
    // marginVertical: 15,
    paddingVertical: 15,
    backgroundColor: "#1d2c4d8f",
  },
  icon: {
    position: "absolute",
    // top: 2,
    left: 15,
    color: "white",
    zIndex: 9,
    fontSize: 40,
    textShadowColor: "#000",
    textShadowRadius: 6,
    textShadowOffset: {
      height: 0,
      width: 0,
    },
    marginTop: 15,
    // paddingVertical: 15,
    // backgroundColor: "#1d2c4d4f",
    paddingHorizontal: 5,
    borderRadius: 50,
  },
  deleteicon: {
    position: "absolute",
    bottom: 50,
    right: 15,
    color: "tomato",
    zIndex: 10,
    fontSize: 60,
    textShadowColor: "red",
    textShadowRadius: 10,
    textShadowOffset: {
      height: 0,
      width: 0,
    },
    marginTop: 15,
    // paddingVertical: 15,
    // backgroundColor: "#1d2c4d4f",
    paddingHorizontal: 5,
    borderRadius: 50,
  },
  distance: {
    position: "absolute",
    bottom: 0,
    right: 0,
    color: "white",
    fontWeight: "100",
    fontFamily: "monospace",
    fontSize: 15,
    letterSpacing: 0,
    overflow: "scroll",
    textShadowColor: "#000",
    textShadowRadius: 6,
    textShadowOffset: {
      height: 1,
      width: 1,
    },
    marginBottom: 7,
    marginRight: 10,
  },
});

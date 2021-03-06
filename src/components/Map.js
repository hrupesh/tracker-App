import React, { useContext } from "react";
import {
  StyleSheet,
  Text,
  View,
  ActivityIndicator,
  Platform,
} from "react-native";
import MapView, { Polyline, Marker, Circle } from "react-native-maps";
import { Context as LocationContext } from "../context/LocationContext";
import { Fontisto } from "@expo/vector-icons";
import * as Animatable from "react-native-animatable";

export default function Map() {
  const {
    state: { currentLocation, locations },
  } = useContext(LocationContext);

  // console.log(locations);

  // console.log(currentLocation);
  // console.log(currentLocation.coords["accuracy"]);

  // console.log(Platform);

  if (!currentLocation) {
    return (
      <ActivityIndicator
        // animating
        color="#00BCD4"
        size={Platform.OS === "android" ? 200 : "large"}
        style={{ height: "70%" }}
      />
    );
  }

  // let points = [];

  // for (let i = 0; i < 10; i++) {
  //   points.push({
  //     latitude: 20.0382168 + i * 0.0001,
  //     longitude: 73.8064859 + i * 0.0001,
  //   });
  // }

  // var dpoints = [];

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
    <MapView
      customMapStyle={mapStyle}
      style={styles.map}
      initialRegion={{
        ...currentLocation.coords,
        latitudeDelta: 0.01,
        longitudeDelta: 0.01,
      }}
      followsUserLocation={true}
      showsMyLocationButton={true}
      region={{
        ...currentLocation.coords,
        latitudeDelta: 0.01,
        longitudeDelta: 0.01,
      }}
    >
      <Marker
        draggable
        coordinate={{ ...currentLocation.coords }}
        title="You are here"
      >
        <Animatable.View
          animation="zoomIn"
          iterationCount="infinite"
          easing="linear"
          direction="alternate"
          useNativeDriver={true}
        >
          <Fontisto name="map-marker-alt" size={50} color="tomato" />
        </Animatable.View>
      </Marker>
      {/* <Polyline coordinates={locations.map((loc) => loc.coords)} /> */}
      <Circle
        center={currentLocation.coords}
        radius={
          currentLocation.coords["accuracy"]
            ? currentLocation.coords["accuracy"]
            : 100
        }
        strokeWidth={10}
        strokeColor="#0288D12F"
        fillColor="#03A9F44F"
      />
      <Polyline
        coordinates={locations.map((loc) => loc.coords)}
        strokeColor="#FF52524F"
        strokeWidth={6}
      />
      {/* {points.map((point) => (
        <Marker key={point.latitude} coordinate={point} title="Hi!" />
      ))} */}
    </MapView>
  );
}

const styles = StyleSheet.create({
  map: {
    width: "100%",
    height: "65%",
  },
});

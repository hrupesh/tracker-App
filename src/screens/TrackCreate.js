// import "../_mockLocation";
import React, { useContext, useCallback } from "react";
import { withNavigationFocus } from "react-navigation";
import { StyleSheet, SafeAreaView } from "react-native";
import { Text } from "react-native-elements";
import Map from "../components/Map";
import { Context as LocationContext } from "../context/LocationContext";
import useLocation from "../hooks/useLocation";
import CreateTrackForm from "../components/CreateTrackForm";

const TrackCreate = ({ isFocused }) => {
  const { state, addLocation } = useContext(LocationContext);

  const [error] = useLocation(
    isFocused || state.recording,
    (location) => {
      addLocation(location, state.recording);
    },
    state.recording
  );

  // console.log(isFocused);
  console.log(state.locations.length);

  return (
    <SafeAreaView style={styles.container}>
      <Map />
      <CreateTrackForm />
      {error ? <Text>Error : {error}</Text> : null}
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#1d2c4dff",
  },
});

export default withNavigationFocus(TrackCreate);

import React, { useState, useContext } from "react";
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Animated,
  Easing,
} from "react-native";
import * as Animatable from "react-native-animatable";
import { TextInput } from "react-native-gesture-handler";
import { Context as LocationContext } from "../context/LocationContext";

export default function CreateTrackForm() {
  const [name, setName] = useState("");

  const { state, startRecording, stopRecording, changeName } = useContext(
    LocationContext
  );

  console.log(state.locations + state.recording);

  return (
    <Animatable.View
      animation="fadeInUp"
      iterationCount={1}
      direction="normal"
      style={styles.formContainer}
    >
      <TextInput
        autoCapitalize="none"
        autoCompleteType="off"
        autoCorrect={false}
        style={styles.input}
        placeholder="Track Name"
        placeholderTextColor="#B2EBF2"
        clearButtonMode="always"
        selectTextOnFocus
        onChangeText={changeName}
      />
      {!state.recording ? (
        <TouchableOpacity activeOpacity={0.6} onPress={startRecording}>
          <Animatable.View
            style={styles.btn}
            easing="ease"
            animation="pulse"
            direction="normal"
            iterationCount={"infinite"}
          >
            <Text style={styles.btnText}>Record</Text>
          </Animatable.View>
        </TouchableOpacity>
      ) : (
        <TouchableOpacity activeOpacity={0.6} onPress={stopRecording}>
          <Animatable.View
            style={styles.btn2}
            easing="linear"
            animation="flash"
            direction="normal"
            iterationCount={"infinite"}
          >
            <Text style={styles.btnText}> Stop Recording</Text>
          </Animatable.View>
        </TouchableOpacity>
      )}
    </Animatable.View>
  );
}

const styles = StyleSheet.create({
  formContainer: {
    marginHorizontal: 15,
  },
  input: {
    height: 50,
    fontSize: 18,
    letterSpacing: 2,
    padding: 5,
    borderBottomColor: "#B2EBF2",
    borderRadius: 5,
    borderBottomWidth: 2,
    color: "#0097A7",
  },
  btn: {
    marginTop: 30,
    margin: 25,
    backgroundColor: "#00BCD4",
    padding: 10,
    borderRadius: 50,
    elevation: 10,
    width: "75%",
    alignSelf: "center",
  },
  btn2: {
    marginTop: 30,
    margin: 25,
    backgroundColor: "#FF525F",
    padding: 10,
    borderRadius: 5,
    elevation: 10,
    width: "75%",
    alignSelf: "center",
  },
  btnText: {
    textAlign: "center",
    fontSize: 18,
    color: "white",
    letterSpacing: 4,
    textTransform: "uppercase",
    fontWeight: "bold",
    fontFamily: "Roboto",
  },
});

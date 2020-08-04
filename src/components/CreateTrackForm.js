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
import { AntDesign, FontAwesome } from "@expo/vector-icons";

export default function CreateTrackForm() {
  const [name, setName] = useState("");

  const { state, startRecording, stopRecording, changeName } = useContext(
    LocationContext
  );

  //   console.log(state.currentLocation);
  //   console.log(state.locations);
  //   console.log(state.recording);

  return (
    <Animatable.View
      animation="fadeInUp"
      iterationCount={1}
      direction="normal"
      style={styles.formContainer}
    >
      <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
        <Text style={styles.title}>New Track</Text>
        {!state.recording ? (
          <TouchableOpacity activeOpacity={0.6} onPress={startRecording}>
            <Animatable.View
              style={styles.btn}
              easing="ease"
              animation="pulse"
              direction="normal"
              iterationCount={"infinite"}
            >
              <Text style={styles.btnText}>
                <AntDesign name="play" size={60} color="#4CAF50" />
              </Text>
            </Animatable.View>
          </TouchableOpacity>
        ) : (
          <TouchableOpacity activeOpacity={0.6} onPress={stopRecording}>
            <Animatable.View
              style={styles.btn}
              easing="linear"
              animation="flash"
              direction="normal"
              iterationCount={"infinite"}
            >
              <Text style={styles.btnText}>
                <FontAwesome name="stop-circle" size={60} color="#FF5252" />
              </Text>
            </Animatable.View>
          </TouchableOpacity>
        )}
      </View>
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
        value={state.name}
      />
      {state.locations.length > 4 ? (
        <TouchableOpacity activeOpacity={0.6} onPress={stopRecording}>
          <Animatable.View
            style={styles.btn3}
            easing="linear"
            animation="lightSpeedIn"
            direction="normal"
            iterationCount={1}
          >
            <Text style={styles.btnText}>Save</Text>
          </Animatable.View>
        </TouchableOpacity>
      ) : null}
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
    marginTop: 20,
    margin: 15,
    backgroundColor: "#00BCD400",
    // padding: 10,
    borderRadius: 50,
    elevation: 20,
    // width: "75%",
    alignSelf: "center",
  },
  btn2: {
    marginTop: 30,
    margin: 25,
    backgroundColor: "#FF525F00",
    // padding: 10,
    borderRadius: 5,
    elevation: 30,
    width: "75%",
    alignSelf: "center",
  },
  btn3: {
    marginTop: 30,
    margin: 25,
    backgroundColor: "#03A9F4",
    padding: 10,
    borderRadius: 50,
    elevation: 30,
    width: "90%",
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
  title: {
    marginTop: 40,
    marginLeft: 0,
    fontSize: 22,
    fontWeight: "100",
    letterSpacing: 2,
    color: "white",
    textShadowColor: "black",
    textShadowRadius: 100,
    textShadowOffset: {
      height: 0,
      width: 0,
    },
  },
});

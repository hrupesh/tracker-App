import React from "react";
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

export default function CreateTrackForm() {
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
      />
      <TouchableOpacity
        activeOpacity={0.6}
        // onPress={() => validateForm(email, password)}
      >
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

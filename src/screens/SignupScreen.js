import React from "react";
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  StatusBar,
  ImageBackground,
  TextInput,
} from "react-native";
import { Input } from "react-native-elements";
import { MaterialIcons } from "@expo/vector-icons";

export default function SignupScreen({ navigation }) {
  return (
    <ImageBackground
      style={styles.container}
      resizeMethod="resize"
      resizeMode="cover"
      fadeDuration={0.5}
      source={{ uri: "https://picsum.photos/2000/3000" }}
    >
      <StatusBar backgroundColor="#512D88" barStyle="light-content" />
      <View style={styles.formContainer}>
        <Text style={styles.heading}>Add New Blog</Text>
        <View style={styles.inputContainer}>
          <Text style={styles.label}>Title</Text>
          <TextInput
            autoCapitalize="words"
            autoCorrect={false}
            autoCompleteType="off"
            style={styles.input}
            // onChangeText={(text) => setTitle(text)}
          />
          {/* {titleError ? <Text style={styles.error}> {titleError} </Text> : null} */}
        </View>
        <View style={styles.inputContainer}>
          <Text style={styles.label}>Body</Text>
          <TextInput
            style={styles.input}
            // onChangeText={(text) => setBody(text)}
          />
          {/* {bodyError ? <Text style={styles.error}> {bodyError} </Text> : null} */}
        </View>
        <TouchableOpacity
          activeOpacity={0.6}
          //   onPress={() => submitHandler(title, body)}
          style={styles.btnContainer}
        >
          <View style={styles.btn}>
            <Text style={styles.btnText}>Submit</Text>
          </View>
        </TouchableOpacity>
      </View>
    </ImageBackground>
  );
}

SignupScreen.navigationOptions = ({ navigation }) => {
  return {
    header: () => {
      return null;
    },
  };
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#512D88",
    padding: 25,
    justifyContent: "center",
    alignItems: "center",
  },
  error: {
    color: "#D32F2F",
    paddingVertical: 5,
    marginLeft: 5,
    letterSpacing: 0.5,
    backgroundColor: "#FFCDD2",
  },
  heading: {
    fontSize: 24,
    letterSpacing: 2,
    color: "#512DA8",
    textAlign: "center",
    borderLeftColor: "#512DA8",
    borderLeftWidth: 5,
    borderRightColor: "#512DA8",
    borderRightWidth: 5,
    paddingHorizontal: 10,
    paddingVertical: 5,
    backgroundColor: "#ddd",
  },
  formContainer: {
    width: "100%",
    backgroundColor: "#eee",
    marginVertical: 15,
    paddingVertical: 25,
    borderRadius: 10,
    elevation: 10,
  },
  blogContainer: {
    width: "100%",
    backgroundColor: "#eee",
    marginVertical: 15,
    paddingVertical: 5,
    borderRadius: 10,
    elevation: 10,
  },
  inputContainer: {
    padding: 25,
  },
  label: {
    fontSize: 18,
    color: "#512DA8",
    letterSpacing: 2,
  },
  title: {
    fontSize: 22,
    color: "#512DA8",
    letterSpacing: 2,
    fontWeight: "bold",
    paddingBottom: 5,
  },
  body: {
    fontSize: 18,
    color: "#512DA8",
    letterSpacing: 1,
    paddingVertical: 25,
  },
  input: {
    backgroundColor: "#eee",
    height: 50,
    fontSize: 18,
    marginLeft: 5,
    borderBottomColor: "#512DA8",
    borderBottomWidth: 2,
  },
  btn: {
    marginTop: 30,
    margin: 25,
    backgroundColor: "#512DF8",
    padding: 10,
    borderRadius: 25,
    elevation: 10,
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

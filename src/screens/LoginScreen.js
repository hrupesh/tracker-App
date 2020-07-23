import React, { useEffect, useRef, useState, useContext } from "react";
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  StatusBar,
  ImageBackground,
  TextInput,
  KeyboardAvoidingView,
  Alert,
  Animated,
  Image,
} from "react-native";
import { Context as AuthContext } from "../context/AuthContext";
import AnimatedLoader from "react-native-animated-loader";

export default function LoginScreen({ navigation }) {
  useEffect(() => {
    fadeIn();
    fadeInBtn();
  }, []);

  const { state, signup } = useContext(AuthContext);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [emailErr, setEmailErr] = useState("");
  const [passwordErr, setPasswordErr] = useState("");
  const [showLoader, setShowLoader] = useState(false);

  const fadeAnim = useRef(new Animated.Value(-1000)).current;

  const fadeAnimBtn = useRef(new Animated.Value(2000)).current;

  const fadeIn = () => {
    // alert("Fading IN");
    Animated.timing(fadeAnim, {
      toValue: 0,
      duration: 1500,
      useNativeDriver: false,
    }).start();
  };

  const validateForm = async (email, password) => {
    setShowLoader(true);

    var valid = false;

    var emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    if (!emailPattern.test(email)) {
      setEmailErr("Please enter a valid email");
      valid = false;
    } else {
      setEmailErr("");
      valid = true;
    }

    if (!password) {
      setPasswordErr("Please enter a valid Password");
      valid = false;
    } else {
      setPasswordErr("");
      valid = true;
    }

    if (valid) {
      await signup({ email, password });
    //   setShowLoader(false);
      return null
    } else {
      setShowLoader(false);
    }
  };

  const fadeInBtn = () => {
    // alert("Fading IN");
    Animated.timing(fadeAnimBtn, {
      toValue: 0,
      duration: 1500,
      useNativeDriver: false,
    }).start();
  };

  if (navigation.getParam("show")) {
    fadeIn();
  }

  const outAnimation = () => {
    // alert("Fading IN");
    Animated.timing(fadeAnim, {
      toValue: -1000,
      duration: 500,
      useNativeDriver: false,
    }).start(({ finished }) => {
      //   alert("Animation Finished!");
      navigation.navigate("Signup",{
          show: true
      });
    });
  };

  return (
    <ImageBackground
      style={styles.container}
      resizeMethod="resize"
      resizeMode="cover"
      fadeDuration={0.5}
      source={{ uri: "https://picsum.photos/3000/3000" }}
    >
      <AnimatedLoader
        visible={showLoader}
        overlayColor="#000a"
        // source={{
        //   uri:
        //     "https://assets10.lottiefiles.com/datafiles/qm9uaAEoe13l3eQ/data.json",
        // }}
        animationStyle={styles.lottie}
        speed={1.5}
      />
      <StatusBar backgroundColor="#512D88" barStyle="light-content" />
      <Animated.View
        style={[
          styles.formContainer,
          {
            transform: [
              {
                translateY: fadeAnim,
              },
            ],
          },
        ]}
      >
        <Text style={styles.heading}> Login </Text>
        {state.errorMessage ? (
          <Text style={styles.error2}>{state.errorMessage}</Text>
        ) : null}
        <View style={styles.inputContainer}>
          <Text style={styles.label}>Email</Text>
          <TextInput
            blurOnSubmit
            autoCapitalize="none"
            autoCorrect={false}
            autoCompleteType="off"
            keyboardAppearance="dark"
            textContentType="emailAddress"
            keyboardType="email-address"
            style={styles.input}
            onChangeText={setEmail}
          />
          {emailErr ? <Text style={styles.error}> {emailErr} </Text> : null}
        </View>
        <View style={styles.inputContainer}>
          <Text style={styles.label}>Password</Text>
          <TextInput
            style={styles.input}
            autoCorrect={false}
            autoCompleteType="off"
            keyboardAppearance="dark"
            textContentType="password"
            secureTextEntry={true}
            onChangeText={setPassword}
          />
          {/* <Text>{email + password}</Text> */}
          {passwordErr ? (
            <Text style={styles.error}> {passwordErr} </Text>
          ) : null}
        </View>

        <TouchableOpacity
          activeOpacity={0.6}
          onPress={() => validateForm(email, password)}
          style={styles.btnContainer}
        >
          <Animated.View
            style={[
              styles.btn,
              {
                transform: [
                  {
                    translateY: fadeAnimBtn,
                  },
                ],
              },
            ]}
          >
            <Text style={styles.btnText}>Submit</Text>
          </Animated.View>
        </TouchableOpacity>
        <View style={{ flexDirection: "row", justifyContent: "flex-start" }}>
          <Text style={styles.loginLink}>Don't have an account?</Text>
          <TouchableOpacity activeOpacity={0.15} onPress={outAnimation}>
            <Text style={styles.loginhref}>Register </Text>
          </TouchableOpacity>
        </View>
      </Animated.View>
    </ImageBackground>
  );
}

LoginScreen.navigationOptions = ({ navigation }) => {
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
  error2: {
    color: "#D32F2F",
    margin: 15,
    marginBottom: 0,
    padding: 15,
    letterSpacing: 0.5,
    backgroundColor: "#FFCDD2",
    fontSize: 13,
    fontWeight: "bold",
    elevation: 10,
    borderRadius: 10,
    borderLeftColor: "#FF5252",
    borderLeftWidth: 4,
    borderRightColor: "#FF5252",
    borderRightWidth: 4,
  },
  heading: {
    fontSize: 32,
    letterSpacing: 4,
    fontWeight: "bold",
    fontFamily: "Roboto",
    color: "#512DF8",
    textAlign: "center",
    borderLeftColor: "#512DF8",
    borderLeftWidth: 5,
    borderRightColor: "#512DF8",
    borderRightWidth: 5,
    paddingHorizontal: 10,
    paddingVertical: 5,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#eee",
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
  loginLink: {
    paddingLeft: 35,
    marginVertical: 10,
    fontSize: 15,
  },
  loginhref: {
    marginVertical: 8,
    margin: 5,
    fontSize: 16,
    color: "blue",
    letterSpacing: 0,
    paddingBottom: 1,
    borderBottomWidth: 2,
    borderBottomColor: "blue",
    fontWeight: "bold",
  },
  lottie: {
    width: 100,
    height: 100,
  },
});

import React, { useContext, useEffect } from "react";
import { StyleSheet, Text, View, Image, StatusBar } from "react-native";
import { Context as AuthContext } from "../context/AuthContext";

export default function LoadingScreen() {
  const { localLogin } = useContext(AuthContext);

  useEffect(() => {
    setTimeout(() => {
      localLogin();
    }, 4000);
  }, []);

  return (
    <View style={styles.container}>
      <StatusBar
        backgroundColor="#2700730F"
        animated={true}
        barStyle="light-content"
        translucent
      />
      <Image
        style={styles.loader}
        source={require("../../assets/loading.gif")}
        resizeMode="cover"
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#270073",
    justifyContent: "center",
    alignItems: "center",
  },
  loader: {
    height: "100%",
    width: "100%",
  },
});

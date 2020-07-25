import React, { useContext, useEffect } from "react";
import { StyleSheet, Text, View, Image, StatusBar } from "react-native";
import { Context as AuthContext } from "../context/AuthContext";

export default function loadingScreen() {
  const { localLogin } = useContext(AuthContext);

  useEffect(() => {
    // localLogin();
  }, []);

  return (
    <View style={styles.container}>
      <StatusBar backgroundColor="#270073" 
       animated={true}
       barStyle="dark-content"
       translucent
       
      />
      <Image
        style={styles.loader}
        source={{
          uri:
            "https://cdn.dribbble.com/users/1162077/screenshots/4382009/animated-pattern.gif",
        }}
        resizeMode="cover"
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#ccc",
  },
  loader: {
    height: "100%",
    width: "100%",
  },
});

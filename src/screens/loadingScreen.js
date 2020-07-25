import React, { useContext, useEffect } from "react";
import { StyleSheet, Text, View, Image } from "react-native";
import { Context as AuthContext } from "../context/AuthContext";

export default function loadingScreen() {
  const { localLogin } = useContext(AuthContext);

  useEffect(() => {
    // localLogin();
  }, []);

  return (
    <View style={styles.container}>
      <Image
        style={styles.loader}
        source={{
          uri:
            "https://i.pinimg.com/originals/2f/eb/fd/2febfd017af4653f41ca4785d1db99e4.gif",
        }}
        resizeMode="cover"
        resizeMethod="resize"

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
    height: '100%',
    width: '100%',
  },
});

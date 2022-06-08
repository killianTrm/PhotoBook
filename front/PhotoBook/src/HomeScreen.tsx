import React from "react";
import { StyleSheet, Text, View } from "react-native";

const HomeScreen = () => {
    return (
        <View style={styles.mainContainer}>
        <Text style={styles.splashscreen}>Home Screen</Text>
        </View>
    );
  };

  const styles = StyleSheet.create({
    mainContainer: {
      alignItems: "center",
      justifyContent: "center",
      backgroundColor: "white",
      height: "100%",
    },
    splashscreen: {
      fontSize: 50,
      fontWeight: "bold",
    },
  });
  export default HomeScreen;
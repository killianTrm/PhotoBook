import { NativeStackScreenProps } from "@react-navigation/native-stack";
import React, { useEffect, useLayoutEffect } from "react";
import { StyleSheet, Text, View } from "react-native";
import { RootStackParamList } from "../navigation";
import { useAppSelector } from "../redux/hooks";
import { selectAuthentication } from "../redux/slices/authentication.slice";


const LegalScreen = () => {
    return (
        <View style={styles.mainContainer}>
        <Text style={styles.legalscreen}> Hello Legal</Text>
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
    legalscreen: {
      fontSize: 50,
      fontWeight: "bold",
    },
  });
  export default LegalScreen;
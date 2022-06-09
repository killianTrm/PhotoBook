import { NativeStackScreenProps } from "@react-navigation/native-stack";
import React, { useEffect, useLayoutEffect } from "react";
import { Button, StyleSheet, Text, View } from "react-native";
import api from "../api";
import { RootStackParamList } from "../navigation";
import { useAppDispatch, useAppSelector } from "../redux/hooks";
import { disconnect, selectAuthentication } from "../redux/slices/authentication.slice";


const SettingsScreen = () => {
  const dispatch = useAppDispatch();
  const onPressDisconnect = () => {
    dispatch(disconnect(undefined));
    api.disconnect();
  };
    return (
        <View style={styles.mainContainer}>
        <Text style={styles.legalscreen}> Hello Settings</Text>
        <Button title="Disconnect" onPress={onPressDisconnect} />
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
  export default SettingsScreen;
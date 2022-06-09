import { NativeStackScreenProps } from "@react-navigation/native-stack";
import React, { useEffect, useLayoutEffect } from "react";
import { StyleSheet, Text, View } from "react-native";
import { RootStackParamList } from "../navigation";
import { useAppSelector } from "../redux/hooks";
import { selectAuthentication } from "../redux/slices/authentication.slice";

type HomeProps = NativeStackScreenProps<RootStackParamList, 'Home' >;
const HomeScreen = ({ navigation }: HomeProps) => {
  const authentication = useAppSelector(selectAuthentication);
  useLayoutEffect(() => {
    if(!authentication.user){
      navigation.navigate('Login');
    }
  }, [authentication])
    return (
        <View style={styles.mainContainer}>
        <Text style={styles.homescreen}> Hello {authentication.user?.displayName}</Text>
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
    homescreen: {
      fontSize: 50,
      fontWeight: "bold",
    },
  });
  export default HomeScreen;
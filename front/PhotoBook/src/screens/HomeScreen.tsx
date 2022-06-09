import { NativeStackScreenProps } from "@react-navigation/native-stack";
import React, { useEffect, useLayoutEffect } from "react";
import { StyleSheet, Text, View } from "react-native";
import { RootStackParamList } from "../navigation";
import { useAppSelector } from "../redux/hooks";
import { selectAuthentication } from "../redux/slices/authentication.slice";
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import WallScreen from "./WallScreen";
import LegalScreen from "./LegalScreen";
import SettingsScreen from "./SettingsScreen";

type HomeProps = NativeStackScreenProps<RootStackParamList, 'Home' >;

const Tab = createBottomTabNavigator();

const HomeScreen = ({ navigation }: HomeProps) => {
  const authentication = useAppSelector(selectAuthentication);
  useLayoutEffect(() => {
    if(!authentication.user){
      navigation.navigate('Login');
    }
  }, [authentication])
    return (
      <Tab.Navigator>
        <Tab.Screen name="Wall" component={WallScreen} />
        <Tab.Screen name="Legal" component={LegalScreen} />
        <Tab.Screen name="Settings" component={SettingsScreen} />
      </Tab.Navigator>
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
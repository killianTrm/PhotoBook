import { NativeStackScreenProps } from "@react-navigation/native-stack";
import React from "react";
import { Button, StyleSheet, Text, View } from "react-native";
import { RootStackParamList } from "../navigation";

type LoginProps = NativeStackScreenProps<RootStackParamList, 'Login' >;
const LoginScreen = ({ navigation }: LoginProps) => {
    return (
        <View style={styles.mainContainer}>
        <Text style={styles.loginscreen}> Login Screen</Text>
        <Button title="Connect" onPress={() => {
          console.log("Coucouuu");
          navigation.navigate('Home')
        }}></Button>
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
    loginscreen: {
      fontSize: 50,
      fontWeight: "bold",
    },
  });
  export default LoginScreen;
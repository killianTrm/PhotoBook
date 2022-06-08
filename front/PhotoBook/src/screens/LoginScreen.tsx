import { NativeStackScreenProps } from "@react-navigation/native-stack";
import React from "react";
import { Button, StyleSheet, Text, TextInput, View } from "react-native";
import { SafeAreaInsetsContext } from "react-native-safe-area-context";
import { RootStackParamList } from "../navigation";

type LoginProps = NativeStackScreenProps<RootStackParamList, 'Login' >;
const LoginScreen = ({ navigation }: LoginProps) => {
    return (
        <View style={styles.mainContainer}>
        <Text style={styles.loginscreen}> Connexion</Text>
        <TextInput
        style={styles.textInput}
        onChangeText={newText => {}}
        defaultValue={""}
        placeholder="Votre prenom"
        keyboardType="default"
      />
      <TextInput
        style={styles.textInput}
        onChangeText={newText => {}}
        defaultValue={""}
        placeholder="password"
        keyboardType="default"
        secureTextEntry
      />
        <Button title="Connect" onPress={() => {
          console.log("Coucouuu");
          navigation.navigate('Home')
        }}></Button>
        </View>
    );
  };

  const styles = StyleSheet.create({
    mainContainer: {
      alignItems: "stretch",
      justifyContent: "center",
      backgroundColor: "white",
      height: "100%",
      flexDirection: 'column',
      padding: 50,
    },
    loginscreen: {
      fontSize: 40,
      fontWeight: "bold",
    },
    textInput: {
      borderWidth: 1,
      borderRadius: 5,
      marginTop: 5,
      marginBottom: 5
    },
  });
  export default LoginScreen;
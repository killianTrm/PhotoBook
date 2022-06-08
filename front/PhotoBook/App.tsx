/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/react-native-community/react-native-template-typescript
 *
 * @format
 */

import React, {ReactNode, useEffect, useState} from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';

import {
  Colors,
  DebugInstructions,
  Header,
  LearnMoreLinks,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';
import HomeScreen from './src/HomeScreen';
import SplashScreen from './src/SplashScreen';

const App = () => {
  const [isLoading, setIsLoading] = useState(true)
  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false)
    }, 2000);
  }, [])
  return (
    <SafeAreaView>
      <StatusBar barStyle="light-content" />
      {
        isLoading ? <SplashScreen/> : <HomeScreen/>
      }
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({});

export default App;

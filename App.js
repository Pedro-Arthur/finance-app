import React from 'react';
import { StatusBar, LogBox } from 'react-native';
import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';

import AppLoading from 'expo-app-loading';
import { useFonts, Jost_400Regular, Jost_600SemiBold } from '@expo-google-fonts/jost';

import colors from './src/styles/colors';
import Routes from './src/routes';

import AuthProvider from './src/contexts/auth';

LogBox.ignoreAllLogs();

export default function App() {
  let [fontsLoaded] = useFonts({
    Jost_400Regular,
    Jost_600SemiBold
  });

  if (!fontsLoaded) {
    return <AppLoading />;
  }

  return (
    <NavigationContainer>
      <AuthProvider>
        <StatusBar backgroundColor={colors.two} barStyle='light-content' />

        <Routes />
      </AuthProvider>
    </NavigationContainer>
  );
}
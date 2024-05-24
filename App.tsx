import React from 'react';
import { Text } from 'react-native';
import AppLoading from 'expo-app-loading';
import { useFonts, Lato_400Regular, Lato_700Bold } from '@expo-google-fonts/lato';
import MainLayout from './app/_layout';

export default function App() {
  let [fontsLoaded] = useFonts({
    Lato_400Regular,
    Lato_700Bold,
  });

  if (!fontsLoaded) {
    return <AppLoading />;
  }

  return <MainLayout />;
}

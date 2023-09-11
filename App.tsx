import "i18n";
import React, { useCallback, useEffect } from "react";
import { StyleSheet, Text, View, SafeAreaView, Platform } from "react-native";
import { SafeAreaProvider } from "react-native-safe-area-context";
import BottomTab from "navigation/BottomTab";
import Providers from "contexts/Providers";
import { NavigationContainer } from "@react-navigation/native";
import { useFonts } from "expo-font";
import * as SplashScreen from "expo-splash-screen";
import Main from "screens/Main";


SplashScreen.preventAutoHideAsync();

export default function App() {
  const [fontsLoaded] = useFonts({
    "Poppins-Regular": require("./assets/fonts/Poppins-Regular.ttf"),
    "Poppins-Bold": require("./assets/fonts/Poppins-Bold.ttf"),
    "Poppins-SemiBold": require("./assets/fonts/Poppins-SemiBold.ttf"),
  });

  const onLayoutRootView = useCallback(async () => {
    if (fontsLoaded) {
      await SplashScreen.hideAsync();
    }
  }, [fontsLoaded]);
  if (!fontsLoaded) {
    return null;
  }
  
  return (
    <NavigationContainer>
      <SafeAreaProvider onLayout={onLayoutRootView}>
        <Providers >
        <Main/>
        </Providers>
      </SafeAreaProvider>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "red",
    justifyContent: "center",
  },
});

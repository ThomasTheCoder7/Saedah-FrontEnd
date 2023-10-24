import "i18n";
import React, { useCallback } from "react";
import { StyleSheet } from "react-native";
import { SafeAreaProvider } from "react-native-safe-area-context";
import Providers from "contexts/Providers";
import { NavigationContainer } from "@react-navigation/native";
import { useFonts } from "expo-font";
import * as SplashScreen from "expo-splash-screen";
import Main from "screens/Main";
import { useTranslation } from "react-i18next";
import Welcome from "screens/onBoarding/Welcome";
import { heightPercentageToDP } from "react-native-responsive-screen";
import MainStack from "navigation/MainStack";

SplashScreen.preventAutoHideAsync();

export default function App() {
  const [fontsLoaded] = useFonts({
    "Poppins-Regular": require("./assets/fonts/Poppins-Regular.ttf"),
    "Poppins-Light": require("./assets/fonts/Poppins-Light.ttf"),
    "Poppins-Bold": require("./assets/fonts/Poppins-Bold.ttf"),
    "Poppins-SemiBold": require("./assets/fonts/Poppins-SemiBold.ttf"),
    "Cairo-Regular": require("./assets/fonts/Cairo-Regular.ttf"),
    "Cairo-Light": require("./assets/fonts/Cairo-Light.ttf"),
    "Cairo-Bold": require("./assets/fonts/Cairo-Bold.ttf"),
    "Cairo-SemiBold": require("./assets/fonts/Cairo-SemiBold.ttf"),
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
    <NavigationContainer
      theme={{
        colors: {
          background: "transparent",
          border: "transparent",
          notification: "transparent",
        },
      }}
    >
      <SafeAreaProvider onLayout={onLayoutRootView} style={{}} >
        <Providers>
          <MainStack/>
        </Providers>
      </SafeAreaProvider>
    </NavigationContainer>
  );
}

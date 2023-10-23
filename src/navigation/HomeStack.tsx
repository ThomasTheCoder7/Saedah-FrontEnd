import { Platform, TouchableOpacity, View } from "react-native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Home from "screens/home/Home";
import React, { useState } from "react";
import LoginStack from "./LoginStack";
import Details from "screens/Details";
import { useTheme } from "contexts/ThemeContexts";
import { useTranslation } from "react-i18next";
import { useNavigation } from "@react-navigation/native";
import { AntDesign } from "@expo/vector-icons";
import { HomeIcon } from "../components/tabIcons";
import Favorite from "components/DealCard/Favorite";
import { useDetails } from "contexts/DetailsContext";
import { likeDeal } from "../utils/Forms/DealUtils";
import HeaderRight from "components/Details/HeaderRight";

const Stack = createNativeStackNavigator();

const HomeStack = () => {
  const theme = useTheme();
  const { i18n } = useTranslation();
  const { details } = useDetails();
  return (
    <Stack.Navigator
      initialRouteName="Deals"
      screenOptions={{
        headerStyle: { backgroundColor: theme.backgroundColor },
        headerShadowVisible: false,
        headerTintColor: theme.header,
        headerBlurEffect: "dark",
        headerBackTitleVisible: false,
        headerTitleAlign: "center",
        animation: `${
          // is it android ? if yes -> check if it is arabic if yes slide from left animation if it is english slide from right
          Platform.OS == "android" ? "slide_from_right" : "default"
        }`,
      }}
    >
      <Stack.Screen
        name="Deals"
        component={Home}
        options={{
          headerShown: false,
          contentStyle: { alignItems: "center", width: "100%", height: "100%" },
        }}
      />
      <Stack.Screen
        name="Start"
        component={LoginStack}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="Details"
        component={Details}
        options={{
          gestureEnabled: false,
          title: details.title,
          headerTitleAlign: "center",

          headerRight: () => <HeaderRight />,
        }}
      />
    </Stack.Navigator>
  );
};

export default HomeStack;

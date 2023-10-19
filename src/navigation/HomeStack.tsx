import { View } from "react-native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Home from "screens/home/Home";
import React from "react";
import LoginStack from "./LoginStack";
import Details from "screens/Details";
import { useTheme } from "contexts/ThemeContexts";
import { useTranslation } from "react-i18next";

const Stack = createNativeStackNavigator();

const HomeStack = () => {
  const theme = useTheme()
  const {i18n} = useTranslation()
  return (
    <View
      style={{
        flex: 1,
        backgroundColor: theme.backgroundColor,
        direction: i18n.dir(i18n.language),
      }}
    >
      <Stack.Navigator initialRouteName="Deals">
        <Stack.Screen
          name="Deals"
          component={Home}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Start"
          component={LoginStack}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Details"
          component={Details}
          options={{ animation: "simple_push" }}
        />
      </Stack.Navigator>
    </View>
  );
};

export default HomeStack;

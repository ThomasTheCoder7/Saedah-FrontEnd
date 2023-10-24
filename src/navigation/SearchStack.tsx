import { createNativeStackNavigator } from "@react-navigation/native-stack";
import HeaderRight from "components/Details/HeaderRight";
import { useDetails } from "contexts/DetailsContext";
import { useTheme } from "contexts/ThemeContexts";
import React from "react";
import { useTranslation } from "react-i18next";
import { Platform } from "react-native";
import Details from "screens/Details";
import Home from "screens/home/Home";
import LoginStack from "./LoginStack";
import Search from "screens/search/Search";

const Stack = createNativeStackNavigator();

const SearchStack = () => {
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
        name="SearchDeals"
        component={Search}
        options={{
          headerShown: false,
          contentStyle: { alignItems: "center", width: "100%", height: "100%" },
        }}
      />
      <Stack.Screen
        name="SearchDealDetails"
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

export default SearchStack;

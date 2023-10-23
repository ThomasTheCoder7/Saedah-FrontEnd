import { View, Platform, TouchableOpacity } from "react-native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Profile from "screens/profile/Profile";
import React, { useState } from "react";
import Settings from "screens/settings/Settings";
import { useTranslation } from "react-i18next";
import { useTheme } from "contexts/ThemeContexts";
import Details from "screens/Details";
import { useDetails } from "contexts/DetailsContext";
import { likeDeal } from "utils/Forms/DealUtils";
import { Feather, EvilIcons } from "@expo/vector-icons";
import HeaderRight from "components/Details/HeaderRight";

const Stack = createNativeStackNavigator();

const ProfileStack = () => {
  const { t, i18n } = useTranslation();
  const { details } = useDetails();
  const lang = i18n.language;
  const theme = useTheme();
  return (
    <View style={{ flex: 1 }}>
      <Stack.Navigator
        initialRouteName="UserProfile"
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
          name="UserProfile"
          component={Profile}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="UserDealDetails"
          component={Details}
          options={{
            gestureEnabled: false,
            title: details.title,
            headerTitleAlign:'center',
            headerRight: () => <HeaderRight/>,
          }}
        />
      </Stack.Navigator>
    </View>
  );
};

export default ProfileStack;

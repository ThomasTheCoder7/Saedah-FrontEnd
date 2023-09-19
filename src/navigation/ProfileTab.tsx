import { View, Text, Platform } from "react-native";
import React from "react";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import Posts from "screens/profile/Posts";
import Favorites from "screens/profile/Favorites";
import { useTheme } from "contexts/ThemeContexts";
import { useTranslation } from "react-i18next";

const Tab = createMaterialTopTabNavigator();

const ProfileTab = () => {
  const theme = useTheme();
  const { t,i18n } = useTranslation();
  const reverse = i18n.language == 'ar' && Platform.OS == 'android' ? {scaleX:-1}:{scaleX:1}

  return (
    <Tab.Navigator
      screenOptions={{
        tabBarInactiveTintColor: theme.bottomTabInactiveIcon,
        tabBarAndroidRipple: {},
        tabBarLabelStyle: { transform: [reverse] },
        tabBarContentContainerStyle: { transform: [reverse] },
      }}
      style={{ direction: "ltr" }}
    >
      <Tab.Screen
        name="UserPosts"
        component={Posts}
        options={{ title: t("Deals") }}
      />
      <Tab.Screen
        name="Favorites"
        component={Favorites}
        options={{ title: t("Favorites") }}
      />
    </Tab.Navigator>
  );
};

export default ProfileTab;

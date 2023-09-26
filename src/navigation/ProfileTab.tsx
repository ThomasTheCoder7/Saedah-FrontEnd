import { View, Text, Platform } from "react-native";
import React from "react";
import {
  MaterialTopTabNavigationOptions,
  createMaterialTopTabNavigator,
} from "@react-navigation/material-top-tabs";
import Posts from "screens/profile/Posts";
import Favorites from "screens/profile/Favorites";
import { useTheme } from "contexts/ThemeContexts";
import { useTranslation } from "react-i18next";
import { widthPercentageToDP as wtdp ,heightPercentageToDP as htdp } from 'react-native-responsive-screen'
const Tab = createMaterialTopTabNavigator();

const ProfileTab = () => {
  const theme = useTheme();
  const { t, i18n } = useTranslation();
  const isArabic = i18n.language == "ar";
  const isAndroid = Platform.OS == "android";

  const screenOptions: MaterialTopTabNavigationOptions = {
    tabBarInactiveTintColor: theme.bottomTabInactiveIcon,
    tabBarAndroidRipple: {},
  };

  if (isAndroid && isArabic) {
    console.log("arabic");
    screenOptions.tabBarLabelStyle = { transform: [{ scaleX: -1 }] };
    screenOptions.tabBarContentContainerStyle = { transform: [{ scaleX: -1 }] };
  }
  return (
    <Tab.Navigator
      screenOptions={screenOptions}
      initialRouteName="UserPosts"
      style={{ direction: "ltr", height:htdp('97%')}}
    >
      {isArabic ? (
        <>
          <Tab.Screen
            name="Favorites"
            component={Favorites}
            options={{ title: t("Favorites") }}
          />
          <Tab.Screen
            name="UserPosts"
            component={Posts}
            options={{ title: t("Deals") }}
          />
        </>
      ) : (
        <>
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
        </>
      )}
    </Tab.Navigator>
  );
};

export default ProfileTab;

import React from "react";
import { View, Text } from "react-native";
import { createMaterialBottomTabNavigator } from "@react-navigation/material-bottom-tabs";
import Settings from "screens/settings/Settings";
import { useTheme as usePaperTheme } from "react-native-paper";
import {
  HomeIcon,
  SearchIcon,
  ProfileIcon,
  SettingsIcon,
  AddPostIcon,
} from "components/tabIcons";
import { useTheme } from "contexts/ThemeContexts";
import { useTranslation } from "react-i18next";
import HomeStack from "./HomeStack";
import Profile from "screens/profile/Profile";
import ProfileStack from "./ProfileStack";
import { DarkTheme, useNavigation } from "@react-navigation/native";
import { useAuth } from "contexts/AuthContext";
import Create from "screens/create/Create";

function SettingsScreen() {
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Text>Settings!</Text>
    </View>
  );
}

const Tab = createMaterialBottomTabNavigator();
const BottomTab = () => {
  const paperTheme = usePaperTheme();
  const theme = useTheme();
  const { t } = useTranslation();
  const { isAuth } = useAuth();

  paperTheme.colors.secondaryContainer = "transparent";
  const tabScreens = [
    {
      name: "Home",
      component: HomeStack,
      options: {
        tabBarIcon: HomeIcon,
        tabBarLabel: t("Home"),
      },
    },
    {
      name: "Search",
      component: SettingsScreen,
      options: {
        tabBarIcon: SearchIcon,
        tabBarLabel: t("Search"),
      },
    },

    {
      name: "Create",
      component: Create,
      options: {
        tabBarIcon: AddPostIcon,
        tabBarLabel: t('Post'),
      },
    },
    {
      name: "Profile",
      component: ProfileStack,
      options: {
        tabBarIcon: ProfileIcon,
        tabBarLabel: t("Profile"),
      },
    },
    {
      name: "Settings",
      component: Settings,
      options: {
        tabBarIcon: SettingsIcon,
        tabBarLabel: t("Settings"),
      },
    },
  ];

  return (
    <Tab.Navigator
      theme={DarkTheme}
      shifting={true}
      activeColor={theme.bottomTabActiveIcon}
      barStyle={{
        backgroundColor: theme.bottomTabBackground,
        position: "relative",
        overflow: "hidden",
      }}
    >
      {tabScreens.map((screen, index) => (
        <Tab.Screen
          key={index}
          name={screen.name}
          component={screen.component}
          options={screen.options}
        />
      ))}
    </Tab.Navigator>
  );
};

export default BottomTab;

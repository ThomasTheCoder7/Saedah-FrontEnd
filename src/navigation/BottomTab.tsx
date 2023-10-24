import { createMaterialBottomTabNavigator } from "@react-navigation/material-bottom-tabs";
import { DarkTheme } from "@react-navigation/native";
import {
  AddPostIcon,
  HomeIcon,
  ProfileIcon,
  SearchIcon,
  SettingsIcon,
} from "components/tabIcons";
import { useTheme } from "contexts/ThemeContexts";
import React from "react";
import { useTranslation } from "react-i18next";
import { useTheme as usePaperTheme } from "react-native-paper";
import Create from "screens/create/Create";
import Settings from "screens/settings/Settings";
import HomeStack from "./HomeStack";
import ProfileStack from "./ProfileStack";
import SearchStack from "./SearchStack";
import { widthPercentageToDP as wtdp ,heightPercentageToDP as htdp } from 'react-native-responsive-screen'
const Tab = createMaterialBottomTabNavigator();
const BottomTab = () => {
  const paperTheme = usePaperTheme();
  const theme = useTheme();
  const { t } = useTranslation();

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
      component: SearchStack,
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
        tabBarLabel: t("Post"),
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
      keyboardHidesNavigationBar={false}
      activeColor={theme.bottomTabActiveIcon}
      barStyle={{
        backgroundColor: theme.bottomTabBackground,
        position: "relative",
        overflow: "hidden",
        height:htdp('10%')
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

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
import { DarkTheme } from "@react-navigation/native";
import { useAuth } from "contexts/AuthContext";

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
  paperTheme.colors.secondaryContainer = "transperent";
  return (
    <Tab.Navigator
      theme={DarkTheme}
      shifting={true}
      activeColor={theme.bottomTabActiveIcon}
      barStyle={{
        backgroundColor: theme.bottomTabBackground,
        position: "relative",
        // marginBottom: 18,
        // marginHorizontal: 20,
        // borderTopLeftRadius: 35,
        // borderTopRightRadius: 35,
        overflow: "hidden",
      }}
    >
      <Tab.Screen
        name="Home"
        component={HomeStack}
        options={{
          tabBarIcon: HomeIcon,
          tabBarLabel: t("Home"),
        }}
      />
      <Tab.Screen
        name="Search"
        component={SettingsScreen}
        options={{
          tabBarIcon: SearchIcon,
          tabBarLabel: t("Search"),
        }}
      />
      {isAuth ?? (
        <Tab.Screen
          name="Create"
          component={SettingsScreen}
          options={{
            tabBarIcon: AddPostIcon,
            tabBarLabel: "",
          }}
        />
      )}

      <Tab.Screen
        name="Profile"
        component={Profile}
        options={{
          tabBarIcon: ProfileIcon,
          tabBarLabel: t("Profile"),
        }}
      />
      <Tab.Screen
        name="Settings"
        component={Settings}
        options={{
          tabBarIcon: SettingsIcon,
          tabBarLabel: t("Settings"),
        }}
      />
    </Tab.Navigator>
  );
};

export default BottomTab;

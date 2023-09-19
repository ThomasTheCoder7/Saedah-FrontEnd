import React from "react";
import { View, Text } from "react-native";
import { createMaterialBottomTabNavigator } from "@react-navigation/material-bottom-tabs";
import Settings from "screens/settings/Settings";
import { useTheme as usePaperTheme } from "react-native-paper";
import {
  HomeIcon,
  FavoritesIcon,
  SearchIcon,
  ProfileIcon
} from "components/tabIcons";
import { useTheme } from "contexts/ThemeContexts";
import { useTranslation } from "react-i18next";
import HomeStack from "./HomeStack";
import Profile from "screens/profile/Profile";
import ProfileStack from "./ProfileStack";
import { DarkTheme } from "@react-navigation/native";
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
  const {t} = useTranslation();
  paperTheme.colors.secondaryContainer = "transperent";
  return (
    <Tab.Navigator
    theme={DarkTheme}
      shifting={true}
      activeColor={theme.bottomTabActiveIcon}
      barStyle={{
        backgroundColor: theme.bottomTabBackground,
        position: "absolute",
        // marginBottom: 18,
        // marginHorizontal: 20,
        borderTopLeftRadius: 35,
        borderTopRightRadius: 35,
        overflow: "hidden",
      }}

    >
      <Tab.Screen
        name="Home"
        component={HomeStack}
        options={{
          tabBarIcon: HomeIcon,
          tabBarLabel:t('Home')
        }}
      />
      <Tab.Screen
        name="Search"
        component={SettingsScreen}
        options={{
          tabBarIcon: SearchIcon,
          tabBarLabel:t('Search')
        }}
      />


      <Tab.Screen
        name="Profile"
        component={ProfileStack}
        options={{
          tabBarIcon: ProfileIcon,
          tabBarLabel:t('Profile')
        }}
      />
    </Tab.Navigator>
  );
};

export default BottomTab;

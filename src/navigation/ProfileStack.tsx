import { View, Platform } from "react-native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Profile from "screens/profile/Profile";
import React from "react";
import Settings from "screens/settings/Settings";
import { useTranslation } from "react-i18next";
import { useTheme } from "contexts/ThemeContexts";

const Stack = createNativeStackNavigator();

const config = {
  animation: "spring",
  config: {
    stiffness: 2000,
    damping: 1800,
    mass: 5,
    overshootClamping: true,
    restDisplacementThreshold: 0.01,
    restSpeedThreshold: 0.1,
  },
};

const ProfileStack = () => {
  const { t, i18n } = useTranslation();
  const lang = i18n.language;
  const theme = useTheme();
  return (
    <View style={{ flex: 1 }}>
      <Stack.Navigator
        initialRouteName="UserProfile"
        screenOptions={{
          animation: `${
            Platform.OS == "android" ? "slide_from_bottom" : "default"
          }`,
        }}

      >
        <Stack.Screen
          name="UserProfile"
          component={Profile}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Settings"
          component={Settings}
          
          options={{
            headerTitle: t("Settings"),
            headerStyle: { backgroundColor: theme.backgroundColor },
            headerTitleStyle: {
              fontSize: 23,
              fontFamily: `${lang === "en" ? "Poppins" : "Cairo"}-SemiBold`,
            },
            headerTintColor: theme.header,
            headerShadowVisible: false,
          }}
        />
      </Stack.Navigator>
    </View>
  );
};

export default ProfileStack;

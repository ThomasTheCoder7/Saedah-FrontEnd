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
import { AntDesign } from '@expo/vector-icons';

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
  const {details} = useDetails()
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
            headerRight: () => {
              const [pressed, setPressed] = useState(details.isLiked);

              return (
                <TouchableOpacity
                  style={{ padding: 5 }}
                  onPress={() => {
                    setPressed(!pressed);
                    likeDeal(details.id);
                  }}
                >
                  {/* TOP RIGHT */}
                  <AntDesign
                    name={pressed ? "heart" : "hearto"}
                    size={20}
                    color={theme.header}
                  />
                </TouchableOpacity>
              );
            },
          }}
        />
      </Stack.Navigator>
    </View>
  );
};

export default ProfileStack;

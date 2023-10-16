import React, { useEffect, useState } from "react";
import { View, Text, TextInput, Platform } from "react-native";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import {
  widthPercentageToDP as wtdp,
  heightPercentageToDP as htdp,
} from "react-native-responsive-screen";
import { useTheme } from "contexts/ThemeContexts";
import Field from "./Field";
import { LinkIcon, LocationIcon, ProfileIcon } from "components/tabIcons";
import Animated, {
  Easing,
  withSpring,
  useSharedValue,
  useDerivedValue,
  useAnimatedStyle,
} from "react-native-reanimated";
import MapField from "./MapField";
import LocationFieldIos from "./LocationFieldIos";
import { useNavigation } from "@react-navigation/native";

const Tab = createMaterialTopTabNavigator();

const LocationField = () => {
  const theme = useTheme();
  const [activeTab, setActiveTab] = useState("Geographic");
  const animatedHeight = useSharedValue(htdp("55%"));
  const navigation = useNavigation();
  const animatedStyles = useAnimatedStyle(() => ({
    height: animatedHeight.value,
  }));

  useEffect(() => {
    if (activeTab == "Geographic") {
      animatedHeight.value = withSpring(htdp("55%"), {
        mass: 1,
        damping: 15,
        stiffness: 100,
      });
      return;
    }
    animatedHeight.value = withSpring(htdp("23%"), {
      mass: 1,
      damping: 25,
      stiffness: 225,
      // overshootClamping: true,
    });
  }, [activeTab]);
  //   const switchTab = (newHeight) => {
  //     // navigation.navigate(activeTab);
  //     animatedHeight.value = withSpring(htdp(newHeight), {
  //       mass: 1,
  //       damping: 25,
  //       stiffness: 225,
  //       // overshootClamping: true,
  //     });
  //   };

    if(Platform.OS=='ios') return <LocationFieldIos/>

  return (
    <Animated.View
      style={[{
        flex: 1,
        
        shadowColor: "transparent",
        shadowOffset: undefined,
      }, animatedStyles]}
    >
      <Tab.Navigator
        screenOptions={{
          swipeEnabled: false,
          tabBarInactiveTintColor: theme.bottomTabInactiveIcon,
          tabBarActiveTintColor: theme.bottomTabActiveIcon,
          tabBarAndroidRipple: { radius: 0 },
        }}
      >
        <Tab.Screen
          name="Geographic"
          children={() => (
            <View>
              <MapField />
            </View>
          )}
          options={{ tabBarIcon: LocationIcon }}
          listeners={{
            tabPress: (e) => {
              setActiveTab("Geographic");
            //   switchTab("55%");
              // e.preventDefault();
            },
          }}
        />
        <Tab.Screen
          name="Link"
          children={() => (
            <Field label="">
              <TextInput
                placeholder="example.com"
                placeholderTextColor={theme.hr}
              />
            </Field>
          )}
          options={{ tabBarIcon: LinkIcon }}
          listeners={{
            tabPress: (e) => {
              setActiveTab("Link");
            //   switchTab("23%");
              // e.preventDefault();
            },
          }}
        />
      </Tab.Navigator>
    </Animated.View>
  );
};

export default LocationField;

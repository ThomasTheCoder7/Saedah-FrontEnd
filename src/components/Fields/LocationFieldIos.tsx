import React, { useState } from 'react';
import { View, Text, TextInput } from 'react-native';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import {
  widthPercentageToDP as wtdp,
  heightPercentageToDP as htdp,
} from 'react-native-responsive-screen';
import { useTheme } from 'contexts/ThemeContexts';
import Field from './Field';
import { LinkIcon, LocationIcon, ProfileIcon } from 'components/tabIcons';
import Animated, { Easing, withSpring, useSharedValue, useDerivedValue } from 'react-native-reanimated';
import MapField from './MapField';
const Tab = createMaterialTopTabNavigator();

const LocationFieldIos = () => {
    const theme = useTheme();
    const [height, setHeight] = useState("55%");
    return (
      <View style={{ flex: 1, height: htdp(height) }}>
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
              setHeight("55%");
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
              setHeight("23%");
            //   switchTab("23%");
              // e.preventDefault();
            },
          }}
        />
      </Tab.Navigator>
      </View>
    );
  };
  
  export default LocationFieldIos;
import React, { useEffect, useState } from "react";
import {
  View,
  Text,
  TextInput,
  Platform,
  TouchableNativeFeedback,
} from "react-native";
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
import { Tab, TabView } from "@rneui/themed";
import { useTranslation } from "react-i18next";

// const Tab = createMaterialTopTabNavigator();

const LocationField = () => {
  const theme = useTheme();
  const [activeTab, setActiveTab] = useState("Geographic");
  const animatedHeight = useSharedValue(htdp("55%"));
  const [index, setIndex] = React.useState(0);
  const animatedStyles = useAnimatedStyle(() => ({
    height: animatedHeight.value,
  }));
  const {t, i18n} = useTranslation()

  const isEnglish = i18n.language == 'en';
  useEffect(() => {
    if ((index == 0 && isEnglish)|| (index==1 && !isEnglish)) {
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
  }, [index]);

  return (
    <Animated.View
      style={[
        {
          flex: 1,
          shadowColor: "transparent",
          shadowOffset: undefined,
        },
        animatedStyles,
      ]}
    >
      <Tab
        value={index}
        style={{flexDirection:isEnglish?'row':'row-reverse'}}
        onChange={(e) => setIndex(e)}
        titleStyle={{ color: theme.header }}
        indicatorStyle={{
          backgroundColor: theme.bottomTabActiveIcon,
        }}
      >
        <Tab.Item
          title={isEnglish ? t("Geographic") : t('Link')}
          background={TouchableNativeFeedback.Ripple("transparent", false)}
          icon={{type:"entypo", name:isEnglish?'location':'link', color:theme.header}}
          iconPosition={isEnglish ? 'left' : 'right'}
        />
        <Tab.Item
          title={!isEnglish ? t("Geographic") : t('Link')}
          icon={{type:"entypo", name:isEnglish?'link':'location', color:theme.header}}
          iconPosition={!isEnglish ? 'left' : 'right'}
          background={TouchableNativeFeedback.Ripple("transparent", false)}
        />
      </Tab>

      <TabView value={index} onChange={setIndex} disableSwipe={true} containerStyle={{marginTop:5, flexDirection:isEnglish?'row':'row-reverse'}} >
        <TabView.Item style={{ width: "100%", height: "100%", padding: 1 }}>
          <MapField />
        </TabView.Item>
        <TabView.Item style={{ width: "100%", height: "100%", padding: 1 }}>
          <Field label="">
            <TextInput
              placeholder="example.com"
              placeholderTextColor={theme.hr}
            />
          </Field>
        </TabView.Item>
      </TabView>
    </Animated.View>
  );
};

export default LocationField;

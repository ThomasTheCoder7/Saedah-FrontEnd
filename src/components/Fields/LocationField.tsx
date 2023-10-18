import { Tab, TabView } from "@rneui/themed";
import { useTheme } from "contexts/ThemeContexts";
import React, { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import {
  TextInput,
  TouchableNativeFeedback
} from "react-native";
import Animated, {
  useAnimatedStyle,
  useSharedValue,
  withSpring
} from "react-native-reanimated";
import {
  heightPercentageToDP as htdp
} from "react-native-responsive-screen";
import Field from "./Field";
import MapField from "./MapField";

// const Tab = createMaterialTopTabNavigator();

const LocationField = () => {
  const theme = useTheme();
  const [activeTab, setActiveTab] = useState("Geographic");
  const animatedHeight = useSharedValue(htdp("55%"));
  const { t, i18n } = useTranslation();
  const isEnglish = i18n.language == "en";
  const [index, setIndex] = React.useState(isEnglish?0:1);
  const animatedStyles = useAnimatedStyle(() => ({
    height: animatedHeight.value,
  }));


  useEffect(() => {
    if ((index == 0 && isEnglish) || (index == 1 && !isEnglish)) {
      animatedHeight.value = withSpring(htdp("51%"), {
        mass: 1,
        damping: 15,
        stiffness: 100,
      });
      return;
    }
    animatedHeight.value = withSpring(htdp("17%"), {
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
        },
        animatedStyles,
      ]}
    >
      <Tab
        value={index}
        style={{ flexDirection: isEnglish ? "row" : "row-reverse" }}
        onChange={(e) => setIndex(e)}
        titleStyle={{ color: theme.header }}
        indicatorStyle={{
          backgroundColor: theme.bottomTabActiveIcon,
        }}
      >
        <Tab.Item
          title={isEnglish ? t("Geographic") : t("Link")}
          background={TouchableNativeFeedback.Ripple("transparent", false)}
          icon={{
            type: "entypo",
            name: isEnglish ? "location" : "link",
            color: theme.header,
          }}
          iconPosition={isEnglish ? "left" : "right"}
        />
        <Tab.Item
          title={!isEnglish ? t("Geographic") : t("Link")}
          icon={{
            type: "entypo",
            name: isEnglish ? "link" : "location",
            color: theme.header,
          }}
          iconPosition={!isEnglish ? "left" : "right"}
          background={TouchableNativeFeedback.Ripple("transparent", false)}
        />
      </Tab>

      <TabView
        value={index}
        onChange={setIndex}
        disableSwipe={true}
        containerStyle={{
          marginTop: 5,
          flexDirection: isEnglish ? "row" : "row-reverse",
          width: "100%",
        }}
      >
        <TabView.Item
          style={{
            width: "100%",
            height: "100%",
            paddingHorizontal:1
          }}
        >
          <MapField />
        </TabView.Item>
        <TabView.Item
          style={{
            width: "100%",
            height: "100%",
          }}
        >
          <Field label="">
            <TextInput
              placeholder="example.com"
              placeholderTextColor={theme.hr}
              style={{ margin: 0 }}
            />
          </Field>
        </TabView.Item>
      </TabView>
    </Animated.View>
  );
};

export default LocationField;

import { Tab, TabView } from "@rneui/themed";
import { useTheme } from "contexts/ThemeContexts";
import * as Location from "expo-location";
import React, { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { TextInput, TouchableNativeFeedback } from "react-native";
import { MapPressEvent } from "react-native-maps";
import Animated, {
  useAnimatedStyle,
  useSharedValue,
  withSpring,
} from "react-native-reanimated";
import { heightPercentageToDP as htdp } from "react-native-responsive-screen";
import Field from "./Field";
import MapField from "./MapField";
type location = { latitude: number; longitude: number } | null;

// const Tab = createMaterialTopTabNavigator();
type props = {
  setData: Function;
  setGeometry: Function;
  setLink: Function;
};

const LocationField = ({ setData, setLink, setGeometry }: props) => {
  const theme = useTheme();
  const [activeTab, setActiveTab] = useState("Geographic");
  const animatedHeight = useSharedValue(htdp("55%"));
  const { t, i18n } = useTranslation();
  const isEnglish = i18n.language == "en";
  const [index, setIndex] = React.useState(isEnglish ? 0 : 1);
  const animatedStyles = useAnimatedStyle(() => ({
    height: animatedHeight.value,
  }));

  const [location, setLocation] = useState({ latitude: 0, longitude: 0 });
  const [Userlocation, setUserLocation] = useState({
    latitude: 0,
    longitude: 0,
  });

  const [loading, setLoading] = useState(true);

  const handleLocationPress = (event: MapPressEvent) => {
    const { latitude, longitude } = event.nativeEvent.coordinate;
    setLocation({ latitude, longitude });
    setData(`latitude:${latitude},longitude:${longitude}`);
  };
  useEffect(() => {
    if ((index == 0 && isEnglish)|| (index==1 && !isEnglish)) {
      setGeometry(true);
      return;
    }
    setGeometry(false);
  }, [index]);
  useEffect(() => {
    (async () => {
      let { status } = await Location.requestForegroundPermissionsAsync();
      if (status !== "granted") {
        console.log("Permission to access location was denied");
        setLoading(false);
        return;
      }

      let currentLocation = await Location.getCurrentPositionAsync({});
      setUserLocation({
        latitude: currentLocation.coords.latitude,
        longitude: currentLocation.coords.longitude,
      });
      setLocation({
        latitude: currentLocation.coords.latitude,
        longitude: currentLocation.coords.longitude,
      });
      setData(`latitude:${currentLocation.coords.latitude},longitude:${currentLocation.coords.longitude}`);
      setLoading(false);
    })();
  }, []);

  useEffect(() => {
    if ((index == 0 && isEnglish) || (index == 1 && !isEnglish)) {
      animatedHeight.value = withSpring(htdp("51%"), {
        mass: 1,
        damping: 45,
        stiffness: 100,
      });
      return;
    }
    animatedHeight.value = withSpring(htdp("17%"), {
      mass: 1,
      damping: 45,
      stiffness: 100,
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
        animationConfig={{ bounciness: 0 }}
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
            paddingHorizontal: 1,
            paddingTop: 5,
          }}
        >
          <MapField
            loading={loading}
            location={location}
            Userlocation={Userlocation}
            handleLocationPress={handleLocationPress}
          />
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
              onChange={(value) => {
                setLink(value.nativeEvent.text);
              }}
            />
          </Field>
        </TabView.Item>
      </TabView>
    </Animated.View>
  );
};

export default LocationField;

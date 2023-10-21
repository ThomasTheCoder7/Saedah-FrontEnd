import DoubleTapPressable from "components/DoubleTapPressable";
import { useTheme } from "contexts/ThemeContexts";
import React, { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import {
  ImageBackground,
  Platform,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from "react-native";
import {
  heightPercentageToDP as htdp,
  widthPercentageToDP as wtdp,
} from "react-native-responsive-screen";
import Counter from "./Counter";
import Favorite from "./Favorite";
import ProductInfo from "./ProductInfo";
import Profile from "./Profile";
import Animated, {
  useAnimatedStyle,
  useSharedValue,
  withSpring,
} from "react-native-reanimated";
import { Image } from "@rneui/themed";
import DealImageScrollView from "./DealImageScrollView";
import StyledBlurView from "./StyledBlurView";
import IndexIndicator from "components/IndexIndicator";
import { useNavigation } from "@react-navigation/native";

const animationConfig = {
  mass: 1,
  damping: 45,
  stiffness: 100,
};

type props = {
  initalState?: "visible" | "hidden";
};

const DealCard = ({ initalState = "visible" }: props) => {
  const theme = useTheme();
  const { i18n } = useTranslation();
  const [hidden, setHidden] = useState(initalState == "hidden" ? true : false);
  const flexDirection = i18n.language == "en" ? "row" : "row-reverse";
  const topOffset = useSharedValue(!hidden ? 0 : -100);
  const bottomOffset = useSharedValue(!hidden ? 0 : 200);
  const bubbleOffset = useSharedValue(!hidden ? 100 : 0);
  const [index, setIndex] = useState(0);
  const navigation = useNavigation();

  const topAnimatedStyle = useAnimatedStyle(() => ({
    transform: [{ translateY: topOffset.value }],
  }));

  const bottomAnimatedStyle = useAnimatedStyle(() => ({
    transform: [{ translateY: bottomOffset.value }],
  }));

  const bubbleAnimatedStyle = useAnimatedStyle(() => ({
    transform: [{ translateY: bubbleOffset.value }],
  }));

  const animate = () => {
    topOffset.value = withSpring(hidden ? 0 : -100, animationConfig);
    bottomOffset.value = withSpring(hidden ? 0 : 200, animationConfig);
    if (!hidden)
      setTimeout(() => {
        bubbleOffset.value = withSpring(hidden ? 100 : 0, animationConfig);
      }, 200);
    else bubbleOffset.value = withSpring(hidden ? 100 : 0, animationConfig);
    setHidden((prev) => !prev);
  };

  return (
    <View
      style={{
        width: wtdp("94%"),
        height: htdp("30%"),
        marginHorizontal: wtdp("2%"),
        backgroundColor: theme.bottomTabBackground,
        borderRadius: 15,
        direction: "ltr",
        overflow: "hidden",
      }}
    >
      <DealImageScrollView
        hidden={hidden}
        animate={animate}
        index={index}
        setIndex={setIndex}
      />
      <DoubleTapPressable
        onDoubleTap={() => animate()}
        onSingleTap={() => {
          navigation.navigate("Details");
        }}
        ignore={hidden}
      >
        <View style={{ width: "100%", height: "100%" }}>
          {/* TOP */}
          <Animated.View
            style={[
              styles.blurViewContainer,
              {
                flexDirection: Platform.OS == "android" ? flexDirection : "row",
              },
              topAnimatedStyle,
            ]}
          >
            <Profile />
            <Favorite />
          </Animated.View>

          {/* BOTTOM */}
          <Animated.View
            style={[
              styles.blurViewContainer,
              {
                flexDirection: Platform.OS == "android" ? flexDirection : "row",
                flex: 0.72,
              },
              bottomAnimatedStyle,
            ]}
          >
            <ProductInfo />
            <Counter />
          </Animated.View>
        </View>
      </DoubleTapPressable>
      <Animated.View
        style={[
          {
            position: "absolute",
            width: "100%",
            height: 40,
            alignItems: "center",
            bottom: 5,
          },
          bubbleAnimatedStyle,
        ]}
        pointerEvents="none"
      >
        <IndexIndicator index={index} />
      </Animated.View>
    </View>
  );
};

export default DealCard;

const styles = StyleSheet.create({
  blurViewContainer: {
    flex: 0.28,
    justifyContent: "space-between",
    paddingHorizontal: 6,
    paddingVertical: 10,
    overflow: "hidden",
  },
});

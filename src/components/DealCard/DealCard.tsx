import DoubleTapPressable from "components/DoubleTapPressable";
import { useTheme } from "contexts/ThemeContexts";
import React from "react";
import { useTranslation } from "react-i18next";
import { ImageBackground, Platform, StyleSheet, View } from "react-native";
import {
  heightPercentageToDP as htdp,
  widthPercentageToDP as wtdp,
} from "react-native-responsive-screen";
import Counter from "./Counter";
import Favorite from "./Favorite";
import ProductInfo from "./ProductInfo";
import Profile from "./Profile";

const DealCard = () => {
  const theme = useTheme();
  const { i18n } = useTranslation();
  const flexDirection = i18n.language == "en" ? "row" : "row-reverse";
  return (
    <DoubleTapPressable
      onDoubleTap={() => {
        console.log("hello");
      }}
      onSingleTap={() => {
        console.log("single?");
      }}
    >
      <ImageBackground
        style={{
          width: wtdp("94%"),
          height: htdp("30%"),
          marginHorizontal: wtdp("2%"),
          backgroundColor: theme.bottomTabBackground,
          borderRadius: 15,
          direction: "ltr",
        }}
        source={{
          uri: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?auto=format&fit=crop&q=80&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&w=2670",
        }}
        borderRadius={15}
      >
        <View
          style={[
            styles.blurViewContainer,
            { flexDirection: Platform.OS == "android" ? flexDirection : "row" },
          ]}
        >
          {/* Top */}
          <Profile />
          <Favorite />
        </View>
        <View
          style={[
            styles.blurViewContainer,
            {
              flexDirection: Platform.OS == "android" ? flexDirection : "row",
              flex: 0.72,
            },
          ]}
        >
          {/* Bottom Left */}
          <ProductInfo />
          {/* Bottom Right */}
          <Counter />
        </View>
      </ImageBackground>
    </DoubleTapPressable>
  );
};

export default DealCard;

const styles = StyleSheet.create({
  blurViewContainer: {
    flex: 0.28,
    justifyContent: "space-between",
    paddingHorizontal: 6,
    paddingVertical: 10,
  },
});

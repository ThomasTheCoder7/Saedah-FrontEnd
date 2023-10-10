import { View, Text, Button, StyleSheet, TouchableOpacity, Platform } from "react-native";
import { ReactNode, Ref, useEffect, useRef } from "react";
import LottieView from "lottie-react-native";
import React from "react";
import {
  widthPercentageToDP as wtdp,
  heightPercentageToDP as htdp,
} from "react-native-responsive-screen";
import { useTheme } from "contexts/ThemeContexts";
import StyledText from "components/StyledText";
import { useTranslation } from "react-i18next";
import { LinearGradient } from "expo-linear-gradient";
import { useOnBoarding } from "contexts/OnBoardingContext";
import OnBoardingButton from "./OnBoardingButton";

type props = {
  animationPath: string;
  buttonText: string;
  isLast?: boolean;
  isFirst?: boolean;
  children: ReactNode;
  animationRef: Ref<any>;
  headerIcon: ReactNode;
};

const onBoardingScreen = ({
  children,
  headerIcon,
  isLast = false,
  isFirst = false,
}: props) => {
  const theme = useTheme();
  const { i18n } = useTranslation();
  const { scrollTo } = useOnBoarding();
  return (
    <View
      style={[
        styles.animationContainer,
        {
          backgroundColor: theme.backgroundColor,
          width: wtdp("100%"),
          height: htdp("100%"),
          padding:0
        },
      ]}
    >
      <View
        style={{
          width: htdp("38%"),
          height: htdp("38%"),
          marginTop: htdp("5%"),
        }}
      >
        {headerIcon}
      </View>
      <View style={styles.textContainer}>{children}</View>
      <View
        style={{
          position: "absolute",
          bottom: 0,
          flexDirection:'row',
          direction:i18n.language == 'ar'?'rtl':'ltr',
          justifyContent: "space-between",
          width: "95%",
          alignItems: "center",
        }}
      >
        <OnBoardingButton type='previous' />
        <OnBoardingButton type='next'/>
      </View>
    </View>
  );
};

export default onBoardingScreen;

const styles = StyleSheet.create({
  animationContainer: {
    alignItems: "center",
    flex: 1,
  },
  textContainer: {
    marginTop: 10,
    paddingHorizontal: 25,
  },
});

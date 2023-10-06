import { View, Text, Button, StyleSheet, TouchableOpacity } from "react-native";
import { ReactNode, useEffect, useRef } from "react";
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
import NextButton from "./NextButton";

type props = {
  animationPath: string;
  buttonText: string;
  isLast?: boolean;
  children: ReactNode;
};

const onBoardingScreen = ({
  animationPath,
  buttonText,
  children,
  isLast = false,
}: props) => {
  const animation = useRef(null);
  const theme = useTheme();
  const { t } = useTranslation();

  return (
    <View
      style={[
        styles.animationContainer,
        { backgroundColor: theme.backgroundColor, width:wtdp('100%'), height:htdp('100%') },
      ]}
    >
      <LottieView
        autoPlay
        loop={false}
        ref={animation}
        style={{
          width: htdp("38%"),
          height: htdp("38%"),
          paddingTop: htdp("3%"),
        }}
        source={require("assets/Money.json")}
      />
      <View style={styles.textContainer}>{children}</View>
      <View style={{marginTop:htdp('20%')}}>
      <NextButton label="Next"/>
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

import { View, Text, Button, StyleSheet, TouchableOpacity } from "react-native";
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
import NextButton from "./NextButton";
import { useOnBoarding } from "contexts/OnBoardingContext";

type props = {
  animationPath: string;
  buttonText: string;
  isLast?: boolean;
  isFirst?:boolean
  children: ReactNode;
  animationRef: Ref<any>;
};

const onBoardingScreen = ({
  animationPath,
  buttonText,
  children,
  animationRef,
  isLast = false,
  isFirst = false,
}: props) => {
  const theme = useTheme();
  const { t } = useTranslation();
  const {scrollTo} = useOnBoarding()
  return (
    <View
      style={[
        styles.animationContainer,
        {
          backgroundColor: theme.backgroundColor,
          width: wtdp("100%"),
          height: htdp("100%"),
        },
      ]}
    >
      <LottieView
        autoPlay={isFirst}
        loop={false}
        ref={animationRef}
        style={{
          width: htdp("38%"),
          height: htdp("38%"),
          paddingTop: htdp("3%"),
        }}

        source={require("assets/Money.json")}
      />
      <View style={styles.textContainer}>{children}</View>
      <View style={{ marginTop: htdp("20%") }}>
        <NextButton label="Next"/>
        <Button title="Hello" onPress={()=>{scrollTo(0)}}/>
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

import { View, Text, Button, StyleSheet } from "react-native";
import { Ref, useEffect, useRef } from "react";
import LottieView from "lottie-react-native";
import React from "react";
import {
  widthPercentageToDP as wtdp,
  heightPercentageToDP as htdp,
} from "react-native-responsive-screen";
import { useTheme } from "contexts/ThemeContexts";
import StyledText from "components/StyledText";
import { useTranslation } from "react-i18next";
import OnBoardingScreen from "components/onBoarding/OnBoardingScreen";
import { useOnBoarding } from "contexts/OnBoardingContext";
import { Image } from "react-native";
type props = {
  index: number;
};
const Welcome = ({ index }: props) => {
  const theme = useTheme();
  const { t } = useTranslation();
  return (
    <OnBoardingScreen
      buttonText="Next"
      headerIcon={
        <Image
          source={require("assets/logo-no-background.png")}
          style={{ width: htdp("38%"), height: htdp("38%") }}
          resizeMode="contain"
        />
      }
      isFirst
    >
      <View>
        <StyledText
          style={{
            fontSize: htdp("3%"),
            color: theme.header,
            textAlign: "center",
          }}
          weight="SemiBold"
        >
          {t("Welcome")}
        </StyledText>
      </View>
    </OnBoardingScreen>
  );
};

export default Welcome;

import { View, Text, Button, StyleSheet } from "react-native";
import { useEffect, useRef } from "react";
import LottieView from "lottie-react-native";
import React from "react";
import {
  widthPercentageToDP as wtdp,
  heightPercentageToDP as htdp,
} from "react-native-responsive-screen";
import { useTheme } from "contexts/ThemeContexts";
import StyledText from "components/StyledText";
import { useTranslation } from "react-i18next";
import OnBoardingScreen from "../../components/onBoarding/OnBoardingScreen";
import onBoardingScreen from "../../components/onBoarding/OnBoardingScreen";
const Money = () => {
  const animation = useRef(null);
  const theme = useTheme();
  const { t } = useTranslation();

  return (
    <OnBoardingScreen animationPath="assets/Money.json" buttonText="Next">
      <View>
        <StyledText
          style={{
            fontSize: htdp("3%"),
            color: theme.header,
            textAlign: "center",
          }}
          weight="SemiBold"
        >
          <StyledText
            style={{
              fontSize: htdp("3%"),
              color: theme.bottomTabActiveIcon,
              textAlign: "center",
            }}
            weight="Bold"
          >
            {t("Saedah") + " "}
          </StyledText>{" "}
          {t("MoneyOnBoarding")}
        </StyledText>
      </View>
    </OnBoardingScreen>
  );
};

export default Money;

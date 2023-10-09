import StyledText from "components/StyledText";
import OnBoardingScreen from "components/onBoarding/OnBoardingScreen";
import { useOnBoarding } from "contexts/OnBoardingContext";
import { useTheme } from "contexts/ThemeContexts";
import React, { Ref, useRef } from "react";
import { useTranslation } from "react-i18next";
import { View } from "react-native";
import { heightPercentageToDP as htdp } from "react-native-responsive-screen";
import LottieView from "lottie-react-native";
type props = {
  index: number;
};
const Money = ({ index }: props) => {
  const theme = useTheme();
  const { t } = useTranslation();
  const { refs } = useOnBoarding();
  if (!refs) return;
  return (
    <OnBoardingScreen
      buttonText="Next"
      headerIcon={
        <LottieView
          autoPlay={true}
          loop={false}
          ref={refs[index]}
          source={require("assets/Money.json")}
        />
      }
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

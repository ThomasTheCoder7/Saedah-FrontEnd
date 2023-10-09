import StyledText from "components/StyledText";
import OnBoardingScreen from "components/onBoarding/OnBoardingScreen";
import { useOnBoarding } from "contexts/OnBoardingContext";
import { useTheme } from "contexts/ThemeContexts";
import React, { Ref, useRef } from "react";
import { useTranslation } from "react-i18next";
import { View } from "react-native";
import { heightPercentageToDP as htdp } from "react-native-responsive-screen";
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
      animationPath="assets/Money.json"
      buttonText="Next"
      animationRef={refs[index]}
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

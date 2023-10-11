import StyledText from "components/StyledText";
import OnBoardingScreen from "components/onBoarding/OnBoardingScreen";
import { useOnBoarding } from "contexts/OnBoardingContext";
import { useTheme } from "contexts/ThemeContexts";
import React, { Ref, useRef, useState } from "react";
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
  const { currentIndex } = useOnBoarding();
  const shouldPlay = currentIndex == index
  const [progress,setProgress] = useState(0);
  return (
    <OnBoardingScreen
      buttonText="Next"
      headerIcon={
        <LottieView
        autoPlay={shouldPlay}
        progress={progress}
        onAnimationFinish={()=>{
          setProgress(shouldPlay?0:1);
        }}
        loop={false}
        source={require("assets/Money.json")}
        key={index}
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

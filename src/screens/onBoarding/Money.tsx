import StyledText from "components/StyledText";
import OnBoardingComponent from "components/onBoarding/OnBoardingComponent";
import { useOnBoarding } from "contexts/OnBoardingContext";
import { useTheme } from "contexts/ThemeContexts";
import LottieView from "lottie-react-native";
import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import { View } from "react-native";
import { heightPercentageToDP as htdp } from "react-native-responsive-screen";
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
    <OnBoardingComponent
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
    </OnBoardingComponent>
  );
};

export default Money;

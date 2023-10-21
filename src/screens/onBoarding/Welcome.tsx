import StyledText from "components/StyledText";
import OnBoardingComponent from "components/onBoarding/OnBoardingComponent";
import { useTheme } from "contexts/ThemeContexts";
import React from "react";
import { useTranslation } from "react-i18next";
import { Image, View } from "react-native";
import { heightPercentageToDP as htdp } from "react-native-responsive-screen";
import Svg, { SvgXml } from "react-native-svg";
type props = {
  index: number;
};
const Welcome = ({ index }: props) => {

  const theme = useTheme();
  const { t } = useTranslation();
  return (
    <OnBoardingComponent
      headerIcon={
        <Image
          source={theme.isDark ? require("assets/logo-no-background.png"): require("assets/logo-no-background-light.png")}
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
    </OnBoardingComponent>
  );
};

export default Welcome;

import { View, Text, TouchableOpacity } from "react-native";
import React from "react";
import { LinearGradient } from "expo-linear-gradient";
import StyledText from "components/StyledText";
import { useTheme } from "contexts/ThemeContexts";
import { useTranslation } from "react-i18next";
import {
  widthPercentageToDP as wtdp,
  heightPercentageToDP as htdp,
} from "react-native-responsive-screen";
import { useNavigation } from "@react-navigation/native";
import { useOnBoarding } from "contexts/OnBoardingContext";
import { Platform } from "react-native";
type props = {
  type: "next" | "previous";
};

const OnBoardingButton = ({ type }: props) => {
  //Capitalize
  const label = type.charAt(0).toUpperCase() + type.slice(1);
  const theme = useTheme();
  const { t, i18n } = useTranslation();
  const { scrollTo, currentIndex, refs } = useOnBoarding();
  const isEnglish = i18n.language == "en";
  const nextDisabled = 
    currentIndex + 1 >= refs.length && type === "next"
    // : currentIndex - 1 < 0 && type === "next";
  const prevDisabled = 
     currentIndex - 1 < 0 && type === "previous"
    // : currentIndex + 1 >= refs.length && type === "previous";
  const disabled = prevDisabled || nextDisabled;

  const scrollToNext = () => scrollTo(currentIndex + 1);
  const scrollToPrevious = () => scrollTo(currentIndex - 1);
  return (
    <TouchableOpacity
      onPress={() => {
        type == "next" && isEnglish ? scrollToNext() : scrollToPrevious();
      }}
      disabled={disabled}
    >
      <View
        style={{
          padding: 15,
          borderRadius: 10,
          alignSelf: "flex-end",
        }}
      >
        <StyledText
          style={{
            color: !disabled ? theme.header : theme.bottomTabInactiveIcon,
            fontSize: htdp("3%"),
            letterSpacing: 1,
          }}
          weight="SemiBold"
        >
          {t(label)}
        </StyledText>
      </View>
    </TouchableOpacity>
  );
};

export default OnBoardingButton;

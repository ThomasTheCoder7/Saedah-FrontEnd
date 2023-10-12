import { useNavigation } from "@react-navigation/native";
import StyledText from "components/StyledText";
import { useOnBoarding } from "contexts/OnBoardingContext";
import { useTheme } from "contexts/ThemeContexts";
import React from "react";
import { useTranslation } from "react-i18next";
import { TouchableOpacity, View } from "react-native";
import { heightPercentageToDP as htdp } from "react-native-responsive-screen";
type props = {
  type: "next" | "previous";
  last?: string | null
};

const OnBoardingButton = ({ type, last=null }: props) => {
  //Capitalize
  const label = type.charAt(0).toUpperCase() + type.slice(1);
  const theme = useTheme();
  const { t } = useTranslation();
  const { scrollTo, currentIndex, numOfSlides } = useOnBoarding();
  const nextDisabled = currentIndex + 1 >= numOfSlides && type === "next";
  const prevDisabled = currentIndex - 1 < 0 && type === "previous";
  const navigation = useNavigation()

  const disabled = (prevDisabled || nextDisabled)&& last == null;

  const scrollToNext = () => scrollTo(currentIndex + 1);
  const scrollToPrevious = () => scrollTo(currentIndex - 1);
  return (
    <TouchableOpacity
      onPress={() => {
        last ? navigation.navigate(last) : type == "next" ? scrollToNext() : scrollToPrevious() 
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

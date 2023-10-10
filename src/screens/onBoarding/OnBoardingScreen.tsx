import { useOnBoarding } from "contexts/OnBoardingContext";
import React, { useEffect, useRef, useState } from "react";
import { Dimensions, ScrollView, View, Platform, Image } from "react-native";
import Money from "./Money";
import Welcome from "./Welcome";
import {
  widthPercentageToDP as wtdp,
  heightPercentageToDP as htdp,
} from "react-native-responsive-screen";
import { useTranslation } from "react-i18next";
import Onboarding from "react-native-onboarding-swiper";
import { useTheme } from "contexts/ThemeContexts";

const OnBoardingScreen = () => {
  const { refs, setScrollTo,scrollTo } = useOnBoarding();
  const [scrollIndex, setScrollIndex] = useState(0);
  const theme = useTheme();
  const scrollViewRef = useRef(null);
  useEffect(() => {
    if (scrollViewRef) {
      setScrollTo(scrollViewRef.current);
      
    }
  }, []);
  const { i18n } = useTranslation();

  return (
    <View style={{ padding: 0, margin: 0, flex: 1, height:htdp('100%') }}>
      <ScrollView
        style={{
          padding: 0,
        }}
        bounces={false}
        horizontal
        scrollEnabled={false}
        showsHorizontalScrollIndicator={false}
        pagingEnabled
        ref={scrollViewRef}
      >
        <Welcome index={0} />
        <Money index={1} />
      </ScrollView>
    </View>
  );
};

export default OnBoardingScreen;

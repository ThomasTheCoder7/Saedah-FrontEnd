import { useOnBoarding } from "contexts/OnBoardingContext";
import LoginStack from "navigation/LoginStack";
import React, { useEffect, useRef } from "react";
import { useTranslation } from "react-i18next";
import { ScrollView, View } from "react-native";
import {
  heightPercentageToDP as htdp
} from "react-native-responsive-screen";
import Money from "./Money";
import Page3 from "./Page3";
import Welcome from "./Welcome";

const OnBoardingScreen = () => {
  const { setScrollTo, setNumOfSlides} = useOnBoarding();
  const scrollViewRef = useRef(null);
  useEffect(() => {
    setScrollTo(scrollViewRef);
    setNumOfSlides(3);
  }, [scrollViewRef]);

  const { i18n } = useTranslation();

  return (
    <View style={{ padding: 0, margin: 0, flex: 1, height: htdp("100%") }}>
      <ScrollView
        style={{
          padding: 0,
          direction:i18n.dir(i18n.language)
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
        <Page3 index={2} />
      </ScrollView>
    </View>
  );
};

export default OnBoardingScreen;

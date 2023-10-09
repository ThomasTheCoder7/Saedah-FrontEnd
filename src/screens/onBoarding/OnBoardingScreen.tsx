import { useOnBoarding } from "contexts/OnBoardingContext";
import React, { useEffect, useRef, useState } from "react";
import { Dimensions, ScrollView, View } from "react-native";
import Money from "./Money";
import Welcome from "./Welcome";
import { widthPercentageToDP as wtdp } from "react-native-responsive-screen";
const OnBoardingScreen = () => {
  const { refs, setScrollTo } = useOnBoarding();
  const [scrollIndex, setScrollIndex] = useState(0);
  const scrollViewRef = useRef(null);
  useEffect(() => {
    if (scrollViewRef) {
      setScrollTo(scrollViewRef.current);
    }
  }, []);

  return (
    <View>
      <ScrollView
        // bounces={false}
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

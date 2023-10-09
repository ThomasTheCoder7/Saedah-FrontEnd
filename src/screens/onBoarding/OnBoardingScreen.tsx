import { useOnBoarding } from "contexts/OnBoardingContext";
import React, { useEffect, useRef, useState } from "react";
import { Dimensions, ScrollView, View, Platform } from 'react-native';
import Money from "./Money";
import Welcome from "./Welcome";
import {
  widthPercentageToDP as wtdp,
  heightPercentageToDP as htdp,
} from "react-native-responsive-screen";
import { useTranslation } from "react-i18next";
import Onboarding from 'react-native-onboarding-swiper';

const OnBoardingScreen = () => {
  const { refs, setScrollTo } = useOnBoarding();
  const [scrollIndex, setScrollIndex] = useState(0);
  const scrollViewRef = useRef(null);
  useEffect(() => {
    if (scrollViewRef) {
      setScrollTo(scrollViewRef.current);
    }
  }, []);
 const {i18n} = useTranslation()
  return (
    <Onboarding
  pages={[
    {
      backgroundColor: '#fff',
      image: <Image source={require('./images/circle.png')} />,
      title: 'Onboarding',
      subtitle: 'Done with React Native Onboarding Swiper',
    },
    ...
  ]}
/>
  )
};

export default OnBoardingScreen;


  // return (
  //   <View style={{ padding: 0,margin:0, flex:1 }}>
  //     <ScrollView
  //       style={{ padding: 0, flexDirection:i18n.language=='ar'&& Platform.OS == 'android'?'row-reverse':'row' }}
  //       // bounces={false}
  //       horizontal
  //       scrollEnabled={false}
  //       showsHorizontalScrollIndicator={false}
  //       pagingEnabled
  //       ref={scrollViewRef}
        

  //     >
  //       <Welcome index={0} />
  //       <Money index={1} />
  //     </ScrollView>
  //   </View>
  // );
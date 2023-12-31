import {
  useState,
  useContext,
  createContext,
  useEffect,
  ReactNode,
  Context,
  useRef,
  Ref,
} from "react";
import React from "react";
import { useTranslation } from "react-i18next";
import { Platform } from "react-native";
import { widthPercentageToDP as wtdp } from "react-native-responsive-screen";
import { useAuth } from "./AuthContext";

type OnBoarding = {
  numOfSlides: number;
  setNumOfSlides: Function;
  scrollTo: Function;
  setScrollTo: Function;
  currentIndex: number;
  setCurrentIndex:Function;
};

const OnBoardingContext = createContext<OnBoarding>({
  numOfSlides: 3,
  setNumOfSlides: () => {},
  scrollTo: () => {},
  setScrollTo: () => {},
  currentIndex: 0,
  setCurrentIndex: () => {},
});

type props = {
  children: ReactNode;
};

export const useOnBoarding = () => {
  return useContext(OnBoardingContext);
};

const calcIndex = (index: number, lang: string, len: number) =>
  Platform.OS == "android" && lang == "ar"
    ? Math.round(Math.abs((index - len) * wtdp("100%")))
    : Math.round(Math.abs(index * wtdp("100%")));

export default ({ children }: props) => {
  const [numOfSlides, setNumOfSlides] = useState(0);
  const [scrollViewRef, setScrollTo]: [Ref<any>, Function] = useState();
  const [currentIndex, setCurrentIndex]: [number, Function] = useState(0);
  const {isAuth} = useAuth()
  const { i18n } = useTranslation();

  useEffect(()=>{setCurrentIndex(0)}, [isAuth])

  const scrollTo = (index: number) => {
    scrollViewRef.current.scrollTo({
      x: calcIndex(index, i18n.language, numOfSlides - 1),
      y: 0,
      animated: true,
    });

    setCurrentIndex(Math.abs(index));
  };

  useEffect(()=>{
  setCurrentIndex(0)
  },[isAuth])

  return (
    <OnBoardingContext.Provider
      value={{
        setNumOfSlides: setNumOfSlides,
        numOfSlides: numOfSlides,
        scrollTo: scrollTo,
        setScrollTo: setScrollTo,
        currentIndex: currentIndex,
        setCurrentIndex:setCurrentIndex
      }}
    >
      {children}
    </OnBoardingContext.Provider>
  );
};

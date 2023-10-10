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
import { widthPercentageToDP as wtdp } from "react-native-responsive-screen";
const OnBoardingContext = createContext<{
  refs: [];
  scrollTo: Function;
  setScrollTo: Function;
  currentIndex: number;
}>({ refs: [], scrollTo: () => {}, setScrollTo: () => {}, currentIndex: 0 });

type props = {
  children: ReactNode;
};

export const useOnBoarding = () => {
  return useContext(OnBoardingContext);
};

const calcIndex = (index: number, lang: string): number =>
  lang == "en" ? index * wtdp("100%") : -calcIndex(index, "en")<0?0:-calcIndex(index);

export default ({ children }: props) => {
  const refs = Array(2).fill(useRef(null));
  const [scrollViewRef, setScrollTo]: [Ref<any>, Function] = useState();
  const [currentIndex, setCurrentIndex]: [number, Function] = useState(0);
  const {i18n} = useTranslation()
  const scrollTo = (index: number) => {
    index = Math.abs(index);
    console.log(calcIndex(index, 'en'))
    if (scrollViewRef) {
      scrollViewRef.scrollTo({
        x: Math.round(index * wtdp("100%")),
        animated: true,
      });
      refs.forEach((val, i) => {
        if (currentIndex != i && val.current) {
          val.current.reset();
        }
      });

      refs[index].current.play();
      setCurrentIndex(index);
    }
  };
  return (
    <OnBoardingContext.Provider
      value={{
        refs: refs,
        scrollTo: scrollTo,
        setScrollTo: setScrollTo,
        currentIndex: currentIndex,
      }}
    >
      {children}
    </OnBoardingContext.Provider>
  );
};

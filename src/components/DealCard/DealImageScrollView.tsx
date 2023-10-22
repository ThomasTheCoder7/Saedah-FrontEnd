import {
  View,
  Text,
  ImageBackground,
  ScrollView,
  NativeScrollEvent,
  Dimensions,
} from "react-native";
import React from "react";
import DoubleTapPressable from "components/DoubleTapPressable";
import {
  widthPercentageToDP as wtdp,
  heightPercentageToDP as htdp,
} from "react-native-responsive-screen";
import { URL } from "utils/logicUtils";
type props = {
  hidden: boolean;
  animate?: () => void;
  index: number;
  setIndex: Function;
  images: string[];
};

const SCREEN_WIDTH = wtdp("94%");

const DealImageScrollView = ({
  hidden,
  animate = () => {},
  index,
  setIndex,
  images,
}: props) => {
  
  return (
    <ScrollView
      style={{ position: "absolute", width: "100%", height: "100%" }}
      scrollEnabled={hidden}
      horizontal
      pagingEnabled
      showsHorizontalScrollIndicator={false}
      onScroll={(event: any) => {
        const { x } = event.nativeEvent.contentOffset;
        const screenWidth = SCREEN_WIDTH;

        // Calculate the index based on the scroll position
        const newIndex = Math.round(x / screenWidth);

        if (newIndex !== index) {
          setIndex(newIndex);
        }
      }}
      scrollEventThrottle={10}
      bounces={false}
      nestedScrollEnabled
    >
      {images.map((image, index) => {
        
        return (
          <DoubleTapPressable
            onDoubleTap={() => {
              animate();
            }}
            key={index}
          >
            <ImageBackground
              source={{
                uri: `${URL}${image}`,
              }}
              style={{
                width: wtdp("94%"),
                height: htdp("30%"),
                direction: "ltr",
                overflow: "hidden",
              }}
              
            />
          </DoubleTapPressable>
        );
      })}
    </ScrollView>
  );
};

export default DealImageScrollView;

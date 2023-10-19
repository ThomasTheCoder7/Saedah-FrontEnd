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
type props = {
  hidden: boolean;
  animate: () => void;
  index: number;
  setIndex: Function;
};

const DealImageScrollView = ({ hidden, animate, index, setIndex }: props) => {
  return (
    <ScrollView
      style={{ position: "absolute", width: "100%", height: "100%" }}
      scrollEnabled={hidden}
      horizontal
      pagingEnabled
      showsHorizontalScrollIndicator={false}
      onScroll={(event: any) => {
        const { x } = event.nativeEvent.contentOffset;
        const screenWidth = wtdp("94%");

        // Calculate the index based on the scroll position
        const newIndex = Math.round(x / screenWidth);

        if (newIndex !== index) {
          setIndex(newIndex);
        }
      }}
      //   scrollEventThrottle={wtdp('100%')}
    >
      <DoubleTapPressable
        onDoubleTap={() => {
          animate();
        }}
      >
        <ImageBackground
          source={{
            uri: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?auto=format&fit=crop&q=80&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&w=2670",
          }}
          borderRadius={15}
          // resizeMode="contain"
          style={{
            width: wtdp("94%"),
            height: htdp("30%"),
            borderRadius: 15,
            direction: "ltr",
            overflow: "hidden",
          }}
        />
      </DoubleTapPressable>
      <DoubleTapPressable
        onDoubleTap={() => {
          animate();
        }}
      >
        <ImageBackground
          source={{
            uri: "https://images.unsplash.com/photo-1528164344705-47542687000d?auto=format&fit=crop&q=80&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&w=2092",
          }}
          borderRadius={15}
          // resizeMode="contain"
          style={{
            width: wtdp("94%"),
            height: htdp("30%"),
            borderRadius: 15,
            direction: "ltr",
            overflow: "hidden",
          }}
        />
      </DoubleTapPressable>
      <DoubleTapPressable
        onDoubleTap={() => {
          animate();
        }}
      >
        <ImageBackground
          source={{
            uri: "https://images.unsplash.com/photo-1573455494060-c5595004fb6c?auto=format&fit=crop&q=80&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&w=2040",
          }}
          borderRadius={15}
          // resizeMode="contain"
          style={{
            width: wtdp("94%"),
            height: htdp("30%"),
            borderRadius: 15,
            direction: "ltr",
            overflow: "hidden",
          }}
        />
      </DoubleTapPressable>
    </ScrollView>
  );
};

export default DealImageScrollView;

import { View, Text, StyleSheet, StyleProp, ViewStyle } from "react-native";
import React, { useEffect } from "react";
import StyledBlurView from "./DealCard/StyledBlurView";
import { useTheme } from "contexts/ThemeContexts";
import {
  widthPercentageToDP as wtdp,
  heightPercentageToDP as htdp,
} from "react-native-responsive-screen";
import Animated, {
  useAnimatedStyle,
  useSharedValue,
  withSpring,
} from "react-native-reanimated";
type props = {
  index: number;
  currentIndex?: number;
  len?: number;
  vertical?: boolean;
  style?:ViewStyle|null
};

const animationConfig = {
  mass: 1,
  damping: 65,
  stiffness: 200,
};
const SCALE_AMOUNT = 1.3;

const Bubble = ({ index, currentIndex }: props) => {
  const theme = useTheme();
  const color = useSharedValue(currentIndex == 0 ? "white" : theme.hr);
  const scale = useSharedValue(
    currentIndex == 1 ? SCALE_AMOUNT : styles.bubbleStyle.width
  );
  const animatedStyle = useAnimatedStyle(() => ({
    backgroundColor: color.value,
    transform: [{ scale: scale.value }],
  }));
  const isActive = currentIndex == index;
  useEffect(() => {
    color.value = withSpring(isActive ? "white" : theme.hr, animationConfig);
    scale.value = withSpring(isActive ? SCALE_AMOUNT : 1, animationConfig);
  }, [currentIndex]);

  return <Animated.View style={[styles.bubbleStyle, animatedStyle]} />;
};

const IndexIndicator = ({ index, len = 4, vertical=false, style=null }: props) => {
  return (
    <View
      style={style==null?{
        position: "absolute",
        bottom: 10,
        alignItems: "center",
        width: "100%",
        // height:40
      }:style}
    >
      <StyledBlurView
        style={{
          maxWidth: wtdp("70%"),
          borderRadius: 100,
          justifyContent: "center",
          alignItems: "center",
          flexDirection: vertical ? "column":'row',
        }}
      >
        {[...new Array(len)].map((v, i) => {
          return <Bubble index={i} currentIndex={index} key={i} />;
        })}
      </StyledBlurView>
    </View>
  );
};

export default IndexIndicator;

const styles = StyleSheet.create({
  bubbleStyle: {
    width: 10,
    height: 10,
    borderRadius: 100,
    margin: 7,
  },
});

import { View, Text, StyleSheet } from "react-native";
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
};

const animationConfig = {
  mass: 1,
  damping: 45,
  stiffness: 300,
};

const IndexIndicator = ({ index }: props) => {
  const theme = useTheme();
  const colors = [
    useSharedValue("white"),
    useSharedValue(theme.hr),
    useSharedValue(theme.hr),
  ];

  const animatedStyles = [
    useAnimatedStyle(() => ({
      backgroundColor: colors[0].value,
    })),
    useAnimatedStyle(() => ({
      backgroundColor: colors[1].value,
    })),
    useAnimatedStyle(() => ({
      backgroundColor: colors[2].value,
    })),
  ];

  useEffect(() => {
    colors.map((color, i) => {
      color.value = withSpring(theme.hr, animationConfig);
    });
    colors[index].value = withSpring("white", animationConfig);
  }, [index]);

  return (
    <View>
      <StyledBlurView
        style={{
          width: wtdp("20%"),
          borderRadius: 100,
          justifyContent: "center",
          alignItems: "center",
          flexDirection: "row",
        }}
      >
        <Animated.View style={[styles.bubbleStyle, animatedStyles[0]]} />
        <Animated.View style={[styles.bubbleStyle, animatedStyles[1]]} />
        <Animated.View style={[styles.bubbleStyle, animatedStyles[2]]} />
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
    marginHorizontal: 5,
  },
});

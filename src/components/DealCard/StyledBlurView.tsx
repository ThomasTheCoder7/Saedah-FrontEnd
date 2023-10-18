import { BlurView } from "expo-blur";
import { ReactNode } from "react";
import React from "react";
import { Platform, ViewStyle } from "react-native";

const StyledBlurView = ({
  children,
  style,
}: {
  children?: ReactNode;
  style?: ViewStyle;
}) => {
  return (
    <BlurView
      style={[
        {
          flex: 0.8,
          borderRadius: 10,
          overflow: "hidden",
          backgroundColor: Platform.OS=='android'?"rgba(0,0,0,0)":'rgba(0,0,0,0.4)',
        },
        style,
      ]}
      tint="dark"
      blurReductionFactor={35}
      intensity={Platform.OS=='android'?110:50}
    >
      {children}
    </BlurView>
  );
};

export default StyledBlurView;

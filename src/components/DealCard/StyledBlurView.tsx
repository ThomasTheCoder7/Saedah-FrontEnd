import { BlurView } from "expo-blur";
import { ReactNode } from "react";
import React from "react";
import { Platform, View, ViewStyle } from "react-native";

const StyledBlurView = ({
  children,
  style,
}: {
  children?: ReactNode;
  style?: ViewStyle;
}) => {
  if (Platform.OS == "android") {
    return (
      <View
        style={[
          {
            flex: 0.8,
            borderRadius: 10,
            overflow: "hidden",
            backgroundColor: "rgba(15,15,15,0.5)",
          },
          style,
        ]}
      >
        {children}
      </View>
    );
  }
  return (
    <BlurView
      style={[
        {
          flex: 0.8,
          borderRadius: 10,
          overflow: "hidden",
          backgroundColor: "rgba(0,0,0,0.4)",
        },
        style,
      ]}
      tint="dark"
      intensity={50}
    >
      {children}
    </BlurView>
  );
};

export default StyledBlurView;

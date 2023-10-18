import { View, Text } from "react-native";
import { Entypo } from "@expo/vector-icons";
import React from "react";
import { useTheme } from "contexts/ThemeContexts";
import StyledText from "components/StyledText";
import StyledBlurView from "./StyledBlurView";

const Counter = () => {
  const theme = useTheme();
  return (
    <StyledBlurView style={{flex:0.15}}>
      <View
        style={{
          flex: 1,
          justifyContent: "space-between",
          alignItems: "center",
          paddingVertical: 10,
        }}
      >
        <Entypo name="plus" size={24} color={theme.header} />
        <StyledText style={{ color: theme.header, fontSize: 17 }} weight="Bold">
          10
        </StyledText>
        <Entypo name="minus" size={24} color={theme.header} />
      </View>
    </StyledBlurView>
  );
};

export default Counter;

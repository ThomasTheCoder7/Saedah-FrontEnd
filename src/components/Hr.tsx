import { View, Text } from "react-native";
import React from "react";
import { useTheme } from "contexts/ThemeContexts";

type props = {
  width?:string
}

const Hr = ({width}:props) => {
  const theme = useTheme();
  return (
    <View
      style={{ width: width, height: 2, backgroundColor: theme.hr, alignSelf:'center', marginVertical:10 }}
    ></View>
  );
};

export default Hr;

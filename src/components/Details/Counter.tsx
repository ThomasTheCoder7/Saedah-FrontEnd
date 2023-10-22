import { View, Text, TouchableOpacity } from "react-native";
import React, { useState } from "react";
import { Entypo } from "@expo/vector-icons";
import StyledText from "components/StyledText";
import { useTheme } from "contexts/ThemeContexts";

const Counter = () => {
  const theme = useTheme();
  const [count, setCount] = useState(0)
  return (
    <View style={{alignItems:'center', justifyContent:'space-between', borderRadius:10, padding:10}}>
      <TouchableOpacity style={{ padding: 5 }}>
        <Entypo name="plus" size={24} color={theme.header} />
      </TouchableOpacity>
      <StyledText style={{ color: theme.header, fontSize: 17 }} weight="Bold">
        10
      </StyledText>
      <TouchableOpacity style={{ padding: 5 }}>
        <Entypo name="minus" size={24} color={theme.header} />
      </TouchableOpacity>
    </View>
  );
};

export default Counter;

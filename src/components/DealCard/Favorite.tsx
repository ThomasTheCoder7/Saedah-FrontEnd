import { View, Text, TouchableOpacity } from "react-native";
import React, { useState } from "react";
import StyledBlurView from "./StyledBlurView";
import { AntDesign } from "@expo/vector-icons";
import { useTheme } from "contexts/ThemeContexts";

const Favorite = () => {
  const theme = useTheme();
  const [pressed, setPressed] = useState(false)
  return (
    <StyledBlurView
      style={{ flex: 0.15, justifyContent: "center", alignItems: "center" }}
    >
      <TouchableOpacity style={{padding:5}} onPress={()=>{setPressed(!pressed)}}>
        {/* TOP RIGHT */}
        <AntDesign name={pressed?"heart":'hearto'} size={20} color={theme.header} />
      </TouchableOpacity>
    </StyledBlurView>
  );
};

export default Favorite;

import { View, Text, TouchableOpacity } from "react-native";
import React, { useState } from "react";
import StyledBlurView from "./StyledBlurView";
import { AntDesign } from "@expo/vector-icons";
import { useTheme } from "contexts/ThemeContexts";
import DarkTheme from "assets/Themes/dark";
import { likeDeal } from "utils/Forms/DealUtils";

type props = {
  active:boolean;
  id:string
}

const Favorite = ({active, id}:props) => {
  const theme = DarkTheme;
  const [pressed, setPressed] = useState(active)
  return (
    <StyledBlurView
      style={{ flex: 0.15, justifyContent: "center", alignItems: "center" }}
    >
      <TouchableOpacity style={{padding:5}} onPress={()=>{setPressed(!pressed); likeDeal(id)}}>
        {/* TOP RIGHT */}
        <AntDesign name={pressed?"heart":'hearto'} size={20} color={theme.header} />
      </TouchableOpacity>
    </StyledBlurView>
  );
};

export default Favorite;

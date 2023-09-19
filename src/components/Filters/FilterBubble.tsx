import { View, Text, TouchableOpacity } from "react-native";
import React, { ReactNode } from "react";
import StyledText from "components/StyledText";
import { useTheme } from "contexts/ThemeContexts";
import {
  widthPercentageToDP as wtdp,
  heightPercentageToDP as htdp,
} from "react-native-responsive-screen";
import Icon from "@expo/vector-icons"
import { useTranslation } from "react-i18next";

type props = {
  children: ReactNode;
  active: boolean;
  label:string;
  index:number
  setActive:Function
};

const FilterBubble = ({ children, active = false, label="",index, setActive }: props) => {
  const theme = useTheme();
  const {t} = useTranslation()
  return (
    <TouchableOpacity
    onPress={()=>{setActive(index)}}
      style={[
        {
          borderWidth: 3,
          borderRadius: 10,
          borderColor: !active ? theme.secondary : "transparent",
          backgroundColor: active ? theme.secondary : "transparent",
          padding: 10,
          flexDirection:'row',
          alignItems:'center',
          gap:15
        },
      ]}
    >
      {children}
      <StyledText
        weight="Bold"
        style={{ color: theme.body, fontSize: htdp("2%") }}
      >
        {t(label)}
      </StyledText>
    </TouchableOpacity>
  );
};

export default FilterBubble;

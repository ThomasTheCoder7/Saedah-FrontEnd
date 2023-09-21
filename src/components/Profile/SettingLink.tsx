import { View, Text, TouchableOpacity, FlexAlignType } from "react-native";
import React from "react";
import { AntDesign } from "@expo/vector-icons";
import { useTheme } from "contexts/ThemeContexts";
import { useNavigation } from "@react-navigation/native";
import { useTranslation } from "react-i18next";

const SettingLink = () => {
  const theme = useTheme();
  const navigation = useNavigation();
  const {i18n} = useTranslation()
  const position:FlexAlignType = i18n.language=='en'?'flex-end':'flex-start'
  return (
    <TouchableOpacity
    style={{
        padding:5,
        width:70,
        height:70,
        alignItems:'center',
        justifyContent:'center',
    }}
      onPress={() => {
        navigation.navigate("Settings");
      }}
    >
      <AntDesign name="setting" size={35} color={theme.body} />
    </TouchableOpacity>
  );
};

export default SettingLink;

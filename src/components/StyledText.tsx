import { View, Text, StyleSheet, StyleProp, TextStyle } from "react-native";
import React, { ReactNode } from "react";
import { useTranslation } from "react-i18next";

type fontWeight = "Light" | "Regular" | "SemiBold" | "Bold";

type props = {
  style?: StyleProp<TextStyle>;
  weight?: fontWeight;
  children: string | ReactNode;
  poppins?:boolean
};

const StyledText = ({ style = {}, weight = "Regular", children, poppins=false }: props) => {
  const { t, i18n } = useTranslation();
  const lang = i18n.language;
  return (
    <Text
      style={[
        {
          fontFamily: `${lang === "en" || poppins ? "Poppins" : "Cairo"}-${weight}`,
          padding: 0,
        },
        style,
      ]}
    >
      {children}
    </Text>
  );
};

export default StyledText;

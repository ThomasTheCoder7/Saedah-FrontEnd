import { View, Text, StyleSheet, StyleProp, TextStyle } from "react-native";
import React, { ReactNode } from "react";
import { useTranslation } from "react-i18next";

type fontWeight = "Light" | "Regular" | "SemiBold" | "Bold";

type props = {
  style?: StyleProp<TextStyle>;
  weight?: fontWeight;
  children: string | ReactNode;
};

const StyledText = ({ style = {}, weight = "Regular", children }: props) => {
  const { t, i18n } = useTranslation();
  const lang = i18n.language;
  return (
    <Text
      style={[
        {
          fontFamily: `${lang === "en" ? "Poppins" : "Cairo"}-${weight}`,
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

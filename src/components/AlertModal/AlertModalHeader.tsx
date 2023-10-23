import { View, Text } from "react-native";
import React from "react";
import { Ionicons } from "@expo/vector-icons";
import {
  widthPercentageToDP as wtdp,
  heightPercentageToDP as htdp,
} from "react-native-responsive-screen";
import { useTheme } from "contexts/ThemeContexts";
import StyledText from "components/StyledText";
import { useTranslation } from "react-i18next";

type props = {
  message1:string;
  message2:string;
}
const AlertHeader = ({message1, message2}:props) => {
  const theme = useTheme();
  const {t} = useTranslation()
  return (
    <View style={{ alignItems: "center" }}>
      <Ionicons name="warning" size={htdp("10%")} color={theme.body} />
      <StyledText
        style={{
          color: theme.header,
          fontSize: 18,
          textAlign: "center",
          padding: 0,
          paddingHorizontal: 17,
        }}
      >
        {t(message1)}
      </StyledText>
      <StyledText
        style={{
          color: theme.header,
          fontSize: 18,
          textAlign: "center",
          padding: 0,
          paddingHorizontal: 17,
        }}
      >
        {t(message2)}
      </StyledText>
    </View>
  );
};

export default AlertHeader;

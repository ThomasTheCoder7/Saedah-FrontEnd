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
const LogoutAlertHeader = () => {
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
        {t('signOutMessage1')}
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
        {t('signOutMessage2')}
      </StyledText>
    </View>
  );
};

export default LogoutAlertHeader;

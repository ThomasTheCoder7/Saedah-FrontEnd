import { View, Text, TextInput } from "react-native";
import React from "react";
import {
  widthPercentageToDP as wtdp,
  heightPercentageToDP as htdp,
} from "react-native-responsive-screen";
import { useTheme } from "contexts/ThemeContexts";
import StyledText from "components/StyledText";
import { useTranslation } from "react-i18next";

type props = {
  label: string;
  placeholder?: string;
};
const PasswordField = ({ label, placeholder = "" }: props) => {
  const theme = useTheme();
  const { t } = useTranslation();
  return (
    <View style={{ gap: 10, padding: 0 }}>
      <StyledText
        style={{ color: theme.header, paddingLeft: 3, alignSelf: "flex-start" }}
        weight="SemiBold"
      >
        {t(label)}
      </StyledText>
      <TextInput
        style={{
          padding: 15,
          backgroundColor: theme.fieldBackground,
          fontSize: htdp("3%"),
          borderRadius: 10,
          color:theme.header
        }}
        textContentType="password"
        secureTextEntry
        maxLength={20}
        placeholder={placeholder}
      />
    </View>
  );
};

export default PasswordField;

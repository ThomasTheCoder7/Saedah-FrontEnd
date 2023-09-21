import { View, Text } from "react-native";
import React, { ReactNode } from "react";
import { useTheme } from "contexts/ThemeContexts";
import StyledText from "components/StyledText";
import { useTranslation } from "react-i18next";
import {
  widthPercentageToDP as wtdp,
  heightPercentageToDP as htdp,
} from "react-native-responsive-screen";



type props = {
  label: string;
  children: ReactNode;
  justifyContent: "center" | "flex-start" | "flex-end";
  style?:object
};

const Label = ({ label, children, justifyContent,style }: props) => {
  const theme = useTheme();
  const { t } = useTranslation();
  return (
    <View style={[{ alignItems: "center", width: wtdp("27%"), gap: 5, },style]}>
      <View
        style={{
          flexDirection: "row",
          justifyContent: justifyContent,
          width: "100%",
          gap: 7,
          alignItems: "center",
        }}
      >
        {children}
        <StyledText style={{ color: theme.body, fontSize: 14.5 }} weight="Bold">
          {t(label)}
        </StyledText>
      </View>
      <StyledText style={{ color: theme.body }} weight="Bold">
        15
      </StyledText>
    </View>
  );
};

export default Label;

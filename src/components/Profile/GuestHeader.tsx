import { View, TouchableOpacity, StyleSheet } from "react-native";
import React from "react";
import StyledText from "components/StyledText";
import {
  widthPercentageToDP as wtdp,
  heightPercentageToDP as htdp,
} from "react-native-responsive-screen";
import { useTheme } from "contexts/ThemeContexts";
import { useTranslation } from "react-i18next";
const GuestHeader = () => {
  const theme = useTheme();
  const { t } = useTranslation();
  return (
    <View
      style={{
        flexDirection: "row",
        gap: 10,
        alignItems: "center",
        justifyContent: "flex-end",
        width: "100%",
      }}
    >
      <TouchableOpacity
        style={[
          styles.button,
          {
            borderColor: theme.secondary,
          },
        ]}
      >
        <StyledText
          style={{ fontSize: 15, color: theme.body }}
          weight="SemiBold"
        >
          {t("Sign in")}
        </StyledText>
      </TouchableOpacity>

      <TouchableOpacity
        style={[
          styles.button,
          { borderColor: theme.secondary, backgroundColor: theme.secondary },
        ]}
      >
        <StyledText
          style={{ fontSize: 15, color: theme.body }}
          weight="SemiBold"
        >
          {t("Register")}
        </StyledText>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  button: {
    borderWidth: 2,
    padding: 5,
    paddingHorizontal: 10,
    borderRadius: 10,
    alignItems: "center",
    justifyContent: "center",
    marginHorizontal: 7,
  },
});

export default GuestHeader;

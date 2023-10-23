import StyledText from "components/StyledText";
import { useTheme } from "contexts/ThemeContexts";
import React from "react";
import { useTranslation } from "react-i18next";
import { StyleSheet, TouchableOpacity, View } from "react-native";
import { heightPercentageToDP as htdp } from "react-native-responsive-screen";

type props = {
  onPress: Function;
  onActionPress?: Function;
  message?: string;
};

const ActionButton = ({ onPress, message }: props) => {
  const theme = useTheme();
  const { t } = useTranslation();
  return (
    <TouchableOpacity
      style={[
        styles.buttonContainer,
        {
          backgroundColor: theme.danger,
          borderWidth: 3,
          borderColor: theme.danger,
        },
      ]}
      onPress={() => onPress()}
    >
      <StyledText
        style={{
          color: theme.isDark ? theme.header : theme.backgroundColor,
          fontSize: htdp("2%"),
        }}
        weight="SemiBold"
      >
        {t(message)}
      </StyledText>
    </TouchableOpacity>
  );
};

const CancelButton = ({ onPress }: props) => {
  const theme = useTheme();
  const { t } = useTranslation();
  return (
    <TouchableOpacity
      style={[
        styles.buttonContainer,
        { borderColor: theme.body, borderWidth: 3 },
      ]}
      onPress={() => onPress()}
    >
      <StyledText
        style={{ color: theme.header, fontSize: htdp("2%") }}
        weight="SemiBold"
      >
        {t("Cancel")}
      </StyledText>
    </TouchableOpacity>
  );
};

const AlertAction = ({ onPress, message, onActionPress }: props) => {
  return (
    <View
      style={{
        flexDirection: "row",
        justifyContent: "space-between",
        paddingHorizontal: 15,
        width: "100%",
        alignItems: "center",
        marginVertical: 20,
      }}
    >
      <CancelButton onPress={onPress} />
      <ActionButton
        message={message}
        onPress={onActionPress?onActionPress:()=>{}}
      />
    </View>
  );
};

export default AlertAction;

const styles = StyleSheet.create({
  buttonContainer: {
    borderRadius: 15,
    paddingHorizontal: 30,
    paddingVertical: 15,
  },
  buttonText: {
    fontSize: htdp("3%"),
  },
});

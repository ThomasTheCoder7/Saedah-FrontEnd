import { View, TouchableOpacity, StyleSheet, Platform } from "react-native";
import React from "react";
import StyledText from "components/StyledText";
import { useTheme } from "contexts/ThemeContexts";
import {
  widthPercentageToDP as wtdp,
  heightPercentageToDP as htdp,
} from "react-native-responsive-screen";
import { useTranslation } from "react-i18next";
import { store } from "utils/storageHandler";
import { CommonActions, StackActions, useNavigation } from "@react-navigation/native";
import { useAuth } from "contexts/AuthContext";

type props = {
  onPress: Function;
};

const LogoutButton = ({ onPress }: props) => {
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
        style={{ color: theme.header, fontSize: htdp("2%") }}
        weight="SemiBold"
      >
        {t("Sign Out")}
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

const LogoutAlertAction = ({ onPress }: props) => {
  const navigation = useNavigation();
  const isAndroid = Platform.OS == 'android';
  const { setAuth } = useAuth();
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
      <LogoutButton
        onPress={() => {
          onPress()
          setAuth(false);
          isAndroid ? navigation.reset({index:0, routes:[{name:'Start'}]}) : navigation.navigate("Start");
        }}
      />
    </View>
  );
};

export default LogoutAlertAction;




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

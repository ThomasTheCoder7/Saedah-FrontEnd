import {
  View,
  Text,
  KeyboardAvoidingView,
  ScrollView,
  Platform,
} from "react-native";
import React from "react";
import { useTheme } from "contexts/ThemeContexts";
import {
  widthPercentageToDP as wtdp,
  heightPercentageToDP as htdp,
} from "react-native-responsive-screen";
import StyledText from "components/StyledText";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { useTranslation } from "react-i18next";
import TextField from "components/Fields/TextField";

const Login = () => {
  const theme = useTheme();
  const {t} = useTranslation()
  return (
    <KeyboardAvoidingView
      behavior={Platform.OS == "android" ? "height" : "padding"}
      style={{
        flex: 1,
        backgroundColor: theme.backgroundColor,
      }}
    >
      <ScrollView style={{ paddingHorizontal: wtdp("7%")}}>
        <View style={{ marginBottom: htdp("5%"), gap: 20, height:htdp('100%') }}>
          <View
            style={{
              flexDirection: "row",
              justifyContent: "center",
              gap: 20,
              paddingTop: htdp("10%"),
              alignItems: "center",
            }}
          >
            <StyledText
              style={{
                color: theme.header,
                textAlign: "center",

                fontSize: htdp("4%"),
              }}
            >
              {t("Welcome Back")}
            </StyledText>
            <MaterialCommunityIcons
              name="hand-wave"
              size={htdp("8%")}
              color={theme.bottomTabActiveIcon}
            />
          </View>

          <TextField label="Username" />
          <TextField label="Password" />
          <TextField label="Password" />
          <TextField label="Password" />
          <TextField label="Password" />
          <TextField label="Password" />

        </View>
      </ScrollView>
    </KeyboardAvoidingView>
  );
};

export default Login;

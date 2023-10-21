import {
  View,
  Text,
  KeyboardAvoidingView,
  ScrollView,
  Platform,
  StyleSheet,
  TouchableOpacity,
  TextInput,
} from "react-native";
import React, { useState } from "react";
import { useTheme } from "contexts/ThemeContexts";
import {
  widthPercentageToDP as wtdp,
  heightPercentageToDP as htdp,
} from "react-native-responsive-screen";
import StyledText from "components/StyledText";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { useTranslation } from "react-i18next";
import TextField from "components/Fields/TextField";
import PasswordField from "components/Fields/PasswordField";
import { useNavigation } from "@react-navigation/native";
import Submit from "components/Fields/Submit";
import AuthButton from "components/Fields/AuthButton";
import { loginData, submitLogin } from "utils/Forms/Login";

import Field from "components/Fields/Field";
// TODO: submit on keyboard
const Login = () => {
  const theme = useTheme();
  const { t, i18n } = useTranslation();
  const keyboardVerticalOffset = Platform.OS === "ios" ? 40 : 0;
  const [data, setData]: [loginData, Function] = useState({
    username: "",
    password: "",
  });
  const setLoginData = (dataType: "username" | "password", str: string) => {
    if (dataType == "username") setData({ ...data, username: str });
    else setData({ ...data, password: str });
  };
  const navigation = useNavigation();
  const styles = StyleSheet.create({
    mainContainer: {
      backgroundColor: theme.backgroundColor,
      justifyContent: "center",
      flex: 1,
    },
    scrollView: {},
    content: {
      marginBottom: htdp("5%"),
      gap: 15,
      paddingHorizontal: wtdp("5%"),
    },
    header: {
      flexDirection: "row",
      justifyContent: "center",
      gap: 15,
      paddingTop: htdp("5%"),
      alignItems: "center",
    },
    headerText: {
      color: theme.header,
      textAlign: "center",
      fontSize: htdp("3%"),
    },
    errorText: {
      color: theme.danger,
      textAlign: "center",
      fontSize: htdp("2.3%"),
    },
  });

  return (
    <KeyboardAvoidingView
      style={styles.mainContainer}
      behavior={Platform.OS === "ios" ? "padding" : null!}
      keyboardVerticalOffset={keyboardVerticalOffset}
    >
      <ScrollView style={styles.scrollView}>
        <View style={styles.content}>
          <View style={styles.header}>
            <StyledText style={styles.headerText}>
              {t("LoginHeaderMessage")}
            </StyledText>
            <MaterialCommunityIcons
              name="hand-wave"
              size={htdp("8%")}
              color={theme.bottomTabActiveIcon}
            />
          </View>
          <Field label="Username">
            <TextInput
              onChange={(value) => {
                setLoginData("username", value.nativeEvent.text);
              }}
              maxLength={24}
              placeholder="Username"
            />
          </Field>
          <Field label="Password">
            <TextInput
              onChange={(value) => {
                setLoginData("password", value.nativeEvent.text);
              }}
              textContentType="password"
              secureTextEntry
              maxLength={20}
              placeholder={"Password"}
            />
          </Field>
          <View
            style={{ flexDirection: "row", justifyContent: "center", gap: 5 }}
          >
            {/* TODO ADD TRANSLATION */}
            <StyledText style={{ color: theme.body }}>
              {t("Don't have an account ?")}
            </StyledText>
            <TouchableOpacity
              onPress={() => {
                navigation.navigate("Register");
              }}
            >
              <StyledText
                style={{ color: theme.bottomTabActiveIcon }}
                weight="Bold"
              >
                {t("Register")}
              </StyledText>
            </TouchableOpacity>
          </View>
          <AuthButton
            label="Login"
            onPress={() => {
              submitLogin(data, navigation);
            }}
          />
        </View>
      </ScrollView>
    </KeyboardAvoidingView>
  );
};

export default Login;

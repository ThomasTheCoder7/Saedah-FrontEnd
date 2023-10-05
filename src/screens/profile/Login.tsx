import {
  View,
  Text,
  KeyboardAvoidingView,
  ScrollView,
  Platform,
  StyleSheet,
  TouchableOpacity,
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
import PasswordField from "components/Fields/PasswordField";
import { useNavigation } from "@react-navigation/native";
import Submit from "components/Fields/Submit";
import AuthButton from "components/Fields/AuthButton";

const Login = () => {
  const theme = useTheme();
  const { t, i18n } = useTranslation();
  const keyboardVerticalOffset = Platform.OS === "ios" ? 40 : 0;
  const navigation = useNavigation()
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
          <TextField label="Username"/>
          <PasswordField label="Password" />
          <View
            style={{ flexDirection: "row", justifyContent: "center", gap: 5 }}
            >
            {/* TODO ADD TRANSLATION */}
            <StyledText style={{ color: theme.body }}>
              {t("Don't have an account ?")}
            </StyledText>
            <TouchableOpacity onPress={()=>{navigation.navigate('Register')}}>
            <StyledText style={{ color: theme.bottomTabActiveIcon }} weight="Bold">
              {t('Register')}
            </StyledText>
            </TouchableOpacity>
          </View>
          <AuthButton label="Login" />
        </View>
      </ScrollView>
    </KeyboardAvoidingView>
  );
};

export default Login;

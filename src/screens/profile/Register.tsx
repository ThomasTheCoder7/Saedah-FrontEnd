import {
  View,
  Text,
  KeyboardAvoidingView,
  ScrollView,
  Platform,
  StyleSheet,
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
import RNDateTimePicker from "@react-native-community/datetimepicker";
import DateTimePicker from "components/Fields/DateTimePicker";

const Register = () => {
  const theme = useTheme();
  const { t } = useTranslation();
  const keyboardVerticalOffset = Platform.OS === "ios" ? 70 : 0;

  const styles = StyleSheet.create({
    mainContainer: {
      backgroundColor: theme.backgroundColor,
      justifyContent: "center",
      flex: 1,
    },
    scrollView: {},
    content: {
      marginBottom: htdp("5%"),
      gap: 20,
      paddingHorizontal: wtdp("5%"),
    },
    header: {
      flexDirection: "row",
      justifyContent: "center",
      gap: 20,
      paddingTop: htdp("10%"),
      alignItems: "center",
    },
    headerText: {
      color: theme.header,
      textAlign: "center",
      fontSize: htdp("4%"),
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
              {t("Welcome Back")}
            </StyledText>
            <MaterialCommunityIcons
              name="hand-wave"
              size={htdp("8%")}
              color={theme.bottomTabActiveIcon}
            />
          </View>
          {/* TODO ADD TRANSLATION */}
          <StyledText style={styles.errorText} weight="SemiBold">
            Invalid Username or Password
          </StyledText>
          <TextField label="Email" />
          <TextField label="Username" />
          <DateTimePicker/>
          <PasswordField label="Password" />
          <View
            style={{ flexDirection: "row", justifyContent: "center", gap: 5 }}
          >
            <StyledText style={{ color: theme.body }}>
              Already have an account ?
            </StyledText>
            <StyledText style={{ color: theme.bottomTabActiveIcon }}>
              Log in
            </StyledText>
          </View>
        </View>
      </ScrollView>
    </KeyboardAvoidingView>
  );
};

export default Register;

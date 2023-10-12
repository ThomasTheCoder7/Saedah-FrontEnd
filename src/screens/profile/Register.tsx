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
import RNDateTimePicker from "@react-native-community/datetimepicker";
import DateTimePicker from "components/Fields/DateTimePicker";
import { useNavigation } from "@react-navigation/native";
import AuthButton from "components/Fields/AuthButton";
import { store } from "utils/storageHandler";
import { useAuth } from "contexts/AuthContext";

const Register = () => {
  const theme = useTheme();
  const { t } = useTranslation();
  const keyboardVerticalOffset = Platform.OS === "ios" ? 70 : 0;
  const {setAuth} = useAuth();
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
      <ScrollView style={styles.scrollView} showsVerticalScrollIndicator={false}>
        <View style={styles.content}>
          <View style={styles.header}>
            <StyledText style={styles.headerText}>
              {t("RegisterHeaderMessage")}
            </StyledText>
            <MaterialCommunityIcons
              name="hand-wave"
              size={htdp("7%")}
              color={theme.bottomTabActiveIcon}
            />
          </View>
          <TextField label="Email" />
          <TextField label="Username" />
          <PasswordField label="Password" />
          <View
            style={{ flexDirection: "row", justifyContent: "center", gap: 5 }}
            >
            <StyledText style={{ color: theme.body }}>
            {/* TODO ADD TRANSLATION */}
              {t("Already have an account ?")}
            </StyledText>
            <TouchableOpacity onPress={()=>{navigation.navigate('Login')}}>
              <StyledText style={{ color: theme.bottomTabActiveIcon }} weight="Bold">
                {t('Login')}
              </StyledText>
            </TouchableOpacity>
          </View>
          <AuthButton label="Register" onPress={()=>{
            setAuth(true)
            navigation.reset({
              index: 0,
              routes: [{ name: "Main" }],
            })
          }}/>
        </View>
      </ScrollView>
    </KeyboardAvoidingView>
  );
};

export default Register;

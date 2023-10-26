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
import RNDateTimePicker from "@react-native-community/datetimepicker";
import DateTimePicker from "components/Fields/DatePicker";
import { useNavigation } from "@react-navigation/native";
import AuthButton from "components/Fields/AuthButton";
import { store } from "utils/storageHandler";
import { useAuth } from "contexts/AuthContext";
import { registerData, submitRegister } from "utils/Forms/Register";
import Field from "components/Fields/Field";

const Register = () => {
  const theme = useTheme();
  const { t } = useTranslation();
  const [loading, setLoading] = useState(false);
  const keyboardVerticalOffset = Platform.OS === "ios" ? 70 : 0;
  const [data, setData]:[registerData, Function] = useState({fullname:'',email:'', username:'', password:''})
  const setFullName = (val:string)=>{
    setData({...data, fullname:val});
  }
  const setEmail = (val:string)=>{
    setData({...data, email:val});
  }
  const setUsername = (val:string)=>{
    setData({...data, username:val});
  }
  const setPassword = (val:string)=>{
    setData({...data, password:val});
  }
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
          <Field label="Full Name">
            <TextInput
              onChange={(value) => {
                setFullName(value.nativeEvent.text);
              }}
              maxLength={24}
              placeholder="Firstname Lastname"
              placeholderTextColor={theme.hr}
            />
          </Field>
          <Field label="Email">
            <TextInput
              onChange={(value) => {
                setEmail(value.nativeEvent.text);
              }}
              maxLength={24}
              placeholder="example@ggg.com"
              keyboardType="email-address"
              placeholderTextColor={theme.hr}
            />
          </Field>
          <Field label="Username">
            <TextInput
              onChange={(value) => {
                setUsername(value.nativeEvent.text);
              }}
              maxLength={24}
              placeholder="Username"
              placeholderTextColor={theme.hr}
            />
          </Field>
          <Field label="Password">
            <TextInput
              onChange={(value) => {
                setPassword(value.nativeEvent.text);
              }}
              textContentType="password"
              secureTextEntry
              maxLength={20}
              placeholder={"Password"}
              placeholderTextColor={theme.hr}
            />
          </Field>
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
            setLoading(true)
            submitRegister(data, navigation, setLoading);
          }} loading={loading}/>
        </View>
      </ScrollView>
    </KeyboardAvoidingView>
  );
};

export default Register;

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
  const { t } = useTranslation();
  const keyboardVerticalOffset = Platform.OS === "ios" ? 40 : 0;
  return (
    <KeyboardAvoidingView
      style={{
        backgroundColor: theme.backgroundColor,
        justifyContent:'center',
        flex:1
      }}
      behavior={Platform.OS === "ios" ? "padding" : null!}
      keyboardVerticalOffset={keyboardVerticalOffset}
    >
      <ScrollView style={{ paddingHorizontal: wtdp("7%") }}>
        <View style={{ marginBottom: htdp("5%"), gap: 20 }}>
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
          <View style={{flexDirection:'row', justifyContent:'center', gap:5}}>
          <StyledText style={{color:theme.body}}>
              Don't have an account ? 
          </StyledText>
          <StyledText style={{color:theme.bottomTabActiveIcon}}>
            Sign up
          </StyledText>
          </View>
        </View>
      </ScrollView>
    </KeyboardAvoidingView>
  );
};

export default Login;

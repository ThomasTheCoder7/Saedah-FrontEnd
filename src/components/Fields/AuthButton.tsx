import { View, Text, TouchableOpacity, ActivityIndicator } from "react-native";
import React from "react";
import { LinearGradient } from "expo-linear-gradient";
import { useTheme } from "contexts/ThemeContexts";
import StyledText from "components/StyledText";
import { BlurView } from "expo-blur";
import { useTranslation } from "react-i18next";

type props = {
  label: string;
  secondary?: boolean;
  loading?: boolean;
  onPress: Function;
};

const AuthButton = ({ label, secondary = false, onPress, loading }: props) => {
  const theme = useTheme();
  const { t } = useTranslation();
  return (
    <TouchableOpacity onPress={() => onPress()} disabled={loading}>
      <LinearGradient
        style={{ padding: 2, borderRadius: 12 }}
        locations={[0.1, 0.9]}
        colors={[theme.bottomTabActiveIcon, theme.secondary]}
        start={{ x: 0, y: 0.6 }}
        end={{ x: 1, y: 0.8 }}
      >
        <View
          style={{
            padding: 15,
            borderRadius: 10,
            alignItems: "center",
            backgroundColor: secondary ? theme.backgroundColor : "transparent",
            flexDirection:'row',
            justifyContent:'center'
          }}
        >
          <StyledText
            style={{ color: theme.header, fontSize: 18, letterSpacing: 1, alignItems:'center' }}
            weight="SemiBold"
          >
            {t(label)} 
          </StyledText>
          {loading && <ActivityIndicator color={secondary?theme.bottomTabActiveIcon:theme.backgroundColor}/>}
        </View>
      </LinearGradient>
    </TouchableOpacity>
  );
};

export default AuthButton;

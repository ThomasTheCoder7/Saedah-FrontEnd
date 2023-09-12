import { View } from "react-native";
import React from "react";
import { useTheme } from "contexts/ThemeContexts";
import StyledText from "components/StyledText";
import Hr from "components/Hr";
import {
  widthPercentageToDP as wtdp,
  heightPercentageToDP as htdp,
} from "react-native-responsive-screen";
import { Ionicons } from "@expo/vector-icons";
import ThemePicker from "./ThemePicker";
import LanguagePicker from './LanguagePicker';

const Settings = () => {
  const theme = useTheme();
  return (
    <View
      style={{
        backgroundColor: theme.backgroundColor,
        flex: 1,
        paddingTop: 25,
        paddingHorizontal: 15,
      }}
    >
      <ThemePicker />
      <Hr width="98%" />
      <LanguagePicker/>
    </View>
  );
};

export default Settings;

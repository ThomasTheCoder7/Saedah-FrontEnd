import { View } from "react-native";
import React from "react";
import { useTheme } from "contexts/ThemeContexts";
import StyledText from "components/StyledText";
import {
  widthPercentageToDP as wtdp,
  heightPercentageToDP as htdp,
} from "react-native-responsive-screen";
import { Ionicons } from "@expo/vector-icons";

const Settings = () => {
  const theme = useTheme();
  return (
    <View
      style={{
        backgroundColor: theme.backgroundColor,
        flex: 1,
        paddingTop: 25,
        paddingHorizontal: 10,
      }}
    >
      <StyledText style={{ color: theme.header, fontSize: htdp("3%") }} >
        Appearance
      </StyledText>
      
    </View>
  );
};

export default Settings;

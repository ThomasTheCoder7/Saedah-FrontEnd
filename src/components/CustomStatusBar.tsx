import themeType from "assets/Themes/themeType";
import { useTheme } from "contexts/ThemeContexts";
import * as React from "react";
import { Text, View, StyleSheet, StatusBar, StatusBarStyle, useColorScheme } from "react-native";
import {
  SafeAreaView,
  SafeAreaProvider,
  useSafeAreaInsets,
} from "react-native-safe-area-context";

type props = {
    backgroundColor:string
    barStyle?:StatusBarStyle
}

const CustomStatusBar = ({
  backgroundColor,
  barStyle = "dark-content",
  //add more props StatusBar
}:props) => {
  const insets = useSafeAreaInsets();
  const theme:themeType = useTheme();

  return (
    <View style={{ height: insets.top, backgroundColor, }}>
      <StatusBar
        animated={true}
        backgroundColor={backgroundColor}
        barStyle={theme.isDark? 'light-content':'dark-content'}
        translucent
      />
    </View>
  );
};

export default CustomStatusBar
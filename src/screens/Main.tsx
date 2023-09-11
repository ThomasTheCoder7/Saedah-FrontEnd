import { View, Text, SafeAreaView, } from "react-native";
import React from "react";
import BottomTab from "navigation/BottomTab";
import CustomStatusBar from "components/CustomStatusBar";
import { useTheme } from "contexts/ThemeContexts";
import themeType from "assets/Themes/themeType";

const Main = () => {
    const theme:themeType = useTheme()
  return (
    <View style={{flex:1}}>
      <CustomStatusBar backgroundColor={theme.backgroundColor} />
      <SafeAreaView
        style={{flex:1}}
      >
        <BottomTab />
      </SafeAreaView>
    </View>
  );
};

export default Main;

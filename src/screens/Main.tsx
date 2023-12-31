import { useTheme } from "contexts/ThemeContexts";
import BottomTab from "navigation/BottomTab";
import React from "react";
import { useTranslation } from "react-i18next";
import { SafeAreaView, View } from "react-native";
import FlashMessage from "react-native-flash-message";
import {
  heightPercentageToDP as htdp,
  widthPercentageToDP as wtdp,
} from "react-native-responsive-screen";
const Main = () => {
  const theme = useTheme();
  const { i18n } = useTranslation();


  return (
    <View style={{ flex: 1, direction: i18n.dir(i18n.language), backgroundColor:theme.backgroundColor }}>

      <SafeAreaView style={{ flex: 1 }}>
        <BottomTab />
        
      </SafeAreaView>
    </View>
  );
};

export default Main;

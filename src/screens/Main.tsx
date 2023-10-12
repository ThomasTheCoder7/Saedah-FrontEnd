import themeType from "assets/Themes/themeType";
import { useTheme } from "contexts/ThemeContexts";
import { getLocales } from "expo-localization";
import BottomTab from "navigation/BottomTab";
import React, { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { SafeAreaView, View } from "react-native";
import FlashMessage from "react-native-flash-message";
import {
  heightPercentageToDP as htdp,
  widthPercentageToDP as wtdp,
} from "react-native-responsive-screen";
import { indexToLang } from "utils/LanguageHandler";
import { load } from "utils/storageHandler";
// import * as Updates from 'expo-updates';
import { useSetTheme } from '../contexts/ThemeContexts';
const Main = () => {
  const theme = useTheme();
  const { i18n } = useTranslation();

  //TODO Uncomment on production.
  // useEffect(()=>{
  //   async function onFetchUpdateAsync() {
  //     try {
  //       const update = await Updates.checkForUpdateAsync();

  //       if (update.isAvailable) {
  //         await Updates.fetchUpdateAsync();
  //         await Updates.reloadAsync();
  //       }
  //     } catch (error) {
  //       // You can also add an alert() to see the error message in case of an error when fetching updates.
  //       alert(`Error fetching latest Expo update: ${error}`);
  //     }
  //   }
  //   onFetchUpdateAsync()
  // },[i18n.language])

  return (
    <View style={{ flex: 1, direction: i18n.dir(i18n.language), backgroundColor:theme.backgroundColor }}>

      <SafeAreaView style={{ flex: 1 }}>
        <BottomTab />
        <FlashMessage
          position="top"
          style={{
            borderRadius: 20,
            marginHorizontal: wtdp("5%"),
            marginTop: htdp("4%"),
            alignItems: "center",
            justifyContent: "center",
          }}
          titleStyle={{
            fontFamily: `${
              i18n.language === "en" ? "Poppins" : "Cairo"
            }-SemiBold`,
            paddingVertical: 5,
          }}
          textStyle={{
            fontFamily: `${
              i18n.language === "en" ? "Poppins" : "Cairo"
            }-Regular`,
          }}
        />
      </SafeAreaView>
    </View>
  );
};

export default Main;

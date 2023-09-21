import { View, Text, SafeAreaView, I18nManager } from "react-native";
import React, { useEffect, useState } from "react";
import BottomTab from "navigation/BottomTab";
import CustomStatusBar from "components/CustomStatusBar";
import { useTheme } from "contexts/ThemeContexts";
import themeType from "assets/Themes/themeType";
import { getLocales } from "expo-localization";
import { useTranslation } from "react-i18next";
import { indexToLang } from "utils/LanguageHandler";
import { load } from "utils/storageHandler";
import FlashMessage from "react-native-flash-message";
import {
  widthPercentageToDP as wtdp,
  heightPercentageToDP as htdp,
} from "react-native-responsive-screen";
// import * as Updates from 'expo-updates';
const Main = () => {
  const theme: themeType = useTheme();
  const { i18n } = useTranslation();
  const [loading, setLoading] = useState(true);
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

  useEffect(() => {
    const loadData = async () => {
      const language = await load("language");
      if (!language) {
        setLoading(false)  
        return
      }

      const languageCode = parseInt(language);

      i18n.changeLanguage(
        languageCode == 2
          ? getLocales()[0].languageCode
          : indexToLang[languageCode]
      );
      setLoading(false);
    };
    loadData();
  }, []);
  if (loading) return;

  return (
    <View style={{ flex: 1, direction: i18n.dir(i18n.language) }}>
      <CustomStatusBar backgroundColor={theme.backgroundColor} />
      <SafeAreaView style={{ flex: 1 }}>
        <BottomTab />
        <FlashMessage
          position="top"
          style={{
            borderRadius: 20,
            marginHorizontal: wtdp("5%"),
            marginTop: htdp("4%"),
            alignItems:'center',
            justifyContent:'center',
          }}
          titleStyle={{
            fontFamily: `${
              i18n.language === "en" ? "Poppins" : "Cairo"
            }-SemiBold`,
          paddingVertical:5}}
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

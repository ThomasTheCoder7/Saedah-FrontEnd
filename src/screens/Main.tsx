import { View, Text, SafeAreaView, I18nManager } from "react-native";
import React, {useEffect} from "react";
import BottomTab from "navigation/BottomTab";
import CustomStatusBar from "components/CustomStatusBar";
import { useTheme } from "contexts/ThemeContexts";
import themeType from "assets/Themes/themeType";
import { useTranslation } from "react-i18next";
import * as Updates from 'expo-updates';
const Main = () => {
    const theme:themeType = useTheme()
    const {i18n} = useTranslation();
    useEffect(()=>{
      async function onFetchUpdateAsync() {
        try {
          const update = await Updates.checkForUpdateAsync();
    
          if (update.isAvailable) {
            await Updates.fetchUpdateAsync();
            await Updates.reloadAsync();
          }
        } catch (error) {
          // You can also add an alert() to see the error message in case of an error when fetching updates.
          alert(`Error fetching latest Expo update: ${error}`);
        }
      }
      onFetchUpdateAsync()
    },[i18n.language])
  return (
    <View style={{flex:1, direction:i18n.dir(i18n.language)}}>
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

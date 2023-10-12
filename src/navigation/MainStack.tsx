import { createNativeStackNavigator } from "@react-navigation/native-stack";
import CustomStatusBar from "components/CustomStatusBar";
import { useAuth } from "contexts/AuthContext";
import { useSetTheme, useTheme } from "contexts/ThemeContexts";
import { getLocales } from "expo-localization";
import { default as React, useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { Platform, View } from "react-native";
import Main from "screens/Main";
import { indexToLang } from "utils/LanguageHandler";
import { load } from "utils/storageHandler";
import LoginStack from "./LoginStack";

const Stack = createNativeStackNavigator();

const MainStack = () => {
  const { isAuth } = useAuth();
  const theme = useTheme();
  const [loading, setLoading] = useState(true);
  const { i18n } = useTranslation();
  const themes = ["dark", "light"];
  const setTheme = useSetTheme();
  useEffect(() => {
    const loadData = async () => {
      let language = await load("language");
      let theme = await load("theme");
      const languageCode = language == null ? 2 : parseInt(language);
      setTheme(theme == null ? "default" : themes[parseInt(theme)]);
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
    <View
      style={{
        flex: 1,
        backgroundColor: theme.backgroundColor,
        direction:i18n.dir(i18n.language)
      }}
    >
      <CustomStatusBar backgroundColor={theme.backgroundColor} />
      <Stack.Navigator
        initialRouteName={isAuth ? "Main" : "Start"}
        screenOptions={{
          gestureEnabled:false,
          animation: `${
          i18n.language == "en"
                ? "slide_from_right"
                : "slide_from_left"
          }`,
        }}
      >
        <Stack.Screen
          name="Start"
          component={LoginStack}

          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Main"
          component={Main}
          options={{ headerShown: false }}
        />
      </Stack.Navigator>
    </View>
  );
};

export default MainStack;

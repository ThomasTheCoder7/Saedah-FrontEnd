import LanguagePicker from 'components/Settings/LanguagePicker';
import ThemePicker from "components/Settings/ThemePicker";
import { useTheme } from "contexts/ThemeContexts";
import React from "react";
import { ScrollView, View } from "react-native";

const Settings = () => {
  const theme = useTheme();
  return (
    <ScrollView
      style={{
        backgroundColor: theme.backgroundColor,
        flex: 1,
        paddingTop: 25,
        marginHorizontal: 15,
      }}
    >
      <View style={{backgroundColor:theme.bottomTabBackground, padding:20, borderRadius:15, marginVertical:15}}>
      <ThemePicker />
      </View>
      <View style={{backgroundColor:theme.bottomTabBackground, padding:20, borderRadius:15, marginVertical:15}}>
      <LanguagePicker/>
      </View>

    </ScrollView>
  );
};

export default Settings;

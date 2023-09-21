import React, { useEffect } from "react";
import { View } from "react-native";
import StyledText from "components/StyledText";
import { CheckBox } from "@rneui/themed";
import { useTheme } from "contexts/ThemeContexts";
import { useState } from "react";
import {
  widthPercentageToDP as wtdp,
  heightPercentageToDP as htdp,
} from "react-native-responsive-screen";
import { FontAwesome, FontAwesome5 } from "@expo/vector-icons";
import { useTranslation } from "react-i18next";
import { getLocales } from "expo-localization";
import { changeLanguage } from "utils/LanguageHandler";
import { load } from "utils/storageHandler";

const langs: Record<number, string> = {
  1: "en",
  0: "ar",
};
const LanguagePicker = () => {
  const theme = useTheme();
  const { t, i18n } = useTranslation();
  const [selectedIndex, setIndex] = useState(0);
  const languages = ["Arabic", "English", "Default"];
  let checkBoxes = [];
  const [loading, setLoading] = useState(true)
  useEffect(()=>{
    const loadData = async()=>{
      const data = await load('language')
      setIndex(data)
      setLoading(false)
    }
    loadData()
  },[])

  for (let i = 0; i < 3; i++) {
    checkBoxes.push(
      <CheckBox
        key={i}
        checked={selectedIndex == i}
        uncheckedColor={theme.bottomTabInactiveIcon}
        title={t(languages[i])}
        checkedIcon="dot-circle-o"
        uncheckedIcon="circle-o"
        checkedColor={theme.bottomTabActiveIcon}
        containerStyle={{
          backgroundColor: "transparent",
          paddingHorizontal: 0,
        }}
        textStyle={{ fontFamily: "Poppins-Light", color: theme.body }}
        onPress={() => {
          setIndex(i);
          changeLanguage(
            i18n,
            i != 2 ? langs[i] : getLocales()[0].languageCode,
            i == 2
          );
        }}
      />
    );
  }

  if(loading) return

  return (
    <View>
      <View style={{ flexDirection: "row", gap: 10, alignItems: "center" }}>
        <FontAwesome5 name="language" size={24} color={theme.header} />
        <StyledText
          style={{ color: theme.header, fontSize: htdp("3%") }}
          weight={"Regular"}
        >
          {t("Language")}
        </StyledText>
      </View>
      {checkBoxes}
    </View>
  );
};

export default LanguagePicker;

import React from "react";
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

const langs:Record<string,number>= {
  'en':1,
  'ar':0,
}
const LanguagePicker = () => {
  const theme = useTheme();
  const {t, i18n} = useTranslation()
  const [selectedIndex, setIndex] = useState(getLocales()[0].languageCode == i18n.language ? 2:langs[i18n.language]);
  const languages = ['Arabic', 'English', 'Default'];
  let checkBoxes = [];
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
          if(languages[i] === 'Arabic') {
            i18n.changeLanguage('ar');
            return
        }
          if(languages[i] === 'English') {
            i18n.changeLanguage('en')
        }
          if(languages[i] === 'Default') {
            i18n.changeLanguage(getLocales()[0].languageCode);
        }



        }}
      />
    );
  }

  return (
    <View>
      <View style={{ flexDirection: "row", gap: 10, alignItems:'center'}}>
        <FontAwesome5 name="language" size={24} color={theme.header} />
        <StyledText
          style={{ color: theme.header, fontSize: htdp("3%") }}
          weight={"Regular"}
        >
          {t('Language')}
        </StyledText>
      </View>
      {checkBoxes}
    </View>
  );
};

export default LanguagePicker;

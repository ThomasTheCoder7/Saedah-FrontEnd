import React from "react";
import { View, Text } from "react-native";
import StyledText from "components/StyledText";
import { CheckBox } from "@rneui/themed";
import { useSetTheme, useTheme } from "contexts/ThemeContexts";
import { useState } from "react";
import {
  widthPercentageToDP as wtdp,
  heightPercentageToDP as htdp,
} from "react-native-responsive-screen";
import { FontAwesome } from "@expo/vector-icons";
import { useTranslation } from "react-i18next";

const ThemePicker = () => {
  const theme = useTheme();
  const setTheme = useSetTheme()
  const [selectedIndex, setIndex] = useState(2);
  const themes = ["Dark", "Light", "Default"];
  let checkBoxes = [];
  const {t} = useTranslation()
  for (let i = 0; i < 3; i++) {
    checkBoxes.push(
      <CheckBox
        key={i}
        checked={selectedIndex == i}
        uncheckedColor={theme.bottomTabInactiveIcon}
        title={t(themes[i])}
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
          setTheme(themes[i].toLowerCase());
        }}
      />
    );
  }

  return (
    <View>
      <View style={{ flexDirection: "row", gap: 10, alignItems:'center'}}>
        <FontAwesome name="paint-brush" size={24} color={theme.header} />
        <StyledText
          style={{ color: theme.header, fontSize: htdp("3%") }}
          weight={"Regular"}
        >
          {t('Appearance')}
        </StyledText>
      </View>
      {checkBoxes}
    </View>
  );
};

export default ThemePicker;

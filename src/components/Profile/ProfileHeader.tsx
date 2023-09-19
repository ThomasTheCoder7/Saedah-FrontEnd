import { View, Text, TouchableOpacity } from "react-native";
import React from "react";
import { useTheme } from "contexts/ThemeContexts";
import { widthPercentageToDP as wtdp ,heightPercentageToDP as htdp } from 'react-native-responsive-screen'
import { useNavigation } from '@react-navigation/native';
import { useTranslation } from "react-i18next";
import SettingLink from "./SettingLink";
const ProfileHeader = () => {
  
  return (
    <>
      <View>
          <SettingLink/>  
      </View>
    </>
  );  
};

export default ProfileHeader;

import { View, Text, TouchableOpacity } from "react-native";
import React from "react";
import { useTheme } from "contexts/ThemeContexts";
import { Avatar } from "@rneui/themed";
import { Entypo } from "@expo/vector-icons";
import StyledText from "components/StyledText";
import { widthPercentageToDP as wtdp ,heightPercentageToDP as htdp } from 'react-native-responsive-screen'
import { useNavigation } from '@react-navigation/native';
import { useTranslation } from "react-i18next";
import LoggedInHeader from "./LoggedInHeader";
import GuestHeader from "./GuestHeader";
const ProfileHeader = () => {
  const theme = useTheme();
  const navigation = useNavigation();
  const {i18n} = useTranslation()
  return (
    <>
      <GuestHeader/>
      {/* <LoggedInHeader/> */}
    </>
  );  
};

export default ProfileHeader;

import { View, Text, ScrollView } from "react-native";
import React, { useState } from "react";
import { useTheme } from "contexts/ThemeContexts";
import ProfileHeader from "components/Profile/ProfileHeader";
import ProfileInfo from "components/Profile/ProfileInfo";
import ProfileTab from "../../navigation/ProfileTab";
import {
  widthPercentageToDP as wtdp,
  heightPercentageToDP as htdp,
} from "react-native-responsive-screen";
const Profile = () => {
  const theme = useTheme();
  
  return (
    <ScrollView
      style={{ backgroundColor: theme.backgroundColor }}
      showsVerticalScrollIndicator={false}
    >
      <ProfileHeader />
      <ProfileInfo />

      <ProfileTab />
    </ScrollView>
  );
};

export default Profile;

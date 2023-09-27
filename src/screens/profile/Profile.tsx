import { View, Text, ScrollView } from "react-native";
import React, { useState } from "react";
import { useTheme } from "contexts/ThemeContexts";
import ProfileHeader from "components/Profile/ProfileHeader";
import ProfileInfo from "components/Profile/ProfileInfo";
import ProfileTab from "navigation/ProfileTab";
import {
  widthPercentageToDP as wtdp,
  heightPercentageToDP as htdp,
} from "react-native-responsive-screen";
import ProfileTab2 from "navigation/ProfileTab2";
import { useScrollable } from "../../contexts/ScrollContext";

const Header = () => {
  return (
    <View style={{ width: "100%", height: 150 }}>
      <Text>0</Text>
      <Text>1</Text>
    </View>
  );
};

const Profile = () => {
  const theme = useTheme();
  const { setParentScrollable, parentScrollable } = useScrollable();
  return(<ProfileTab2 />);

};

export default Profile;

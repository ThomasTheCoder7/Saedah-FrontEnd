import { View, Text, TouchableOpacity } from "react-native";
import React, { useState } from "react";
import { useTheme } from "contexts/ThemeContexts";
import {
  widthPercentageToDP as wtdp,
  heightPercentageToDP as htdp,
} from "react-native-responsive-screen";
import { useNavigation } from "@react-navigation/native";
import { useTranslation } from "react-i18next";
import SettingLink from "./SettingLink";
import LogoutButton from "./LogoutButton";
import LogoutAlert from "./LogoutAlertModal";
const ProfileHeader = () => {
  const [modalVisible, setModalVisible]: [boolean, Function] = useState(false);
  const { i18n } = useTranslation();
  return (
    <>
      <View
        style={{
          alignItems: "center",
          justifyContent: i18n.language == "en" ? "flex-end" : "flex-end",
          flexDirection: i18n.language == "en" ? "row" : "row-reverse",
          paddingHorizontal: 10,
          paddingVertical: 5,
        }}
      >
        <LogoutAlert
          modalVisible={modalVisible}
          setModalVisible={setModalVisible}
        />
        <LogoutButton onPress={() => setModalVisible(true)} />
      </View>
    </>
  );
};

export default ProfileHeader;

import { View, Text, TouchableOpacity } from "react-native";
import React from "react";
import { useTheme } from "contexts/ThemeContexts";
import { Avatar } from "@rneui/themed";
import { Entypo } from "@expo/vector-icons";
import StyledText from "components/StyledText";
import { widthPercentageToDP as wtdp ,heightPercentageToDP as htdp } from 'react-native-responsive-screen'
import { useNavigation } from '@react-navigation/native';
import { useTranslation } from "react-i18next";
const ProfileHeader = () => {
  const theme = useTheme();
  const navigation = useNavigation();
  const {i18n} = useTranslation()
  return (
    <TouchableOpacity style={{flexDirection:'row', alignItems:'center', gap:10}} onPress={()=>{navigation.navigate('Profile')}}>
      <Avatar
        size={48}
        rounded
        icon={{ name: "pencil", type: "font-awesome" }}
        containerStyle={{ backgroundColor: "#9700b9" }}
      />
      <StyledText style={{color:theme.header, fontSize:htdp('3%')}} weight="SemiBold">
        Ahmad
      </StyledText>
      <Entypo name={`chevron-small-${i18n.language=='ar'?'left':'right'}`} size={htdp('5%')} color={theme.body} />
    </TouchableOpacity>
  );
};

export default ProfileHeader;

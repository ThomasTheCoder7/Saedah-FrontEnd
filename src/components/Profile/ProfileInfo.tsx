import { View, Text } from "react-native";
import { Avatar } from "@rneui/themed";
import React from "react";
import {
  widthPercentageToDP as wtdp,
  heightPercentageToDP as htdp,
} from "react-native-responsive-screen";
import StyledText from "components/StyledText";
import { useTheme } from "contexts/ThemeContexts";
import Stats from './Stats';
const ProfileInfo = () => {
    const theme = useTheme()
  return (
    <View style={{alignItems:'center', gap:20}}>
      <Avatar
        icon={{ type: "FontAwesome5", size: htdp("20%"), name: "home" }}
        size={htdp("20%")}
        rounded
        containerStyle={{ backgroundColor: "red" }}
      />
      <StyledText weight="SemiBold" style={{fontSize:htdp('3%'), color:theme.header}}>
        Jawad
      </StyledText>
      <Stats/>
    </View>
  );
};

export default ProfileInfo;

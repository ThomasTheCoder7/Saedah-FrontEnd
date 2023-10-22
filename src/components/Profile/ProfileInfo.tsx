import { View, Text } from "react-native";
import { Avatar } from "@rneui/themed";
import React from "react";
import {
  widthPercentageToDP as wtdp,
  heightPercentageToDP as htdp,
} from "react-native-responsive-screen";
import StyledText from "components/StyledText";
import { useTheme } from "contexts/ThemeContexts";
import Stats from "./Stats";
import { useUserDetails } from "contexts/UserDetailsContext";
import { URL } from "utils/logicUtils";
const ProfileInfo = () => {
  const theme = useTheme();
  const {userDetails} = useUserDetails();
  return (
    <View style={{ alignItems: "center", gap: 20 }}>
      <Avatar
      source={{uri:`${URL}${userDetails.avatar}`}}
        icon={{
          type: "FontAwesome5",
          size: htdp("15%"),
          name: "person",
          color: theme.header,
        }}
        size={htdp("20%")}
        rounded
        containerStyle={{ backgroundColor: theme.bottomTabBackground }}
      />
      <StyledText
        weight="SemiBold"
        style={{ fontSize: htdp("3%"), color: theme.header }}
      >
        {userDetails.username}
      </StyledText>
      <Stats />
    </View>
  );
};

export default ProfileInfo;

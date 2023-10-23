import { Avatar } from "@rneui/themed";
import StyledText from "components/StyledText";
import { useTheme } from "contexts/ThemeContexts";
import { useUserDetails } from "contexts/UserDetailsContext";
import React from "react";
import { TouchableOpacity, View } from "react-native";
import {
  heightPercentageToDP as htdp
} from "react-native-responsive-screen";
import { URL } from "utils/logicUtils";
import Stats from "./Stats";

type props = {
  setVisible:Function;
}

const ProfileInfo = ({setVisible}:props) => {
  const theme = useTheme();
  const { userDetails } = useUserDetails();

  return (
    <View style={{ alignItems: "center", gap: 20 }}>
      <TouchableOpacity onPress={()=>{setVisible(true)}}>
        <Avatar
          source={{ uri: `${URL}${userDetails.avatar}` }}
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
      </TouchableOpacity>
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

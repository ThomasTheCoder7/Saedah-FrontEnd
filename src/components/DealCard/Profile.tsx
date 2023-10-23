import { Ionicons } from "@expo/vector-icons";
import { Avatar } from "@rneui/themed";
import DarkTheme from "assets/Themes/dark";
import StyledText from "components/StyledText";
import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import { Platform, Text, TouchableOpacity, View } from "react-native";
import { heightPercentageToDP as htdp } from "react-native-responsive-screen";
import { URL } from "utils/logicUtils";
import StyledBlurView from "./StyledBlurView";

import { follow } from "utils/Forms/DealUtils";

type props = {
  username: string;
  avatar: string;
  id: string;
  isFollowed: boolean;
  postedByUser?: boolean;
};

const Profile = ({ avatar, username, id, isFollowed, postedByUser=false }: props) => {
  const theme = DarkTheme;
  const { i18n } = useTranslation();
  const [UIisFollowed, setFollow] = useState(isFollowed);
  const flexDirection = i18n.language == "en" ? "row" : "row-reverse";

  const FollowUnfollowButton = () => {
    if (UIisFollowed) {
      return (
        <>
          <TouchableOpacity
            style={{
              justifyContent: "center",
              alignItems: "center",
              flexDirection: "row",
              gap: 5,
            }}
            onPress={() => {
              setFollow((prev) => !prev);
              follow(id);
            }}
          >
            {/* <Text style={{ color: theme.header }}>Unfollow</Text> */}
            <Ionicons name="remove" size={24} color={theme.header} />
          </TouchableOpacity>
        </>
      );
    }

    return (
      <>
        <TouchableOpacity
          style={{
            justifyContent: "center",
            alignItems: "center",
            flexDirection: "row",
            gap: 5,
          }}
          onPress={() => {
            setFollow((prev) => !prev);
            follow(id);
          }}
        >
        {/* <Text style={{ color: theme.header }}>Follow</Text> */}
        <Ionicons name="add" size={24} color={theme.header} />
        </TouchableOpacity>
        
      </>
    );
  };

  return (
    <StyledBlurView style={{ justifyContent: "center", paddingVertical: 10 }}>
      <View
        style={{
          flexDirection: Platform.OS == "android" ? flexDirection : "row",
          alignItems: "center",
          gap: 10,
          padding: 10,
          direction: "ltr",
          width: "100%",
          justifyContent: "space-between",
        }}
      >
        <View style={{ flexDirection: "row", alignItems: "center", gap: 10 }}>
          <Avatar
            size={30}
            rounded
            containerStyle={{ backgroundColor: theme.bottomTabInactiveIcon }}
            source={{
              uri: `${URL}${avatar}`,
            }}
            icon={{
              type: "FontAwesome5",
              size: 15,
              name: "person",
              color: theme.header,
            }}
          />
          <StyledText
            style={{
              color: theme.header,
              letterSpacing: 1.2,
              fontSize: htdp("2.3%"),
              verticalAlign: "middle",
            }}
            weight="Light"
          >
            {username}
          </StyledText>
        </View>
        {!postedByUser && <FollowUnfollowButton/>}
      </View>
    </StyledBlurView>
  );
};

export default Profile;

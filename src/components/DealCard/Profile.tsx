import { View, Text, Platform } from "react-native";
import React from "react";
import { useTheme } from "contexts/ThemeContexts";
import { Avatar } from "@rneui/themed";
import StyledText from "components/StyledText";
import StyledBlurView from "./StyledBlurView";
import { useTranslation } from "react-i18next";
import { widthPercentageToDP as wtdp ,heightPercentageToDP as htdp } from 'react-native-responsive-screen'
const Profile = () => {
  const theme = useTheme();
  const { i18n } = useTranslation();
  const flexDirection =
    i18n.language == "en" ? "row" : "row-reverse";

  return (
    <StyledBlurView style={{ justifyContent: "center", paddingVertical:10 }}>
      <View
        style={{
          flexDirection: Platform.OS=='android'?flexDirection:'row',
          alignItems: "center",
          gap: 10,
          padding: 10,
          direction: "ltr",
        }}
      >
        <Avatar
          size={30}
          rounded
          containerStyle={{ backgroundColor: theme.bottomTabInactiveIcon }}
          //   source={{
          //     uri: "https://images.unsplash.com/photo-1534278931827-8a259344abe7?auto=format&fit=crop&q=80&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&w=2670",
          //   }}
          icon={{
            type: "FontAwesome5",
            size: 15,
            name: "person",
            color: theme.header,
          }}

        />
        <StyledText
          style={{ color: theme.header, letterSpacing: 1.2, fontSize: htdp("2.8%"), verticalAlign:'middle' }}
          weight="Light"
        >
          HavelTheCoder
        </StyledText>
      </View>
    </StyledBlurView>
  );
};

export default Profile;

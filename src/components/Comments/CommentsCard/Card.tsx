import { Ionicons } from "@expo/vector-icons";
import { Avatar } from "@rneui/themed";
import DarkTheme from "assets/Themes/dark";
import StyledText from "components/StyledText";
import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import { Platform, Text, TouchableOpacity, View } from "react-native";
import {
  widthPercentageToDP as wtdp,
  heightPercentageToDP as htdp,
} from "react-native-responsive-screen";
import { URL, formatDate } from "utils/logicUtils";

import { follow } from "utils/Forms/DealUtils";

type props = {
  comment: any;
};

const Card = ({ comment }: props) => {
  const theme = DarkTheme;
  const { i18n } = useTranslation();
  const [UIisFollowed, setFollow] = useState(false);
  const flexDirection = i18n.language == "en" ? "row" : "row-reverse";

  return (
    <View
      style={{
        backgroundColor: theme.bottomTabBackground,
        width: "94%",
        marginHorizontal: wtdp("3%"),
        borderRadius: 15,
        marginVertical:10
      }}
    >
      <View style={{ justifyContent: "center", paddingVertical: 10 }}>
        <View
          style={{
            gap: 10,
            padding: 10,
            direction: "ltr",
            width: "100%",
          }}
        >
          <View
            style={{
              flexDirection: Platform.OS == "android" ? flexDirection : "row",
              alignItems: "center",
              justifyContent:'space-between',
              gap: 10,
            }}
          >
            <View style={{flexDirection:'row', gap:7, alignItems:'center'}}>
              <Avatar
                size={"medium"}
                rounded
                containerStyle={{
                  backgroundColor: theme.bottomTabInactiveIcon,
                  flexDirection:'row'
                }}
                source={{
                  uri: `${URL}${comment.avatar}`,
                }}
                icon={{
                  type: "FontAwesome5",
                  size: 20,
                  name: "person",
                  color: theme.header,
                }}
              />
              <StyledText
                style={{
                  color: theme.header,
                  fontSize: 20,
                  verticalAlign: "middle",
                }}
                poppins
                weight="Light"
              >
                {comment.username}
              </StyledText>
            </View>
            <View>
                <StyledText style={{color:theme.body}} poppins weight="Light">
                {formatDate(comment.created_at)}
                </StyledText>
            </View>
          </View>
          <StyledText poppins style={{ color: theme.body }}>
            {comment.content}
          </StyledText>
        </View>
      </View>
    </View>
  );
};

export default Card;

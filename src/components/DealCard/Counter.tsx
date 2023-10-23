import { View, Text, TouchableOpacity } from "react-native";
import { Entypo } from "@expo/vector-icons";
import React, { useState } from "react";
import { useTheme } from "contexts/ThemeContexts";
import StyledText from "components/StyledText";
import StyledBlurView from "./StyledBlurView";
import DarkTheme from "assets/Themes/dark";
import { vote } from "utils/Forms/DealUtils";

type props = {
  count: number;
  id: string;
};

const Counter = ({ count, id }: props) => {
  const theme = DarkTheme;
  const [UIcount, setCount]:[number, Function] = useState(0);
  return (
    <StyledBlurView style={{ flex: 0.15 }}>
      <View
        style={{
          flex: 1,
          justifyContent: "space-between",
          alignItems: "center",
          paddingVertical: 10,
        }}
      >
        <TouchableOpacity
          style={{ padding: 10 }}
          onPress={() => {
            vote(id, "upvote");
            setCount(UIcount==0?1:0);
          }}
          disabled={UIcount == -1}
        >
          <Entypo
            name="plus"
            size={24}
            color={UIcount == -1 ? theme.bottomTabInactiveIcon : theme.header}
          />
        </TouchableOpacity>
        <StyledText style={{ color: theme.header, fontSize: 17 }} weight="Bold">
          {count + UIcount}
        </StyledText>
        <TouchableOpacity
          style={{ padding: 10 }}
          onPress={() => {
            vote(id, "downvote");
            setCount(UIcount == 0?-1:0);
          }}
          disabled={UIcount == 1}
        >
          <Entypo
            name="minus"
            size={24}
            color={UIcount == 1 ? theme.bottomTabInactiveIcon : theme.header}
          />
        </TouchableOpacity>
      </View>
    </StyledBlurView>
  );
};

export default Counter;

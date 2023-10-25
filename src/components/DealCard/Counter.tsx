import { View, Text, TouchableOpacity } from "react-native";
import { Entypo } from "@expo/vector-icons";
import React, { useEffect, useState } from "react";
import { useTheme } from "contexts/ThemeContexts";
import StyledText from "components/StyledText";
import StyledBlurView from "./StyledBlurView";
import DarkTheme from "assets/Themes/dark";
import { vote } from "utils/Forms/DealUtils";
import { useDetails } from "contexts/DetailsContext";
import { useSafeAreaFrame } from "react-native-safe-area-context";

type props = {
  count: number;
  id: string;
  isUpvoted: boolean;
  isDownvoted: boolean;
};

const Counter = ({ count, id, isUpvoted, isDownvoted }: props) => {
  const theme = DarkTheme;
  const [UIcount, setCount]: [number, Function] = useState(count);
  const [isVoted, setVoted]: ["up" | "down" | null, Function] = useState();
  
  useEffect(() => {
    if (isUpvoted) setVoted("up");
    if (isDownvoted) setVoted("down");
  }, []);
  // console.log(isVoted);

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
            if (isVoted == null) {
              setCount((prev) => prev + 1);
              setVoted("up");
              return;
            }
            setCount((prev) => prev - 1);
            setVoted(null);
          }}
          disabled={isVoted == "down"}
        >
          <Entypo
            name="plus"
            size={24}
            color={
              isVoted == "down" ? theme.bottomTabInactiveIcon : theme.header
            }
          />
        </TouchableOpacity>
        <StyledText style={{ color: theme.header, fontSize: 17 }} weight="Bold">
          {UIcount}
        </StyledText>
        <TouchableOpacity
          style={{ padding: 10 }}
          onPress={() => {
            vote(id, "downvote");
            if (isVoted == null) {
              setCount((prev) => prev - 1);
              setVoted("down");
              return;
            }
            setCount((prev) => prev + 1);
            setVoted(null);
          }}
          disabled={isVoted == "up"}
        >
          <Entypo
            name="minus"
            size={24}
            color={isVoted == "up" ? theme.bottomTabInactiveIcon : theme.header}
          />
        </TouchableOpacity>
      </View>
    </StyledBlurView>
  );
};

export default Counter;

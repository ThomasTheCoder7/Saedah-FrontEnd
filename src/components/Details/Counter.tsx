import { View, Text, TouchableOpacity } from "react-native";
import React, { useEffect, useState } from "react";
import { Entypo } from "@expo/vector-icons";
import StyledText from "components/StyledText";
import { useTheme } from "contexts/ThemeContexts";
import { useDetails } from "contexts/DetailsContext";
import { vote } from "utils/Forms/DealUtils";

const Counter = () => {
  const theme = useTheme();
  const { details } = useDetails();
  const [count, setCount] = useState(details.upVotes - details.downVotes);
  const [isVoted, setVoted]: ["up" | "down" | null, Function] = useState();
  useEffect(() => {
    if (details.isUpvoted) setVoted("up");
    if (details.isDownvoted) setVoted("down");
  }, []);

  return (
    <View
      style={{
        alignItems: "center",
        justifyContent: "space-between",
        borderRadius: 10,
        padding: 10,
      }}
    >
      <TouchableOpacity
        style={{ padding: 5 }}
        onPress={() => {
          vote(details.id, "downvote");
          if (isVoted == null) {
            setCount((prev) => prev - 1);
            setVoted("down");
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
          color={isVoted == "down" ? theme.bottomTabInactiveIcon : theme.header}
        />
      </TouchableOpacity>
      <StyledText style={{ color: theme.header, fontSize: 17 }} weight="Bold">
        {count}
      </StyledText>
      <TouchableOpacity
        style={{ padding: 5 }}
        onPress={() => {
          vote(details.id, "downvote");
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
  );
};

export default Counter;

import { View, Text, TouchableOpacity } from "react-native";
import React, { useState } from "react";
import { Entypo } from "@expo/vector-icons";
import StyledText from "components/StyledText";
import { useTheme } from "contexts/ThemeContexts";
import { useDetails } from "contexts/DetailsContext";
import { vote } from "utils/Forms/DealUtils";

const Counter = () => {
  const theme = useTheme();
  const [count, setCount] = useState(0);
  const { details } = useDetails();

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
          vote(details.id, "upvote");
          setCount(count == 0 ? 1 : 0);
        }}
        disabled={count == -1}
      >
        <Entypo
          name="plus"
          size={24}
          color={count == -1 ? theme.bottomTabInactiveIcon : theme.header}
        />
      </TouchableOpacity>
      <StyledText style={{ color: theme.header, fontSize: 17 }} weight="Bold">
        {details.upVotes - details.downVotes + count}
      </StyledText>
      <TouchableOpacity
        style={{ padding: 5 }}
        onPress={() => {
          vote(id, "downvote");
          setCount(count == 0 ? -1 : 0);
        }}
        disabled={count == 1}
      >
        <Entypo
          name="minus"
          size={24}
          color={count == 1 ? theme.bottomTabInactiveIcon : theme.header}
        />
      </TouchableOpacity>
    </View>
  );
};

export default Counter;

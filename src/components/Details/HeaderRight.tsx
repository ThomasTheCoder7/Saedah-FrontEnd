import { View, Text, TouchableOpacity } from "react-native";
import React, { useState } from "react";
import { useDetails } from "contexts/DetailsContext";
import { EvilIcons, AntDesign } from "@expo/vector-icons";
import { likeDeal } from "utils/Forms/DealUtils";
import { useTheme } from "contexts/ThemeContexts";
import AlertModal from "components/AlertModal/AlertModal";
import { useUserDetails } from "contexts/UserDetailsContext";
const Delete = () => {
  const { details } = useDetails();
  const {setUserDetails} = useUserDetails()
  const [modalVisible, setModalVisible] = useState(false);
  const theme = useTheme();

  return (
    <TouchableOpacity
      onPress={() => {
        setModalVisible(true);
      }}
    >
      <AlertModal
        modalVisible={modalVisible}
        actionPress={() => {setUserDetails({})}}
        setModalVisible={setModalVisible}
        actionMessage="Delete"
        message1="deleteDealMessage"
      />
      {/* TOP RIGHT */}
      <EvilIcons name="trash" size={30} color={theme.danger} />
    </TouchableOpacity>
  );
};

const Like = () => {
  const { details } = useDetails();
  const [pressed, setPressed] = useState(details.isLiked);
  const theme = useTheme();
  return (
    <TouchableOpacity
      onPress={() => {
        setPressed(!pressed);
        likeDeal(details.id);
      }}
    >
      {/* TOP RIGHT */}
      <AntDesign
        name={pressed ? "heart" : "hearto"}
        size={20}
        color={theme.header}
      />
    </TouchableOpacity>
  );
};

const HeaderRight = () => {
  const { details } = useDetails();

  if (details.isDeletable) {
    return <Delete />;
  }
  return <Like />;
};

export default HeaderRight;

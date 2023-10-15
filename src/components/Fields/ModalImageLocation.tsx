import { View, Text, Modal, Pressable, TouchableOpacity } from "react-native";
import React, { useEffect, useState } from "react";
import {
  widthPercentageToDP as wtdp,
  heightPercentageToDP as htdp,
} from "react-native-responsive-screen";
import { useTheme } from "contexts/ThemeContexts";
import { Entypo } from "@expo/vector-icons";
import StyledText from "components/StyledText";

type props = {
  visible: boolean;
  setVisible: Function;
  openGallery: Function;
  openCamera: Function;
};

const ModalImageLocation = ({
  visible,
  setVisible,
  openGallery,
  openCamera,
}: props) => {
  const theme = useTheme();
  return (
    <>
      <View
        style={{
          zIndex: 0,
          backgroundColor: visible ? "black" : "transparent",
          opacity: 0.5,
          width: wtdp("100%"),
          height: htdp("100%"),
          position: "absolute",
          top: 0,
          left: 0,
        }}
      />
      <Modal visible={visible} transparent animationType="slide">
        <Pressable
          onPress={() => {
            setVisible(false);
          }}
          style={{
            width: wtdp("100%"),
            height: htdp("100%"),
            position: "absolute",
            top: 0,
          }}
        />
        <View
          style={{
            width: wtdp("100%"),
            height: htdp("20%"),
            position: "absolute",
            bottom: 0,
            backgroundColor: theme.bottomTabBackground,
            borderTopRightRadius: 25,
            borderTopLeftRadius: 25,

            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <TouchableOpacity
            style={{ alignItems: "center", flex: 1, gap: 3 }}
            onPress={() => {
              openCamera();
            }}
          >
            <Entypo name="camera" size={htdp("7%")} color={theme.body} />
            <StyledText
              style={{ color: theme.header, fontSize: htdp("2%") }}
              weight="Bold"
            >
              Camera
            </StyledText>
          </TouchableOpacity>
          <TouchableOpacity
            style={{ alignItems: "center", flex: 1, gap: 3 }}
            onPress={() => {
              openGallery();
            }}
          >
            <Entypo name="folder-images" size={htdp("7%")} color={theme.body} />
            <StyledText
              style={{ color: theme.header, fontSize: htdp("2%") }}
              weight="Bold"
            >
              Gallery
            </StyledText>
          </TouchableOpacity>
        </View>
      </Modal>
    </>
  );
};

export default ModalImageLocation;

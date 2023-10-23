import { View, Text, Modal, Pressable, TouchableOpacity } from "react-native";
import * as MediaLibrary from "expo-media-library";

import React, { useEffect, useState } from "react";
import {
  widthPercentageToDP as wtdp,
  heightPercentageToDP as htdp,
} from "react-native-responsive-screen";
import { useTheme } from "contexts/ThemeContexts";
import { Entypo } from "@expo/vector-icons";
import StyledText from "components/StyledText";
import * as ImagePicker from "expo-image-picker";
import { useTranslation } from "react-i18next";
import { Image } from "utils/Forms/CreateDeal";
import { extractFileType, generateRandomToken } from "utils/logicUtils";
import { useUserDetails } from "contexts/UserDetailsContext";

type props = {
  visible: boolean;
  setVisible: Function;
  appendImage: (image: Image) => void;
};

const ModalImageLocation = ({ visible, setVisible, appendImage }: props) => {
  const theme = useTheme();
  const { setUserDetails } = useUserDetails();
  const [cameraStatus, cameraRequestPermission] =
    ImagePicker.useCameraPermissions();
  const [mediaStatus, mediaRequestPermission] =
    ImagePicker.useMediaLibraryPermissions();
  const { t } = useTranslation();
  useEffect(() => {
    cameraRequestPermission();
    mediaRequestPermission();
  }, []);
  const openCamera = async () => {
    if (!cameraStatus?.granted) {
      cameraRequestPermission();
      return;
    }
    let result = await ImagePicker.launchCameraAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      quality: 0.5,
      allowsMultipleSelection: false,
    });

    if (!result.canceled) {
      appendImage({
        uri: result.assets[0].uri,
        name: `${new Date().getTime()}.${extractFileType(
          result.assets[0].uri
        )}`,
        type: `image/${extractFileType(result.assets[0].uri)}`,
      });
      setUserDetails({});
    }
    setVisible(false);
  };

  const openGallery = async () => {
    if (!mediaStatus?.granted) {
      await ImagePicker.requestMediaLibraryPermissionsAsync();
    }
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      allowsMultipleSelection: false,
      quality: 0.5,
    });

    if (!result.canceled) {
      appendImage({
        uri: result.assets[0].uri,
        name: `${new Date().getTime()}.${extractFileType(
          result.assets[0].uri
        )}`,
        type: `image/${extractFileType(result.assets[0].uri)}`,
      });
      setUserDetails({});
    }
    setVisible(false);
  };
  return (
    <>
      <View
        style={{
          backgroundColor: visible ? "black" : "transparent",
          opacity: 0.5,
          width: wtdp("100%"),
          height: htdp("100%"),
          position: "absolute",
          top: 0,
          left: 0,
          zIndex: 10,
        }}
        pointerEvents="none"
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
            zIndex: 10,
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
            zIndex: 11,
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
              {t("Camera")}
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
              {t("Gallery")}
            </StyledText>
          </TouchableOpacity>
        </View>
      </Modal>
    </>
  );
};

export default ModalImageLocation;

import { Entypo, AntDesign } from "@expo/vector-icons";
import { useTheme } from "contexts/ThemeContexts";
import * as ImagePicker from "expo-image-picker";
import React, { useState } from "react";
import { ImageBackground, Modal, TouchableOpacity, View } from "react-native";
import {
  heightPercentageToDP as htdp,
  widthPercentageToDP as wtdp,
} from "react-native-responsive-screen";
import ModalImageLocation from "./ModalImageLocation";
import ImageViewer from "react-native-image-zoom-viewer";
import { useTranslation } from "react-i18next";

type props = {
  onPress?: Function;
  staticImage?: boolean;
  uri?: string;
  deleteImage?: Function | null;
};

const ImageField = ({
  onPress = () => {},
  staticImage = false,
  uri = "",
  deleteImage = null,
}: props) => {
  const theme = useTheme();
  const [fullScreen, setFullScreen] = useState(false);
  const { t, i18n } = useTranslation();

  const FullScreenView = () => (
    <Modal animationType="fade">
      <ImageViewer
        style={{
          width: wtdp("100%"),
          height: htdp("100%"),
          justifyContent: "center",
          alignItems: "center",
        }}
        backgroundColor={theme.backgroundColor}
        imageUrls={[{ url: uri }]}
        renderIndicator={() => <></>}
      />
      <TouchableOpacity
        onPress={() => setFullScreen(false)}
        style={{
          position: "absolute",
          top: 20,
          left: 0,
          padding: 10,
        }}
      >
        {i18n.language == "en" ? (
          <AntDesign name="close" size={30} color={theme.header} />
        ) : (
          <AntDesign name="close" size={30} color={theme.header} />
        )}
      </TouchableOpacity>
    </Modal>
  );

  if (staticImage) {
    return (
      <>
        {fullScreen && <FullScreenView />}
        <ImageBackground
          source={{ uri: uri }}
          style={{
            width: wtdp("94%"),
            marginHorizontal: wtdp("1%"),
            height: htdp("30%"),
          }}
          borderRadius={15}
        >
          <TouchableOpacity
            style={{
              position: "absolute",
              top: 0,
              left: 0,
              width: "100%",
              height: "100%",
            }}
            onPress={() => {
              setFullScreen(true);
            }}
          />
          {deleteImage && (
            <TouchableOpacity
              style={{ position: "absolute", top: 0, right: 0, padding: 10 }}
              onPress={() => {
                deleteImage(uri);
              }}
            >
              <AntDesign name="minuscircle" size={24} color={theme.danger} />
            </TouchableOpacity>
          )}
        </ImageBackground>
      </>
    );
  }

  return (
    <>
      <TouchableOpacity
        onPress={() => {
          onPress();
        }}
        style={{
          width: wtdp("94%"),
          marginHorizontal: wtdp("1%"),
          height: htdp("30%"),
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <View
          style={{
            width: "100%",
            height: "100%",
            backgroundColor: "black",
            opacity: 0.5,
            borderRadius: 15,
            position: "absolute",
          }}
          pointerEvents="none"
        />
        <Entypo name="plus" size={htdp("15%")} color="#bfbfbf" />
      </TouchableOpacity>
    </>
  );
};

export default ImageField;

// (
//   <TouchableOpacity
//     style={{ position: "absolute", top: 0, right: 0, padding: 10 }}
//     onPress={() => {
//       setImage("");
//     }}
//   >
//     <AntDesign name="minuscircle" size={24} color={theme.danger} />
//   </TouchableOpacity>
// )

{
  /* <ImageBackground
source={{ uri: uri }}
resizeMode="contain"
style={{
  width: wtdp("100%"),
  height: htdp("100%"),
  justifyContent: "center",
  alignItems: "center",
  backgroundColor: theme.backgroundColor,
}}
></ImageBackground> */
}

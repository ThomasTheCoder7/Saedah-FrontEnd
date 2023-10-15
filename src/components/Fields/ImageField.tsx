import { Entypo, AntDesign } from "@expo/vector-icons";
import * as ImagePicker from "expo-image-picker";
import React, { useEffect, useState } from "react";
import { Image, ImageBackground, Text, TouchableOpacity, View } from "react-native";
import {
  widthPercentageToDP as wtdp,
  heightPercentageToDP as htdp,
} from "react-native-responsive-screen";
import ModalImageLocation from "./ModalImageLocation";
import { useTheme } from "contexts/ThemeContexts";

const ImageField = () => {
  const [image, setImage]: [string, Function] = useState("");
  const theme = useTheme();
  const [modalVisible, setModalVisible] = useState(false);
  const [cameraStatus, cameraRequestPermission] =
    ImagePicker.useCameraPermissions();
  const [mediaStatus, mediaRequestPermission] =
    ImagePicker.useMediaLibraryPermissions();

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
      setImage(result.assets[0].uri);
    }
    setModalVisible(false);
  };

  const openGallery = async () => {
    if (!mediaStatus?.granted) {
      await ImagePicker.requestMediaLibraryPermissionsAsync();
    }
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      quality: 0.5,
    });

    if (!result.canceled) {
      setImage(result.assets[0].uri);
    }
    setModalVisible(false);
  };

  return (
    <>
      <ModalImageLocation
        visible={modalVisible}
        setVisible={setModalVisible}
        openCamera={openCamera}
        openGallery={openGallery}
      />
      <View style={{ alignItems: "center" }}>
        <TouchableOpacity
          onPress={() => {
            setModalVisible(true);
          }}
        >
          <ImageBackground
            source={image != "" ? { uri: image } : {}}
            style={{
              width: wtdp("70%"),
              height: wtdp("70%"),
              justifyContent: "center",
              alignItems: "center",
            }}
            borderRadius={15}
            imageStyle={{display:image==""?'none':'flex'}}
          >
            {image == '' ? (
              <>
                <View
                  style={{
                    width: "100%",
                    height: "100%",
                    backgroundColor: "black",
                    opacity: 0.5,
                    borderRadius: 15,
                    position: "absolute",
                  }}
                />
                <Entypo name="plus" size={htdp("15%")} color="#bfbfbf" />
              </>
            ) : (
              <TouchableOpacity
                style={{ position: "absolute", top: 0, right: 0, padding:10 }}
                onPress={()=>{setImage('')}}
              >
                <AntDesign name="minuscircle" size={24} color={theme.danger} />
              </TouchableOpacity>
            )}
          </ImageBackground>
        </TouchableOpacity>
      </View>
      
    </>
  );
};

export default ImageField;

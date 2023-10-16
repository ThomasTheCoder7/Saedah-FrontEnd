import { Entypo } from "@expo/vector-icons";
import { useTheme } from "contexts/ThemeContexts";
import * as ImagePicker from "expo-image-picker";
import React, { useState } from "react";
import {
  TouchableOpacity,
  View
} from "react-native";
import {
  heightPercentageToDP as htdp,
  widthPercentageToDP as wtdp,
} from "react-native-responsive-screen";
import ModalImageLocation from "./ModalImageLocation";

type props = {
  onPress:Function;
}

const ImageField = ({onPress}:props) => {
  const [image, setImage]: [string, Function] = useState("");
  const theme = useTheme();





  return (
    <>


      <TouchableOpacity
        onPress={() => {
          onPress()
        }}
        style={{
          width: '100%',
          height: htdp("27%"),
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
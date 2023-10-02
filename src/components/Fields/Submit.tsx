import { View, TouchableOpacity } from "react-native";
import React from "react";
import { useTheme } from "contexts/ThemeContexts";
import StyledText from "components/StyledText";
import {
  widthPercentageToDP as wtdp,
  heightPercentageToDP as htdp,
} from "react-native-responsive-screen";
import { SimpleLineIcons } from "@expo/vector-icons";
import Label from '../Profile/Label';

type props = {
    label:string
}


const Submit = ({label}:props) => {
  const theme = useTheme();
  return (
    
      <TouchableOpacity
        style={{
          padding: 15,
          backgroundColor: theme.secondary,
          borderRadius: 10,
          justifyContent: "center",
          alignItems: "center",
          flexDirection: "row",
          gap: 20,
        }}
      >
        <StyledText
          style={{ color: theme.header, fontSize: htdp("2.5%") }}
          weight="SemiBold"
        >
          {label}
        </StyledText>
        
        <SimpleLineIcons name="login" size={htdp("3%")} color={theme.header} />
      </TouchableOpacity>

  );
};

export default Submit;

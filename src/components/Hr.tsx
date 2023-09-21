import { View, Text } from "react-native";
import React from "react";
import { useTheme } from "contexts/ThemeContexts";
import { widthPercentageToDP as wtdp ,heightPercentageToDP as htdp } from 'react-native-responsive-screen'
type props = {
  width?:string|number
}

const Hr = ({width='0%'}:props) => {
  const theme = useTheme();
  return (
    <View
      style={{ width:wtdp(width) , height: 1, backgroundColor: theme.hr, alignSelf:'center', marginVertical:10 }}
    ></View>
  );
};

export default Hr;

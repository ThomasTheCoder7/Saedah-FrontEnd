import { View, Text } from "react-native";
import React, { ReactNode } from "react";
import { widthPercentageToDP as wtdp ,heightPercentageToDP as htdp } from 'react-native-responsive-screen'
type props = {
  children: ReactNode;
};

const Page = ({ children }: props) => {
  return <View style={{width:'100%', height:htdp('80%')}}>{children}</View>;
};

export default Page;

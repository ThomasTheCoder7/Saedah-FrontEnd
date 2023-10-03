import { View, Text, Image } from "react-native";
import React from "react";
import Submit from "components/Fields/Submit";
import {
  widthPercentageToDP as wtdp,
  heightPercentageToDP as htdp,
} from "react-native-responsive-screen";
import AuthButton from "components/Fields/AuthButton";
import { useNavigation } from "@react-navigation/native";
const Auth = () => {
  const navigation = useNavigation()
  return (
    <View
      style={{
        height: htdp("80%"),
        width:'100%',
        justifyContent: "space-between",
        alignItems:'center'
        
      }}
    >
      <Image
        source={require("assets/logo-no-background.png")}
        style={{ width: wtdp('55%'), height: wtdp('55%'), marginTop:htdp('4%') }}
        resizeMode="contain"
      />
      <View style={{ height:'40%', justifyContent:'center', width:'80%', gap:40}}>
        <AuthButton label="Login" onPress={()=> navigation.navigate('Login')}/>
        <AuthButton secondary label="Register" onPress={()=> navigation.navigate('Register')}/>
      </View>
    </View>
  );
};

export default Auth;

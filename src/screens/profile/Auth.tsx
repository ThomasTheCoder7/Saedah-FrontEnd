import { View, Text, Image } from "react-native";
import React from "react";
import Submit from "components/Fields/Submit";
import {
  widthPercentageToDP as wtdp,
  heightPercentageToDP as htdp,
} from "react-native-responsive-screen";
import AuthButton from "components/Fields/AuthButton";
import { useNavigation } from "@react-navigation/native";
import StyledText from "components/StyledText";
import { useTranslation } from "react-i18next";
import { useTheme } from "contexts/ThemeContexts";
const Auth = () => {
  const {t} = useTranslation()
  const theme = useTheme()
  const navigation = useNavigation()
  return (
    <View
      style={{
        height: htdp("100%"),
        width:'100%',
        justifyContent: "space-between",
        alignItems:'center',
        backgroundColor:theme.backgroundColor
        
      }}
    >
      <Image
        source={require("assets/logo-no-background.png")}
        style={{ width: wtdp('55%'), height: wtdp('55%'), marginTop:htdp('4%') }}
        resizeMode="contain"
      />
      <StyledText style={{color:theme.header, fontSize:htdp('4%') }} weight="Bold">
        {t("Let's Get Started")}
      </StyledText>
      <View style={{ height:'40%', justifyContent:'center', width:'80%', gap:40}}>
        <AuthButton label="Login" onPress={()=> navigation.navigate('Login')}/>
        <AuthButton secondary label="Register" onPress={()=> navigation.navigate('Register')}/>
      </View>
    </View>
  );
};

export default Auth;

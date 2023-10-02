import { View, Text, TextInput } from 'react-native'
import React from 'react'
import { widthPercentageToDP as wtdp ,heightPercentageToDP as htdp } from 'react-native-responsive-screen'
import { useTheme } from 'contexts/ThemeContexts'
import StyledText from 'components/StyledText'



type props = {
  label:string
}
const PasswordField = ({label}:props) => {
  const theme = useTheme()
  return (
    <View style={{gap:10, padding:0}}>
      <StyledText style={{color:theme.header, paddingLeft:3}} weight='SemiBold'>{label}</StyledText>
      <TextInput style={{padding:15, backgroundColor:theme.fieldBackground, fontSize:htdp('3%'), borderRadius:10}} textContentType='password' secureTextEntry maxLength={20}/>
    </View>
  )
}

export default PasswordField
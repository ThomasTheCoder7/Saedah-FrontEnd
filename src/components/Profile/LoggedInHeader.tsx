import { View, Text, TouchableOpacity } from 'react-native'
import { Avatar } from '@rneui/themed'
import StyledText from 'components/StyledText'
import React from 'react'
import { useTheme } from 'contexts/ThemeContexts'
import { widthPercentageToDP as wtdp ,heightPercentageToDP as htdp } from 'react-native-responsive-screen'
import { useNavigation } from '@react-navigation/native'

const LoggedInHeader = () => {
    const theme = useTheme()
    const navigation = useNavigation()
  return (
    <TouchableOpacity style={{flexDirection:'row', alignItems:'center', gap:10, padding:10}} onPress={()=>{navigation.navigate('Profile')}}>
      <Avatar
        size={htdp('6.5%')}
        rounded
        icon={{ name: "pencil", type: "font-awesome" }}
        containerStyle={{ backgroundColor: "#9700b9" }}
      />
      <StyledText style={{color:theme.header, fontSize:htdp('3.5%')}}>
        Jawad
      </StyledText>
    </TouchableOpacity>
  )
}

export default LoggedInHeader
import { View, Text } from 'react-native'
import React from 'react'
import Label from './Label'
import { AntDesign, FontAwesome5 } from '@expo/vector-icons';
import { useTheme } from 'contexts/ThemeContexts';
import Hr from 'components/Hr';
import { widthPercentageToDP as wtdp ,heightPercentageToDP as htdp } from 'react-native-responsive-screen'
const Stats = () => {
    const theme = useTheme()
  return (
    <View style={{width:'100%', gap:0}}>

    <View style={{flexDirection:'row', justifyContent:'center', gap:10, width:'100%'}}>
      <Label label='Followers' justifyContent='center'>
        <FontAwesome5 name='users' size={20} color={theme.body} />
      </Label>
      <Label label='Deals' justifyContent='center'>
        <AntDesign name='tag' size={20} color={theme.body} />
      </Label>
      <Label label='Following' justifyContent='center'>
      <FontAwesome5 name='plus' size={20} color={theme.body} />
      </Label>
      
    </View>
    <Hr width='90%' />
    </View>
  )
}

export default Stats
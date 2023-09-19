import { View, Text } from 'react-native'
import React from 'react'
import Label from './Label'
import { AntDesign, FontAwesome5 } from '@expo/vector-icons';
import { useTheme } from 'contexts/ThemeContexts';

const Stats = () => {
    const theme = useTheme()
  return (
    <View style={{flexDirection:'row', justifyContent:'center', gap:20, width:'100%'}}>
      <Label label='Followers' justifyContent='flex-start'>
        <FontAwesome5 name='users' size={20} color={theme.body} />
      </Label>
      <Label label='Deals' justifyContent='center'>
        <AntDesign name='tag' size={20} color={theme.body} />
      </Label>
      <Label label='Following' justifyContent='flex-end'>
      <FontAwesome5 name='plus' size={20} color={theme.body} />
      </Label>
    </View>
  )
}

export default Stats
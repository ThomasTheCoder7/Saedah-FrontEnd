import { TouchableOpacity, Text } from 'react-native'
import React from 'react'
import { Ionicons } from '@expo/vector-icons';
import { useTheme } from 'contexts/ThemeContexts';

type props = {
    onPress:Function
}

const LogoutButton = ({onPress}:props) => {
    const theme = useTheme()
  return (
    <TouchableOpacity style={{
        padding:5,
        width:70,
        height:70,
        alignItems:'center',
        justifyContent:'center',
    }}
    onPress={()=>onPress()}
    >
      <Ionicons name="exit" size={35} color={theme.danger}/>
    </TouchableOpacity>
  )
}

export default LogoutButton
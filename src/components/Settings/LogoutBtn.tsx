import { TouchableOpacity, Text } from 'react-native'
import React from 'react'

const LogoutBtn = () => {
  return (
    <TouchableOpacity style={{width:'100%', paddingHorizontal:20, backgroundColor:'red', paddingVertical:25}}>
      <Text>LogoutBtn</Text>
    </TouchableOpacity>
  )
}

export default LogoutBtn
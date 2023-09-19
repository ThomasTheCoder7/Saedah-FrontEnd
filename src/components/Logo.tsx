import { View, Text, Image } from 'react-native'
import React from 'react'

const Logo = () => {
  return (
    <View style={{paddingHorizontal:15}}>
      <Image
      source={require("assets/logo-no-background.png")}
      style={{width:60,height:60}}
      resizeMode='contain'
      />
    </View>
  )
}

export default Logo
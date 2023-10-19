import { View, Text } from 'react-native'
import React from 'react'
import { widthPercentageToDP as wtdp ,heightPercentageToDP as htdp } from 'react-native-responsive-screen'
import { useTheme } from 'contexts/ThemeContexts'
const Details = () => {
  const theme = useTheme()
  return (
    <View style={{width:wtdp('100%'), height:htdp('100%'), backgroundColor:theme.backgroundColor}}>
      <Text>Details</Text>
    </View>
  )
}

export default Details
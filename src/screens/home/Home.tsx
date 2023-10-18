import { View, Text } from 'react-native'
import React from 'react'
import { useTheme } from 'contexts/ThemeContexts'
import { widthPercentageToDP as wtdp, heightPercentageToDP as htdp } from 'react-native-responsive-screen'
import Filters from 'components/Filters/Filters'
import DealCard from 'components/DealCard/DealCard'
const Home = () => {
  const theme = useTheme()
  return (
    <View style={{backgroundColor:theme.backgroundColor, flex:1, paddingTop:htdp('5%')}}>
      <DealCard/>
    </View> 
  )
}

export default Home
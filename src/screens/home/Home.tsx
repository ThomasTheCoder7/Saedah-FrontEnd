import { View, Text } from 'react-native'
import React from 'react'
import { useTheme } from 'contexts/ThemeContexts'
import ProfileHeader from 'components/Profile/ProfileHeader'
import { widthPercentageToDP as wtdp, heightPercentageToDP as htdp } from 'react-native-responsive-screen'
import Filters from 'components/Filters/Filters'
const Home = () => {
  const theme = useTheme()
  return (
    <View style={{backgroundColor:theme.backgroundColor, flex:1, paddingHorizontal:wtdp('0%'), paddingTop:htdp('4%')}}>
      <ProfileHeader/>
      <Filters/>
    </View> 
  )
}

export default Home
import { View, Text, ScrollView, FlatList } from 'react-native'
import React from 'react'
import { useTheme } from 'contexts/ThemeContexts'
import { widthPercentageToDP as wtdp, heightPercentageToDP as htdp } from 'react-native-responsive-screen'
import Filters from 'components/Filters/Filters'
import DealCard from 'components/DealCard/DealCard'
const  DATA = [...new Array(10).map(()=>0)]
const Home = () => {
  const theme = useTheme()
  return (
    <View style={{backgroundColor:theme.backgroundColor, flex:1, paddingTop:htdp('5%'), alignItems:'center'}}>
      <FlatList
      data={DATA}
      contentContainerStyle={{gap:25}}
      renderItem={({index})=>{
        return (
          <DealCard key={index}/>
        )
      }}
      
      />
    </View> 
  )
}

export default Home
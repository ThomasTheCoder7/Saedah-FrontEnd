import { View, Text } from 'react-native'
import React from 'react'
import { useTheme } from 'contexts/ThemeContexts'
import ProfileHeader from 'components/Profile/ProfileHeader'
import ProfileInfo from 'components/Profile/ProfileInfo'

const Profile = () => {
    const theme = useTheme()
  return (
    <View style={{backgroundColor:theme.backgroundColor,flex:1}}>
      <ProfileHeader/>
      <ProfileInfo/>
    </View>
  )
}

export default Profile
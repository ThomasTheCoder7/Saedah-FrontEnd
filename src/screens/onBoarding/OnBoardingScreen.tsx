import { View, Text, ScrollView } from 'react-native'
import React from 'react'
import Welcome from './Welcome'
import Money from './Money'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
const Stack = createNativeStackNavigator()
const OnBoardingScreen = () => {
  return (
    <Stack.Navigator screenOptions={{headerShown:false}}>
      <Stack.Screen name='Welcome' component={Welcome}/>
      <Stack.Screen name='Money' component={Money}/>
    </Stack.Navigator>
  )
}

export default OnBoardingScreen
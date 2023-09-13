import { View } from "react-native";
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from "screens/home/Home";
import React from "react";
import Profile from "screens/home/Profile";


const Stack = createNativeStackNavigator();

const HomeStack = () => {
  return (
    <View style={{flex:1}}>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Deals" component={Home} options={{headerShown:false}}/>
        <Stack.Screen name='Profile' component={Profile}/>
      </Stack.Navigator>
    </View>
  );
};

export default HomeStack;

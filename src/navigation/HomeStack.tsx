import { View } from "react-native";
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from "screens/home/Home";
import React from "react";



const Stack = createNativeStackNavigator();

const HomeStack = () => {
  return (
    <View style={{flex:1}}>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Deals" component={Home} options={{headerShown:false}}/>
      </Stack.Navigator>
    </View>
  );
};

export default HomeStack;

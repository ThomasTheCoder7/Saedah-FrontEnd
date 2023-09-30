import React from "react";
import { useTheme } from "contexts/ThemeContexts";
import { useTranslation } from "react-i18next";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Login from "screens/profile/Login";


const Stack = createNativeStackNavigator()
const LoginStack = () => {
  const theme = useTheme();
  const { t } = useTranslation();
  return (
    <Stack.Navigator initialRouteName="Login" screenOptions={{headerShown:false}}>
      <Stack.Screen name="Login" component={Login}/>
    </Stack.Navigator>
  );
};

export default LoginStack;

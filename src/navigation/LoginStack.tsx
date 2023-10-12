import React from "react";
import { useTheme } from "contexts/ThemeContexts";
import { useTranslation } from "react-i18next";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Login from "screens/profile/Login";
import Register from "screens/profile/Register";
import Auth from "screens/profile/Auth";
import { Platform } from "react-native";
import OnBoardingScreen from "screens/onBoarding/OnBoardingScreen";

const Stack = createNativeStackNavigator();
const LoginStack = () => {
  const theme = useTheme();
  const { t, i18n } = useTranslation();
  return (
    <Stack.Navigator
      initialRouteName="OnBoardingScreen"
      screenOptions={{
        headerShown: true,
        headerStyle: { backgroundColor: theme.backgroundColor },
        headerShadowVisible: false,
        headerTintColor: theme.header,
        headerTitleAlign: "center",
        animation: `${
          // is it android ? if yes -> check if it is arabic if yes slide from left animation if it is english slide from right
          Platform.OS == "android" ? i18n.language == 'ar'?'slide_from_left':'slide_from_right' : "default"
        }`,
      }}
    >
      <Stack.Screen name="Initial" component={Auth} options={{headerShown:false, title:''}}/>
      <Stack.Screen name="Login" component={Login} options={{title:t('Login'), headerBackTitleVisible:false}}/>
      <Stack.Screen
        name="Register"
        component={Register}
        options={{title:t('Register'), headerBackTitleVisible:false,}}
      />
      <Stack.Screen name="OnBoardingScreen" component={OnBoardingScreen} options={{headerShown:false, headerLeft:undefined}} />
    </Stack.Navigator>
  );
};

export default LoginStack;

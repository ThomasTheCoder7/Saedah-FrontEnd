import React from "react";
import { useTheme } from "contexts/ThemeContexts";
import { useTranslation } from "react-i18next";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Login from "screens/profile/Login";
import Register from "screens/profile/Register";
import Auth from "screens/profile/Auth";

const Stack = createNativeStackNavigator();
const LoginStack = () => {
  const theme = useTheme();
  const { t } = useTranslation();
  return (
    <Stack.Navigator
      initialRouteName="Initial"
      screenOptions={{
        headerShown: true,
        headerStyle: { backgroundColor: theme.backgroundColor },
        headerShadowVisible: false,
        headerTintColor: theme.header,
        headerTitleAlign: "center",
      }}
    >
      <Stack.Screen name="Initial" component={Auth} options={{headerShown:false, title:''}}/>
      <Stack.Screen name="Login" component={Login} />
      <Stack.Screen
        name="Register"
        component={Register}

      />
    </Stack.Navigator>
  );
};

export default LoginStack;

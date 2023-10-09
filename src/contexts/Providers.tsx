import { View, Text } from "react-native";
import ThemeProvider from "./ThemeContexts";
import AuthProvider from "./AuthContext";
import React, { ReactNode } from "react";
import OnBoardingProvider from "./OnBoardingContext";

type Props = {
  children: ReactNode;
};

const Providers = ({ children }: Props) => {
  return (
    <ThemeProvider>
      <AuthProvider>
        <OnBoardingProvider>{children}</OnBoardingProvider>
      </AuthProvider>
    </ThemeProvider>
  );
};

export default Providers;

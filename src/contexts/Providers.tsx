import { View, Text } from "react-native";
import ThemeProvider from "./ThemeContexts";
import AuthProvider from "./AuthContext";
import React, { ReactNode } from "react";
import OnBoardingProvider from "./OnBoardingContext";
import DetailsProvider from "./DetailsContext";
import UserDetailsProvider from "./UserDetailsContext";

type Props = {
  children: ReactNode;
};

const Providers = ({ children }: Props) => {
  return (
    <ThemeProvider>
      <AuthProvider>
        <DetailsProvider>
          <UserDetailsProvider>
            <OnBoardingProvider>{children}</OnBoardingProvider>
          </UserDetailsProvider>
        </DetailsProvider>
      </AuthProvider>
    </ThemeProvider>
  );
};

export default Providers;

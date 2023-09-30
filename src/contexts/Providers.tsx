import { View, Text } from "react-native";
import ThemeProvider from "./ThemeContexts";
import AuthProvider from "./AuthContext";
import React, { ReactNode } from "react";

type Props = {
  children: ReactNode;
};

const Providers = ({ children }: Props) => {
  return (
    <ThemeProvider>
      <AuthProvider>{children}</AuthProvider>
    </ThemeProvider>
  );
};

export default Providers;

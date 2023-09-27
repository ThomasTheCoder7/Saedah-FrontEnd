import { View, Text } from "react-native";
import ThemeProvider from "./ThemeContexts";
import ScrollContext from "./ScrollContext";
import React, { ReactNode } from "react";

type Props = {
  children: ReactNode;
};

const Providers = ({ children }: Props) => {
  return (
    <ThemeProvider>
      <ScrollContext>{children}</ScrollContext>
    </ThemeProvider>
  );
};

export default Providers;

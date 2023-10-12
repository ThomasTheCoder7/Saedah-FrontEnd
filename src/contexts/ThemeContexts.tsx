import { useState, useContext, createContext, useEffect, useRef, ReactNode } from "react";
import { useColorScheme } from "react-native";
import { Default } from "assets/Themes";
import Light from 'assets/Themes/light'
import Dark from 'assets/Themes/dark'
import themeType from "assets/Themes/themeType";
import React from 'react'


const ThemeContext = createContext<themeType|null>(null);
const SetThemeContext = createContext<Function>(()=>{});

type Props = {
    children: ReactNode
}

export const useSetTheme = () => {
  return useContext(SetThemeContext);
};

export const useTheme = ():themeType => {
  return useContext(ThemeContext)!
};

export default ({ children }:Props) => {
  const scheme = useColorScheme();
  const themes:Record<string,themeType> = { dark: Dark, light: Light, default: Default(scheme) };
  const [theme, setTheme]:[themeType, Function] = useState(themes["default"]);
  const currentTheme = useRef('default')
  const updateTheme = (theme:string) => {
    currentTheme.current = theme
    setTheme(themes[theme]);
  };

  useEffect(()=>{
     updateTheme(currentTheme.current)
  },[Dark,Light,Default])

  return (
    <ThemeContext.Provider value={theme}>
      <SetThemeContext.Provider value={updateTheme}>
        {children}
      </SetThemeContext.Provider>
    </ThemeContext.Provider>
  );
};
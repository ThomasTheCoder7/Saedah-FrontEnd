import React from "react";
import {
  AntDesign,
  MaterialCommunityIcons,
  MaterialIcons,
  Entypo
} from "@expo/vector-icons";
import { useTheme } from "contexts/ThemeContexts";

type IconProps = {
  focused: boolean;
};

const isFocused = (focused: boolean, active:string, inactive:string) => (focused ? active : inactive);

export const HomeIcon = ({ focused }: IconProps) => {
  const theme = useTheme()
  return <AntDesign name="home" size={25} color={isFocused(focused,theme.bottomTabActiveIcon,theme.bottomTabInactiveIcon)} />;
};

export const SearchIcon = ({ focused }: IconProps) => {
  const theme = useTheme()
  return <AntDesign name="search1" size={25} color={isFocused(focused,theme.bottomTabActiveIcon,theme.bottomTabInactiveIcon)} />;
};

export const FavoritesIcon = ({ focused }: IconProps) => {
  const theme = useTheme()
  return (
    <MaterialCommunityIcons name="heart" size={25} color={isFocused(focused,theme.bottomTabActiveIcon,theme.bottomTabInactiveIcon)} />
  );
};

export const SettingsIcon = ({ focused }: IconProps) => {
  const theme = useTheme()
  return <AntDesign name="setting" size={25} color={isFocused(focused,theme.bottomTabActiveIcon,theme.bottomTabInactiveIcon)} />;
};

export const ProfileIcon = ({ focused }: IconProps) => {
  const theme = useTheme()
  return <AntDesign name="user" size={25} color={isFocused(focused,theme.bottomTabActiveIcon,theme.bottomTabInactiveIcon)} />;
};

export const AddPostIcon = ({ focused }: IconProps) => {
  const theme = useTheme()
  return <AntDesign name="plus" size={25} color={isFocused(focused,theme.bottomTabActiveIcon,theme.bottomTabInactiveIcon)} />;
};

export const LocationIcon = ({ focused }: IconProps) => {
  const theme = useTheme()
  return <Entypo name="location" size={25} color={isFocused(focused,theme.bottomTabActiveIcon,theme.bottomTabInactiveIcon)} />;
};

export const LinkIcon = ({ focused }: IconProps) => {
  const theme = useTheme()
  return <Entypo name="link" size={25} color={isFocused(focused,theme.bottomTabActiveIcon,theme.bottomTabInactiveIcon)} />;
};
import { Linking, Platform } from "react-native";

export const handleOpenMaps = (location: {latitude:number,longitude:number}) => {
  const { latitude, longitude } = location;

  const url = Platform.select({
    ios: `https://maps.google.com/maps?q=${latitude},${longitude}`,
    android: `geo:${latitude},${longitude}?q=${latitude},${longitude}`,
  });

  if (url) {
    Linking.openURL(url);
  }
};

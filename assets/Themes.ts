import themeType from "./Themes/themeType";
import Dark from './Themes/dark'

export const Light: themeType = {
  isDefault: false,
  isDark:false,
  bottomTabBackground: "white",
  bottomTabTextColor:'black',
};


export const Default = (scheme:string|undefined|null) => {
  let theme = null;
  if (scheme === "dark") {
    theme = { ...Dark };
    theme.isDefault = true;
    return theme;
  }
  theme = Light;
  theme.isDefault = true;
  return theme;
};

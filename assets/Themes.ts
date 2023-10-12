import themeType from "./Themes/themeType";
import Dark from './Themes/dark'
import Light from './Themes/light'


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

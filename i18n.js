import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import {getLocales} from 'expo-localization'
import ar from 'lang/ar'
import en from "lang/en";

const resources = {
    ar:{translation:ar},
    en:{translation:en},
};



i18n
  .use(initReactI18next)
  .init({
    compatibilityJSON: 'v3',
    resources,
    lng: getLocales()[0].languageCode,
    interpolation: {
      escapeValue: false
    }
  });

  export default i18n;
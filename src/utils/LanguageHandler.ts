import { i18n } from "i18next";
import { store } from "./storageHandler";
import { I18nManager, Platform } from "react-native";
import { showMessage } from "react-native-flash-message";

const languageIndex = { en: "1", ar: "0" };

export const indexToLang: Record<number, string> = { 0: "ar", 1: "en" };

export const changeLanguage = (
  i18n: i18n,
  code: "en" | "ar",
  isDefault: boolean
) => {
  store("language", isDefault ? "2" : languageIndex[code]);
  if (Platform.OS == "ios") {
    i18n.changeLanguage(code);
    return;
  }
  I18nManager.forceRTL(code == 'ar');
  I18nManager.allowRTL(code == 'ar');

  if (code == "ar") {
    showMessage({
      message: "تم تغيير اللغة بنجاح ",
      description: "سوف تظهر التغييرات عند إعادة تشغيل التطبيق",
      type: "success",
    });
    return;
  }
  showMessage({
    message: "Language has been changed successfully",
    description: "Please restart the application to apply the changes.",
    type: "success",
  });
};

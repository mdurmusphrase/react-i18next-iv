import i18next from "i18next";
import LanguageDetector from "i18next-browser-languagedetector";
import HttpApi from "i18next-http-backend";
import { initReactI18next } from "react-i18next";
import formatters from "./formatters";

export const supportedLngs = {
  en: "English",
  ar: "Arabic (العربية)",
};

i18next
  .use(HttpApi)
  .use(LanguageDetector)
  .use(initReactI18next)
  // init i18next
  // for all options read: https://www.i18next.com/overview/configuration-options
  .init({
    fallbackLng: "en",
    supportedLngs: Object.keys(supportedLngs),
    debug: import.meta.env.DEV,
    interpolation: {
      escapeValue: false, // not needed for react as it escapes by default
    },
  });

Object.entries(formatters).forEach(([key, resolver]) => {
  i18next.services.formatter?.add(key, resolver);
});

export default i18next;

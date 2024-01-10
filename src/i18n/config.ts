import i18n from "i18next";
import { initReactI18next } from "react-i18next";

i18n
  .use(initReactI18next)
  // init i18next
  // for all options read: https://www.i18next.com/overview/configuration-options
  .init({
    lng: "ar",
    fallbackLng: "en",
    debug: true,
    interpolation: {
      escapeValue: false, // not needed for react as it escapes by default
    },
    resources: {
      en: {
        translation: {
          hello_world: "Hello, World!",
        },
      },
      ar: {
        translation: {
          hello_world: "مرحباً بالعالم!",
        },
      },
    },
  });

export default i18n;

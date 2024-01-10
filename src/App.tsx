import { useEffect } from "react";
import { useTranslation } from "react-i18next";
import Header from "./layout/Header";

function App() {
  const { t, i18n } = useTranslation();

  useEffect(() => {
    if (i18n.resolvedLanguage) {
      document.documentElement.lang = i18n.resolvedLanguage;
      document.documentElement.dir = i18n.dir(i18n.resolvedLanguage);
    }
  }, [i18n, i18n.resolvedLanguage]);

  return (
    <div className="container mx-auto mt-8 max-w-[90%] md:max-w-[800px]">
      <Header />
      <h2 className="mt-4 text-2xl font-semibold">{t("hello_world")}</h2>
    </div>
  );
}

export default App;

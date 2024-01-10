import { useTranslation } from "react-i18next";
import useLocalizeDocumentAttributes from "./i18n/useLocalizeDocumentAttributes";
import Header from "./layout/Header";

function App() {
  const { t } = useTranslation();

  useLocalizeDocumentAttributes();

  return (
    <div className="container mx-auto mt-8 max-w-[90%] md:max-w-[800px]">
      <Header />
      <h2 className="mt-4 text-2xl font-semibold">{t("hello_world")}</h2>
    </div>
  );
}

export default App;

import { useTranslation } from "react-i18next";
import useLocalizeDocumentAttributes from "./i18n/useLocalizeDocumentAttributes";
import PageHeader from "./layout/PageHeader";
import Interpolation from "./playgrounds/Interpolation";
import Numbers from "./playgrounds/Numbers";
import Plurals from "./playgrounds/Plurals";

function App() {
  const { t } = useTranslation();

  useLocalizeDocumentAttributes();

  return (
    <div className="container mx-auto max-w-[95%] border border-dashed border-slate-600 bg-slate-950/70 px-4 md:max-w-[800px]">
      <PageHeader />

      <h2 className="pt-20 text-2xl font-semibold">
        {t("translating_text_title")}
      </h2>

      <Interpolation />
      <hr />
      <Plurals />
      <hr />
      <Numbers />
    </div>
  );
}

export default App;

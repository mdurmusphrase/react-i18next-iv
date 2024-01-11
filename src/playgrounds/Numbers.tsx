import { useState } from "react";
import { useTranslation } from "react-i18next";
import useNumberFormatter from "../i18n/useNumberFormatter";
import ProjectFiles from "./_ProjectFiles";

export default function Numbers() {
  const { t } = useTranslation();
  const formatNumber = useNumberFormatter();
  const [num, setNum] = useState(0.99);

  return (
    <section className="mt-8 pb-32">
      <h3 className="section-title">{t("numbers.title")}</h3>
      <p className="prose-p">{t("numbers.intro")}</p>
      <ProjectFiles
        files={[
          "src/playgrounds/Numbers.tsx",
          'public/locales/{locale}/translation.json (under "numbers" key)',
          "src/i18n/useNumberFormatter.ts",
        ]}
      />
      <p className="prose-p">{t("numbers.help")}</p>

      <div className="mt-4 sm:ms-12">
        <label htmlFor="numbers_num" className="label">
          {t("numbers.num_label")}
        </label>
        <input
          type="number"
          id="numbers_num"
          className="input input-number"
          value={num}
          onChange={(e) => setNum(parseFloat(e.target.value))}
        />
      </div>

      <h4 className="mt-4">{t("numbers.numbers_in_messages")}</h4>

      <p className="output-island">{t("numbers.simple", { value: num })}</p>
      <p className="output-island">{t("numbers.currency", { value: num })}</p>
      <p className="output-island">{t("numbers.percent", { value: num })}</p>

      <h4 className="mt-4">{t("numbers.standalone")}</h4>
      <p className="prose-p">{t("numbers.standalone_help")}</p>

      <div className="output-island flex w-56 justify-center gap-6">
        <p>{formatNumber(num)}</p>
        <p>{formatNumber(num, { style: "currency", currency: "USD" })}</p>
        <p>{formatNumber(num, { style: "percent" })}</p>
      </div>
    </section>
  );
}

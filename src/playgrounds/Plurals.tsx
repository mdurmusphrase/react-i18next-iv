import { useState } from "react";
import { useTranslation } from "react-i18next";

export default function Plurals() {
  const { t } = useTranslation();
  const [count, setCount] = useState(0);

  return (
    <section className="mt-8">
      <h3 className="section-title">{t("plurals.title")}</h3>
      <p className="prose-p">{t("plurals.intro")}</p>

      <div className="sm:ms-12">
        <label htmlFor="plurals_count" className="label">
          {t("plurals.count_label")}
        </label>
        <input
          type="number"
          id="plurals_count"
          className="input input-number"
          value={count}
          onChange={(e) => setCount(parseInt(e.target.value))}
        />
      </div>

      <p className="output-island">{t("plurals.trees_grown", { count })}</p>
    </section>
  );
}

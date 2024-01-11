import { useState } from "react";
import { useTranslation } from "react-i18next";
import useNumberFormatter from "../i18n/useNumberFormatter";

export default function Numbers() {
  const { t } = useTranslation();
  const formatNumber = useNumberFormatter();
  const [num, setNum] = useState(0.99);

  return (
    <section className="mt-8 pb-32">
      <h3 className="section-title">{t("numbers.title")}</h3>

      <p className="prose-p">{t("numbers.intro")}</p>

      <div className="mb-6 mt-4 rounded-md bg-slate-900 p-3 pb-4">
        <h4 className="text-sm font-light text-slate-300">Project files</h4>
        <ul className="font-mono text-sm text-cyan-500">
          <li>src/playgrounds/Numbers.tsx</li>
          <li>
            public/locales/{"{"}locale{"}"}/translation.json (under "numbers"
            key)
          </li>
          <li>src/i18n/useNumberFormatter.ts</li>
        </ul>
      </div>

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

      <p className="prose-p">
        These aren't embedded in a message. They use{" "}
        <code>Intl.NumberFormat</code> directly and are output into the
        component JSX without going through i18next.
      </p>

      <div className="output-island flex w-48 gap-6">
        <p>{formatNumber(num)}</p>
        <p>{formatNumber(num, { style: "currency", currency: "USD" })}</p>
        <p>{formatNumber(num, { style: "percent" })}</p>
      </div>
    </section>
  );
}

import { useState } from "react";
import { useTranslation } from "react-i18next";
import useDateTimeFormatter from "../i18n/useDateTimeFormatter";
import ProjectFiles from "./_ProjectFiles";

export default function Dates() {
  const { t } = useTranslation();
  const formatDate = useDateTimeFormatter();
  const [date, setDate] = useState(new Date());

  const dateForInputValue =
    date.getFullYear() +
    "-" +
    (date.getMonth() + 1).toString().padStart(2, "0") +
    "-" +
    date.getDate().toString().padStart(2, "0");

  return (
    <section className="mt-8 pb-32">
      <h3 className="section-title">{t("dates.title")}</h3>
      <p className="prose-p">{t("dates.intro")}</p>
      <ProjectFiles
        files={[
          "src/playgrounds/Dates.tsx",
          'public/locales/{locale}/translation.json (under "dates" key)',
          "src/i18n/useDateTimeFormatter.ts",
        ]}
      />
      <p className="prose-p">{t("dates.help")}</p>

      <div className="mt-4 sm:ms-12">
        <label htmlFor="dates_date" className="label">
          {t("dates.date_label")}
        </label>
        <input
          type="date"
          id="dates_date"
          className="input"
          value={dateForInputValue}
          onChange={(e) => setDate(new Date(e.target.value))}
        />
      </div>

      <h4 className="mt-4">{t("dates.dates_in_messages")}</h4>

      <p className="output-island">{t("dates.simple", { value: date })}</p>
      <p className="output-island">{t("dates.long", { value: date })}</p>
      <p className="output-island">{t("dates.custom", { value: date })}</p>

      <h4 className="mt-4">{t("dates.standalone")}</h4>
      <p className="prose-p">{t("dates.standalone_help")}</p>

      <div className="output-island flex justify-center gap-6">
        <p>{formatDate(date)}</p> |{" "}
        <p>{formatDate(date, { dateStyle: "long" })}</p> |{" "}
        <p>
          {formatDate(date, {
            weekday: "narrow",
            month: "narrow",
            day: "numeric",
            year: "2-digit",
          })}
        </p>
      </div>
    </section>
  );
}

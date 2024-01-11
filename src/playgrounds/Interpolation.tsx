import { useState } from "react";
import { useTranslation } from "react-i18next";
import ProjectFiles from "./_ProjectFiles";

export default function Interpolation() {
  const { t } = useTranslation();
  const [firstName, setFirstName] = useState("firstName");
  const [lastName, setLastName] = useState("lastName");

  return (
    <section>
      <h3 className="section-title">{t("interpolation.title")}</h3>
      <p className="prose-p">{t("interpolation.intro")}</p>
      <ProjectFiles
        files={[
          "src/playgrounds/Interpolation.tsx",
          'public/locales/{locale}/translation.json (under "interpolation" key)',
        ]}
      />
      <p className="prose-p">{t("interpolation.help")}</p>

      <div className="mb-6 mt-2 flex flex-col items-baseline sm:flex-row sm:justify-center sm:gap-16">
        <div className="mt-4">
          <label htmlFor="firstName" className="label">
            {t("interpolation.first_name_label")}
          </label>
          <input
            type="text"
            value={firstName}
            id="firstName"
            autoComplete="off"
            onChange={(e) => setFirstName(e.target.value)}
            className="input"
          />
        </div>
        <div className="mt-1">
          <label htmlFor="lastName" className="label">
            {t("interpolation.last_name_label")}
          </label>
          <input
            type="text"
            value={lastName}
            id="lastName"
            autoComplete="off"
            onChange={(e) => setLastName(e.target.value)}
            className="input"
          />
        </div>
      </div>

      <p className="output-island">
        {t("interpolation.user_greeting", { firstName, lastName })}
      </p>

      <h4 className="mt-4 text-lg">{t("interpolation.custom_formatters")}</h4>

      <p className="output-island">
        {t("interpolation.user_greeting_lowercase", { firstName, lastName })}
      </p>

      <p className="output-island">
        {t("interpolation.user_greeting_uppercase", { firstName, lastName })}
      </p>
    </section>
  );
}

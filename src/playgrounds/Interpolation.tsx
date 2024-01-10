import { useState } from "react";
import { useTranslation } from "react-i18next";

export default function Interpolation() {
  const { t } = useTranslation();
  const [firstName, setFirstName] = useState("firstName");
  const [lastName, setLastName] = useState("lastName");

  return (
    <section>
      <h3 className="mt-4 text-xl font-medium">{t("interpolation.title")}</h3>

      <p className="mt-2 text-sm font-light text-slate-400">
        {t("interpolation.intro")}
      </p>

      <hr className="mx-auto mb-4 mt-4 max-w-[90%] border-[0.5px] border-dashed border-slate-600" />

      <div className="flex flex-col items-baseline sm:flex-row sm:justify-center sm:gap-16">
        <div className="mt-4">
          <label
            htmlFor="firstName"
            className="inline-block w-32 pe-4 text-end sm:w-auto sm:text-start"
          >
            {t("interpolation.first_name_label")}
          </label>
          <input
            type="text"
            value={firstName}
            id="firstName"
            autoComplete="off"
            onChange={(e) => setFirstName(e.target.value)}
            className="rounded-sm bg-slate-100 px-2 py-1 text-slate-900"
          />
        </div>
        <div className="mt-1">
          <label
            htmlFor="lastName"
            className="inline-block w-32 pe-4 text-end sm:w-auto sm:text-start"
          >
            {t("interpolation.last_name_label")}
          </label>
          <input
            type="text"
            value={lastName}
            id="lastName"
            autoComplete="off"
            onChange={(e) => setLastName(e.target.value)}
            className="rounded-sm bg-slate-100 px-2 py-1 text-slate-900"
          />
        </div>
      </div>

      <div className="mx-8 mt-6 rounded-md bg-slate-900 p-3 px-5">
        <p>{t("interpolation.user_greeting", { firstName, lastName })}</p>
      </div>

      <div className="mx-8 mt-3 rounded-md bg-slate-900 p-3 px-5">
        <p>
          {t("interpolation.user_greeting_lowercase", { firstName, lastName })}
        </p>
      </div>

      <div className="mx-8 mt-3 rounded-md bg-slate-900 p-3 px-5">
        <p>
          {t("interpolation.user_greeting_uppercase", { firstName, lastName })}
        </p>
      </div>
    </section>
  );
}

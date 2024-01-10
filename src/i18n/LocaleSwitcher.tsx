import { useTranslation } from "react-i18next";
import LangIcon from "./LangIcon";
import { supportedLngs } from "./config";

export default function LocaleSwitcher() {
  const { i18n } = useTranslation();

  return (
    <div className="flex items-center">
      <div className="locale-switcher">
        <LangIcon />

        <select
          value={i18n.resolvedLanguage}
          onChange={(e) => i18n.changeLanguage(e.target.value)}
        >
          {Object.entries(supportedLngs).map(([code, name]) => (
            <option value={code} key={code}>
              {name}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
}

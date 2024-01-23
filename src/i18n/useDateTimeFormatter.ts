import { useTranslation } from "react-i18next";
import { datetime } from "./formatters";

export default function useDateTimeFormatter(): (
  value: Date,
  options?: Intl.DateTimeFormatOptions,
) => string {
  const { i18n } = useTranslation();

  return function (value: Date, options?: Intl.DateTimeFormatOptions) {
    return datetime(value, i18n.resolvedLanguage, options);
  };
}

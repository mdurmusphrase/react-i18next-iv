import { useTranslation } from "react-i18next";

export default function useDateTimeFormatter(): (
  value: Date,
  options?: Intl.DateTimeFormatOptions,
) => string {
  const { i18n } = useTranslation();

  return function (value: Date, options?: Intl.DateTimeFormatOptions) {
    return new Intl.DateTimeFormat(i18n.resolvedLanguage, options).format(
      value,
    );
  };
}

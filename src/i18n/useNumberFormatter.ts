import { useTranslation } from "react-i18next";

export default function useNumberFormatter(): (
  value: number,
  options?: Intl.NumberFormatOptions,
) => string {
  const { i18n } = useTranslation();

  return function (value: number, options?: Intl.NumberFormatOptions) {
    return new Intl.NumberFormat(i18n.resolvedLanguage, options).format(value);
  };
}

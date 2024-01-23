import { useTranslation } from "react-i18next";
import { number } from "./formatters";

export default function useNumberFormatter(): (
  value: number,
  options?: Intl.NumberFormatOptions,
) => string {
  const { i18n } = useTranslation();

  return function (value: number, options?: Intl.NumberFormatOptions) {
    return number(value, i18n.resolvedLanguage, options);
  };
}

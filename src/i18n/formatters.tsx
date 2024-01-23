export default {
  lowercase,
  uppercase,
  datetime,
  number,
  currency,
} as const;

export function lowercase(value: string) {
  return value.toLowerCase();
}

export function uppercase(value: string) {
  return value.toUpperCase();
}

function qualifiedLngFor(lng: string): string {
  return lng === "ar" ? "ar-EG" : "en-CA";
}

export function datetime(
  value: Date | number,
  lng: string | undefined,
  options?: Intl.DateTimeFormatOptions,
) {
  return new Intl.DateTimeFormat(qualifiedLngFor(lng!), options).format(value);
}

export function number(
  value: number,
  lng: string | undefined,
  options?: Intl.NumberFormatOptions,
) {
  return new Intl.NumberFormat(qualifiedLngFor(lng!), options).format(value);
}

export function currency(
  value: number,
  lng: string | undefined,
  options?: Intl.NumberFormatOptions,
) {
  return number(value, lng, { style: "currency", ...options });
}

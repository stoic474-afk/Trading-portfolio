export type ClassNameValue = false | null | string | undefined;

export function classNames(...values: readonly ClassNameValue[]): string {
  return values.filter(Boolean).join(" ");
}

export type FormatUsdOptions = {
  readonly signDisplay?: Intl.NumberFormatOptions["signDisplay"];
};

export function formatUsd(value: number, { signDisplay = "auto" }: FormatUsdOptions = {}): string {
  return new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
    minimumFractionDigits: Number.isInteger(value) ? 0 : 2,
    maximumFractionDigits: 2,
    signDisplay,
  }).format(value);
}

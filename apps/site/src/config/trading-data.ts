export type SessionResult = "break-even" | "loss" | "no-setup" | "win";

export type TradingSession = {
  readonly dateLabel: string;
  readonly pnlUsd: number | null;
  readonly results: readonly SessionResult[];
};

const liveSessionRecords = [
  { dateLabel: "Aug 3", results: ["loss"], pnlUsd: -236 },
  { dateLabel: "Aug 4–5", results: ["no-setup"], pnlUsd: null },
  { dateLabel: "Aug 6", results: ["win"], pnlUsd: 423 },
  { dateLabel: "Aug 7", results: ["win", "loss"], pnlUsd: 140 },
  { dateLabel: "Aug 10", results: ["no-setup"], pnlUsd: null },
  { dateLabel: "Aug 11", results: ["break-even"], pnlUsd: 0 },
  { dateLabel: "Aug 12", results: ["win"], pnlUsd: 232 },
  { dateLabel: "Aug 13", results: ["no-setup"], pnlUsd: null },
  { dateLabel: "Aug 14", results: ["win"], pnlUsd: 723.5 },
  { dateLabel: "Aug 15", results: ["no-setup"], pnlUsd: null },
] satisfies readonly TradingSession[];

export const tradingData = {
  instrument: "MNQ",
  session: {
    startTime: "9:30",
    endTime: "11:00",
    timeZone: "ET",
  },
  strategy: {
    biasTimeframes: ["15-minute", "1-hour"],
    breakEvenPercentage: 57,
  },
  backtest: {
    startMonth: "Oct 2025",
    endMonth: "Mar 2026",
    durationMonths: 6,
    tradeCount: 74,
    netProfitUsd: 18_986,
    profitFactor: 7.38,
    averageWinUsd: 1_286,
    averageLossUsd: 271,
    maxDrawdownUsd: 545,
  },
  liveSessions: {
    records: liveSessionRecords,
  },
} as const;

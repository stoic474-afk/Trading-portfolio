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
} as const;

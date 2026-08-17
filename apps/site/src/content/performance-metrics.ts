import { formatUsd } from "@trading-portfolio/std-core/format/usd";
import { tradingData } from "@/config/trading-data";

const { backtest } = tradingData;

export const performanceMetrics = [
  {
    label: "Backtest Net P&L",
    prefix: "+$",
    value: backtest.netProfitUsd,
    description: `${backtest.startMonth} – ${backtest.endMonth} · ${backtest.tradeCount} trades`,
    tone: "positive",
  },
  {
    label: "Profit Factor",
    value: backtest.profitFactor,
    suffix: "×",
    format: {
      minimumFractionDigits: 2,
      maximumFractionDigits: 2,
    },
    description: `Avg win ${formatUsd(backtest.averageWinUsd)} · Avg loss ${formatUsd(backtest.averageLossUsd)}`,
    tone: "accent",
  },
  {
    label: "Max Drawdown",
    prefix: "$",
    value: backtest.maxDrawdownUsd,
    description: `Across entire ${backtest.durationMonths}-month backtest period`,
  },
] as const;

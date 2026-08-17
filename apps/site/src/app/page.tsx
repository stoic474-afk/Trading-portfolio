import { formatUsd } from "@trading-portfolio/std-core/format/usd";
import { Shell } from "@/components/layout/shell";
import { Hero, type HeroProps } from "@/components/sections/hero";
import { LiveSessions } from "@/components/sections/live-sessions";
import { Overview, type OverviewProps } from "@/components/sections/overview";
import { type PerformanceMetric, PerformanceMetrics } from "@/components/sections/performance-metrics";
import { siteConfig } from "@/config/site";
import { tradingData } from "@/config/trading-data";

const { backtest, instrument, liveSessions, session, strategy } = tradingData;

const heroContent = {
  title: siteConfig.name,
  eyebrow: siteConfig.eyebrow,
  description: siteConfig.description,
} satisfies HeroProps;

const performanceMetrics = [
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
] satisfies readonly PerformanceMetric[];

const overviewContent = {
  heading: "Overview",
  paragraphs: [
    `${siteConfig.name} monitors ${instrument} futures during the ${session.startTime}–${session.endTime} AM ${session.timeZone} session window. It identifies the prior session’s high and low as reference liquidity pools, then waits for a manipulation sweep of one level before the distribution phase drives price in the opposite direction.`,
    `Entries require multi-timeframe confluence: a ${strategy.biasTimeframes.join(" or ")} structural bias, a market structure break, and an order block or fair value gap as the trigger zone. Every entry immediately places an OCA bracket (stop and limit target) anchored to the actual fill price—not the intended entry—to correctly account for slippage.`,
    `When conditions are ambiguous, the bot exits at break-even: ${strategy.breakEvenPercentage}% of entries cost nothing. This selectivity is the primary driver of the ${backtest.profitFactor.toFixed(2)}× profit factor—losses are bounded and rare, while winners run to structural targets.`,
  ],
} satisfies OverviewProps;

export default function Home() {
  return (
    <Shell>
      <Hero {...heroContent} />
      <PerformanceMetrics metrics={performanceMetrics} />
      <Overview {...overviewContent} />
      <LiveSessions {...liveSessions} />
    </Shell>
  );
}

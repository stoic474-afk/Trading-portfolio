import { Shell } from "@/components/layout/shell";
import { Hero, type HeroProps } from "@/components/sections/hero";
import { type PerformanceMetric, PerformanceMetrics } from "@/components/sections/performance-metrics";
import { siteConfig } from "@/config/site";

const heroContent = {
  title: siteConfig.name,
  eyebrow: siteConfig.eyebrow,
  description: siteConfig.description,
} satisfies HeroProps;

const performanceMetrics = [
  {
    label: "Backtest Net P&L",
    prefix: "+$",
    value: "18,986",
    description: "Oct 2025 – Mar 2026 · 74 trades",
    tone: "positive",
  },
  {
    label: "Profit Factor",
    value: "7.38",
    suffix: "×",
    description: "Avg win $1,286 · Avg loss $271",
    tone: "accent",
  },
  {
    label: "Max Drawdown",
    prefix: "$",
    value: "545",
    description: "Across entire 6-month backtest period",
  },
] satisfies readonly PerformanceMetric[];

export default function Home() {
  return (
    <Shell>
      <Hero {...heroContent} />
      <PerformanceMetrics metrics={performanceMetrics} />
    </Shell>
  );
}

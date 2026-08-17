import { siteConfig } from "@/config/site";
import { tradingData } from "@/config/trading-data";

const { backtest, instrument, session, strategy } = tradingData;

export const overviewContent = {
  heading: "Overview",
  terminalPrompt: "nemesis@vps-0111000:",
  entries: [
    {
      command: "cat overview-01.txt",
      output: `${siteConfig.name} monitors ${instrument} futures during the ${session.startTime}–${session.endTime} AM ${session.timeZone} session window. It identifies the prior session’s high and low as reference liquidity pools, then waits for a manipulation sweep of one level before the distribution phase drives price in the opposite direction.`,
    },
    {
      command: "cat overview-02.txt",
      output: `Entries require multi-timeframe confluence: a ${strategy.biasTimeframes.join(" or ")} structural bias, a market structure break, and an order block or fair value gap as the trigger zone. Every entry immediately places an OCA bracket (stop and limit target) anchored to the actual fill price—not the intended entry—to correctly account for slippage.`,
    },
    {
      command: "cat overview-03.txt",
      output: `When conditions are ambiguous, the bot exits at break-even: ${strategy.breakEvenPercentage}% of entries cost nothing. This selectivity is the primary driver of the ${backtest.profitFactor.toFixed(2)}× profit factor—losses are bounded and rare, while winners run to structural targets.`,
    },
  ],
} as const;

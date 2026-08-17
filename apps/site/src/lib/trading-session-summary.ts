import type { SessionResult, TradingSession } from "@/config/trading-data";

export type TradingSessionSummary = {
  readonly breakEvens: number;
  readonly losses: number;
  readonly totalPnlUsd: number;
  readonly tradeCount: number;
  readonly wins: number;
};

export function summarizeTradingSessions(sessions: readonly TradingSession[]): TradingSessionSummary {
  const resultCounts: Record<Exclude<SessionResult, "no-setup">, number> = {
    "break-even": 0,
    loss: 0,
    win: 0,
  };
  let totalPnlUsd = 0;

  for (const session of sessions) {
    totalPnlUsd += session.pnlUsd ?? 0;

    for (const result of session.results) {
      if (result !== "no-setup") {
        resultCounts[result] += 1;
      }
    }
  }

  const tradeCount = resultCounts.win + resultCounts.loss + resultCounts["break-even"];

  return {
    breakEvens: resultCounts["break-even"],
    losses: resultCounts.loss,
    totalPnlUsd,
    tradeCount,
    wins: resultCounts.win,
  };
}

import { tradingData } from "@/config/trading-data";

export const liveSessionsContent = {
  period: "August 2026",
  records: tradingData.liveSessions.records,
  sourceNote: "Paper account · live market data · real bid–ask spreads",
} as const;

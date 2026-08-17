export const workflowSteps = [
  {
    title: "HTF Bias",
    description: "15-minute or 1-hour structural shift and fair value gap.",
  },
  {
    title: "Liquidity Sweep",
    description: "A key liquidity level is swept before price reverses through it.",
  },
  {
    title: "Entry Signal",
    description: "Market structure break with order block or fair value gap confluence.",
  },
  {
    title: "OCA Bracket",
    description: "Stop and target orders are anchored to the actual fill price.",
  },
  {
    title: "BE Management",
    description: "Divergence or a structural obstacle can move the stop to break-even.",
  },
  {
    title: "Exit",
    description: "The position closes at its target, break-even stop, or force-flat time.",
  },
] as const;

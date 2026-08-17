export const engineeringFeatures = [
  {
    title: "Async event-driven architecture",
    description:
      "Fill callbacks, order status updates, and portfolio events run asynchronously so the main loop never blocks while waiting for broker responses.",
  },
  {
    title: "OCA bracket order management",
    description:
      "Each entry places a one-cancels-all stop and target bracket, with explicit cancellation safeguards that prevent orphaned orders.",
  },
  {
    title: "SMT divergence detection",
    description:
      "Real-time MES and MNQ bars are compared for divergence, allowing the bot to protect an open position when correlated structure separates.",
  },
  {
    title: "Dynamic position sizing",
    description:
      "Contract quantity adjusts to structural stop distance so risk remains consistent while respecting a fixed maximum position size.",
  },
  {
    title: "After-hours order handling",
    description:
      "Force-flat logic accounts for extended-hours trading and the daily CME halt when closing positions outside the regular session.",
  },
  {
    title: "Stuck-order recovery",
    description:
      "Pending bracket orders are monitored for silent broker rejection and automatically rebuilt when they fail to become active.",
  },
] as const;

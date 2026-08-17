import { Shell } from "@/components/layout/shell";
import { EngineeringFeatures } from "@/components/sections/engineering-features";
import { Hero } from "@/components/sections/hero";
import { HowItWorks } from "@/components/sections/how-it-works";
import { LiveSessions } from "@/components/sections/live-sessions";
import { Overview } from "@/components/sections/overview";
import { PerformanceMetrics } from "@/components/sections/performance-metrics";
import { engineeringFeatures } from "@/content/engineering-features";
import { heroContent } from "@/content/hero";
import { liveSessionsContent } from "@/content/live-sessions";
import { overviewContent } from "@/content/overview";
import { performanceMetrics } from "@/content/performance-metrics";
import { workflowSteps } from "@/content/workflow";

export default function Home() {
  return (
    <Shell>
      <Hero {...heroContent} />
      <PerformanceMetrics metrics={performanceMetrics} />
      <Overview {...overviewContent} />
      <LiveSessions {...liveSessionsContent} />
      <HowItWorks steps={workflowSteps} />
      <EngineeringFeatures features={engineeringFeatures} />
    </Shell>
  );
}

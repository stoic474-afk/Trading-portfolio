import { classNames } from "@/lib/class-names";
import { Container } from "../ui/container";

export type PerformanceMetricTone = "accent" | "default" | "positive";

export type PerformanceMetric = {
  readonly description: string;
  readonly label: string;
  readonly prefix?: string;
  readonly suffix?: string;
  readonly tone?: PerformanceMetricTone;
  readonly value: string;
};

export type PerformanceMetricsProps = {
  readonly metrics: readonly PerformanceMetric[];
};

const valueToneClassName: Record<PerformanceMetricTone, string> = {
  accent:
    "bg-[linear-gradient(90deg,#58a6ff,#79c0ff)] bg-clip-text text-transparent drop-shadow-[0_0_18px_rgba(88,166,255,0.16)]",
  default: "text-[var(--color-foreground)]",
  positive:
    "bg-[linear-gradient(90deg,#3fb950,#7ee787)] bg-clip-text text-transparent drop-shadow-[0_0_18px_rgba(63,185,80,0.18)]",
};

export function PerformanceMetrics({ metrics }: PerformanceMetricsProps) {
  return (
    <section aria-label="Performance metrics" className="py-8 sm:py-10">
      <Container size="narrow">
        <dl className="grid grid-cols-1 gap-px overflow-hidden rounded-[var(--radius-sm)] border bg-[var(--color-border)] shadow-[var(--shadow-surface)] sm:grid-cols-3">
          {metrics.map(({ description, label, prefix, suffix, tone = "default", value }) => (
            <div className="bg-[var(--color-surface)] px-7 pt-6 pb-5" key={label}>
              <dt className="mb-2.5 text-[0.625rem] text-[var(--color-muted)] uppercase tracking-[0.18em]">{label}</dt>
              <dd
                className={classNames(
                  "font-bold font-mono text-[2rem] leading-none tracking-[-0.03125rem] [font-variant-numeric:tabular-nums]",
                  valueToneClassName[tone],
                )}
              >
                {prefix && <span className="mr-0.5 align-[0.18em] text-[0.55em] tracking-normal">{prefix}</span>}
                <span>{value}</span>
                {suffix && <span className="ml-0.5 align-[0.18em] text-[0.55em] tracking-normal">{suffix}</span>}
              </dd>
              <dd className="mt-2 text-[0.75rem] text-[var(--color-muted)]">{description}</dd>
            </div>
          ))}
        </dl>
      </Container>
    </section>
  );
}

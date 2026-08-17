import type { CSSProperties } from "react";
import { Container } from "../ui/container";

export type HeroProps = {
  readonly description: string;
  readonly eyebrow: string;
  readonly title: string;
};

const gridStyle = {
  backgroundImage:
    "linear-gradient(rgba(255, 255, 255, 0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(255, 255, 255, 0.03) 1px, transparent 1px)",
  backgroundSize: "40px 40px",
} satisfies CSSProperties;

export function Hero({ description, eyebrow, title }: HeroProps) {
  return (
    <header className="relative overflow-hidden bg-[#0d1117] py-11 text-[#e6edf3] sm:py-16">
      <div aria-hidden="true" className="pointer-events-none absolute inset-0" style={gridStyle} />
      <Container className="relative" size="narrow">
        <p className="mb-4 font-mono text-[#58a6ff] text-[0.6875rem] uppercase tracking-[0.2em]">
          {"// "}
          {eyebrow}
        </p>
        <h1 className="mb-4 font-bold text-[#f0f6fc] text-[clamp(2.25rem,6vw,3.75rem)] leading-[1.05] tracking-[-0.025em]">
          {title}
        </h1>
        <p className="max-w-[35rem] text-[#8b949e] text-[1.0625rem] leading-[1.6]">{description}</p>
      </Container>
    </header>
  );
}

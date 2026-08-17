import { ArrowRight } from "lucide-react";

export type StepFlowStep = {
  readonly description: string;
  readonly title: string;
};

export type StepFlowProps = {
  readonly steps: readonly StepFlowStep[];
};

export function StepFlow({ steps }: StepFlowProps) {
  return (
    <ol className="flex flex-col lg:flex-row lg:items-stretch">
      {steps.map(({ description, title }, index) => (
        <li className="flex flex-col lg:min-w-0 lg:flex-1 lg:flex-row" key={title}>
          <div className="relative flex-1 overflow-hidden rounded-[var(--radius-sm)] border bg-[var(--color-surface)] p-5 shadow-[var(--shadow-surface)]">
            <span
              aria-hidden="true"
              className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-[var(--color-accent)] to-transparent opacity-80"
            />
            <span className="flex size-8 items-center justify-center rounded-full border border-[var(--color-accent)]/35 bg-[var(--color-surface-subtle)] font-mono text-[0.625rem] text-[var(--color-accent)]">
              {String(index + 1).padStart(2, "0")}
            </span>
            <h3 className="mt-4 font-semibold text-sm leading-5">{title}</h3>
            <p className="mt-2 text-[0.75rem] text-[var(--color-muted)] leading-5">{description}</p>
          </div>
          {index < steps.length - 1 && (
            <span
              aria-hidden="true"
              className="flex h-10 shrink-0 items-center justify-center text-[var(--color-accent)] lg:h-auto lg:w-8"
            >
              <ArrowRight aria-hidden="true" className="size-5 rotate-90 lg:rotate-0" strokeWidth={1.5} />
            </span>
          )}
        </li>
      ))}
    </ol>
  );
}

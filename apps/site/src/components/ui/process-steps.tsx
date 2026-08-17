import { classNames } from "@/lib/class-names";

export type ProcessStep = {
  readonly description: string;
  readonly title: string;
};

export type ProcessStepsProps = {
  readonly className?: string;
  readonly steps: readonly ProcessStep[];
};

export function ProcessSteps({ className, steps }: ProcessStepsProps) {
  return (
    <ol
      className={classNames(
        "grid gap-px overflow-hidden rounded-[var(--radius-sm)] border bg-[var(--color-border)] sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6",
        className,
      )}
    >
      {steps.map(({ description, title }, index) => (
        <li className="bg-[var(--color-surface)] px-5 py-5" key={title}>
          <span className="font-mono text-[0.625rem] text-[var(--color-accent)] tracking-[0.16em]">
            {String(index + 1).padStart(2, "0")}
          </span>
          <h3 className="mt-3 font-semibold text-sm leading-5">{title}</h3>
          <p className="mt-2 text-[0.75rem] text-[var(--color-muted)] leading-5">{description}</p>
        </li>
      ))}
    </ol>
  );
}

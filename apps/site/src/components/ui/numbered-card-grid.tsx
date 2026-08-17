import { classNames } from "@/lib/class-names";

export type NumberedCard = {
  readonly description: string;
  readonly title: string;
};

export type NumberedCardGridProps = {
  readonly className?: string;
  readonly items: readonly NumberedCard[];
};

export function NumberedCardGrid({ className, items }: NumberedCardGridProps) {
  return (
    <ol
      className={classNames(
        "grid gap-px overflow-hidden rounded-[var(--radius-sm)] border bg-[var(--color-border)] sm:grid-cols-2 lg:grid-cols-3",
        className,
      )}
    >
      {items.map(({ description, title }, index) => (
        <li className="bg-[var(--color-surface)] p-6" key={title}>
          <span className="font-mono text-[0.625rem] text-[var(--color-accent)] tracking-[0.16em]">
            {String(index + 1).padStart(2, "0")}
          </span>
          <h3 className="mt-4 font-semibold text-base leading-6">{title}</h3>
          <p className="mt-2 text-[0.8125rem] text-[var(--color-muted)] leading-6">{description}</p>
        </li>
      ))}
    </ol>
  );
}

import { Container } from "../ui/container";

export type OverviewProps = {
  readonly heading: string;
  readonly paragraphs: readonly string[];
};

export function Overview({ heading, paragraphs }: OverviewProps) {
  return (
    <section className="pb-[3.25rem]" aria-labelledby="overview-heading">
      <Container size="narrow">
        <h2
          className="mb-5.5 border-[var(--color-hairline)] border-b pb-2.5 font-mono text-[0.625rem] text-[var(--color-muted)] uppercase tracking-[0.2em]"
          id="overview-heading"
        >
          {heading}
        </h2>
        <div className="max-w-3xl space-y-3.5">
          {paragraphs.map((paragraph) => (
            <p className="text-[0.875rem] text-[var(--color-muted)] leading-7" key={paragraph}>
              {paragraph}
            </p>
          ))}
        </div>
      </Container>
    </section>
  );
}

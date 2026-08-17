import { Container } from "../ui/container";
import { SectionHeading } from "../ui/section-heading";

export type OverviewProps = {
  readonly heading: string;
  readonly paragraphs: readonly string[];
};

export function Overview({ heading, paragraphs }: OverviewProps) {
  return (
    <section className="pb-[3.25rem]" aria-labelledby="overview-heading">
      <Container size="narrow">
        <SectionHeading id="overview-heading">{heading}</SectionHeading>
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

import { Container } from "../ui/container";
import { type NumberedCard, NumberedCardGrid } from "../ui/numbered-card-grid";
import { SectionHeading } from "../ui/section-heading";

export type EngineeringFeaturesProps = {
  readonly features: readonly NumberedCard[];
};

export function EngineeringFeatures({ features }: EngineeringFeaturesProps) {
  return (
    <section aria-labelledby="engineering-features-heading" className="pb-[3.25rem]">
      <Container>
        <SectionHeading id="engineering-features-heading">Engineering Features</SectionHeading>
        <NumberedCardGrid items={features} />
      </Container>
    </section>
  );
}

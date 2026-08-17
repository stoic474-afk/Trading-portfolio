import { Container } from "../ui/container";
import { SectionHeading } from "../ui/section-heading";
import { StepFlow, type StepFlowStep } from "../ui/step-flow";

export type HowItWorksProps = {
  readonly steps: readonly StepFlowStep[];
};

export function HowItWorks({ steps }: HowItWorksProps) {
  return (
    <section aria-labelledby="how-it-works-heading" className="pb-[3.25rem]">
      <Container>
        <SectionHeading id="how-it-works-heading">How It Works</SectionHeading>
        <StepFlow steps={steps} />
      </Container>
    </section>
  );
}

import { Container } from "../ui/container";
import type { ProcessStep } from "../ui/process-steps";
import { ProcessSteps } from "../ui/process-steps";
import { SectionHeading } from "../ui/section-heading";

export type HowItWorksProps = {
  readonly steps: readonly ProcessStep[];
};

export function HowItWorks({ steps }: HowItWorksProps) {
  return (
    <section aria-labelledby="how-it-works-heading" className="pb-[3.25rem]">
      <Container>
        <SectionHeading id="how-it-works-heading">How It Works</SectionHeading>
        <ProcessSteps steps={steps} />
      </Container>
    </section>
  );
}

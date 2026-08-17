import { Container } from "../ui/container";
import { SectionHeading } from "../ui/section-heading";
import { type TerminalEntry, TerminalPanel } from "../ui/terminal-panel";

export type OverviewProps = {
  readonly entries: readonly TerminalEntry[];
  readonly heading: string;
  readonly terminalPrompt: string;
};

export function Overview({ entries, heading, terminalPrompt }: OverviewProps) {
  return (
    <section className="pb-[3.25rem]" aria-labelledby="overview-heading">
      <Container>
        <SectionHeading id="overview-heading">{heading}</SectionHeading>
        <TerminalPanel entries={entries} prompt={terminalPrompt} />
      </Container>
    </section>
  );
}

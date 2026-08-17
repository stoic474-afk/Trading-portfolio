import { Shell } from "@/components/layout/shell";
import { Section } from "@/components/ui/section";
import { Stack } from "@/components/ui/stack";
import { Surface } from "@/components/ui/surface";

export default function Home() {
  return (
    <Shell>
      <Section
        eyebrow="Portfolio foundation"
        title="Nemesis Protocol"
        description="The shared application shell and design system are ready. Portfolio content migration is the next step."
        className="flex min-h-[calc(100svh-12rem)] items-center"
      >
        <Surface className="max-w-2xl">
          <Stack gap="sm">
            <p className="font-mono text-[var(--color-accent)] text-xs uppercase tracking-[0.18em]">System status</p>
            <p className="text-[var(--color-muted)] text-sm leading-6">
              Next.js, Tailwind CSS, Ark UI, shared tokens, and reusable layout primitives are connected through the
              root workspace.
            </p>
          </Stack>
        </Surface>
      </Section>
    </Shell>
  );
}

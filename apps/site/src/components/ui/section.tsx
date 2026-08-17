import { ark, type HTMLArkProps } from "@ark-ui/react/factory";
import type { ReactNode } from "react";
import { classNames } from "@/lib/class-names";
import { Container } from "./container";
import { Stack } from "./stack";

export type SectionProps = Omit<HTMLArkProps<"section">, "title"> & {
  description?: ReactNode;
  eyebrow?: ReactNode;
  title?: ReactNode;
};

export function Section({ children, className, description, eyebrow, title, ...props }: SectionProps) {
  return (
    <ark.section className={classNames("py-[var(--section-space)]", className)} {...props}>
      <Container>
        <Stack gap="lg">
          {(description || eyebrow || title) && (
            <Stack className="max-w-3xl" gap="sm">
              {eyebrow && (
                <p className="font-mono text-[var(--color-accent)] text-xs uppercase tracking-[0.2em]">{eyebrow}</p>
              )}
              {title && <h1 className="font-bold text-4xl tracking-[-0.035em] sm:text-5xl">{title}</h1>}
              {description && <p className="text-[var(--color-muted)] text-base leading-7 sm:text-lg">{description}</p>}
            </Stack>
          )}
          {children}
        </Stack>
      </Container>
    </ark.section>
  );
}

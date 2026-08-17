import { ark, type HTMLArkProps } from "@ark-ui/react/factory";
import { classNames } from "@/lib/class-names";

type SurfaceTone = "accent" | "default" | "subtle";

export type SurfaceProps = HTMLArkProps<"div"> & {
  tone?: SurfaceTone;
};

const surfaceToneClassName: Record<SurfaceTone, string> = {
  accent: "border-[color:var(--color-accent)]/30 bg-[var(--color-surface-subtle)]",
  default: "bg-[var(--color-surface)] shadow-[var(--shadow-surface)]",
  subtle: "bg-[var(--color-surface-subtle)]",
};

export function Surface({ className, tone = "default", ...props }: SurfaceProps) {
  return (
    <ark.div
      className={classNames("rounded-[var(--radius-lg)] border p-6 sm:p-8", surfaceToneClassName[tone], className)}
      {...props}
    />
  );
}

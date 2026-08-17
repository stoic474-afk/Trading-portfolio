import { ark, type HTMLArkProps } from "@ark-ui/react/factory";
import { classNames } from "@/lib/class-names";

export type SectionHeadingProps = HTMLArkProps<"h2">;

export function SectionHeading({ className, ...props }: SectionHeadingProps) {
  return (
    <ark.h2
      className={classNames(
        "mb-5.5 border-[var(--color-hairline)] border-b pb-2.5 font-mono text-[0.625rem] text-[var(--color-muted)] uppercase tracking-[0.2em]",
        className,
      )}
      {...props}
    />
  );
}

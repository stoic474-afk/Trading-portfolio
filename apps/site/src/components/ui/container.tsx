import { ark, type HTMLArkProps } from "@ark-ui/react/factory";
import { classNames } from "@/lib/class-names";

type ContainerSize = "content" | "narrow" | "wide";

export type ContainerProps = HTMLArkProps<"div"> & {
  size?: ContainerSize;
};

const containerSizeClassName: Record<ContainerSize, string> = {
  content: "max-w-[var(--page-width)]",
  narrow: "max-w-[53.75rem]",
  wide: "max-w-[90rem]",
};

export function Container({ className, size = "content", ...props }: ContainerProps) {
  return (
    <ark.div
      className={classNames("mx-auto w-full px-[var(--page-gutter)]", containerSizeClassName[size], className)}
      {...props}
    />
  );
}

import { ark, type HTMLArkProps } from "@ark-ui/react/factory";
import { classNames } from "@/lib/class-names";

type StackGap = "lg" | "md" | "sm" | "xs";

export type StackProps = HTMLArkProps<"div"> & {
  gap?: StackGap;
};

const stackGapClassName: Record<StackGap, string> = {
  lg: "gap-8",
  md: "gap-6",
  sm: "gap-4",
  xs: "gap-2",
};

export function Stack({ className, gap = "md", ...props }: StackProps) {
  return <ark.div className={classNames("flex flex-col", stackGapClassName[gap], className)} {...props} />;
}

import { ark, type HTMLArkProps } from "@ark-ui/react/factory";
import { classNames } from "@/lib/class-names";

export type TableProps = HTMLArkProps<"table"> & {
  wrapperClassName?: string | undefined;
};

export function Table({ className, wrapperClassName, ...props }: TableProps) {
  return (
    <div className={classNames("w-full overflow-x-auto", wrapperClassName)}>
      <ark.table className={classNames("w-full caption-bottom border-collapse text-sm", className)} {...props} />
    </div>
  );
}

export type TableSectionProps = HTMLArkProps<"thead">;

export function TableHeader({ className, ...props }: TableSectionProps) {
  return <ark.thead className={className} {...props} />;
}

export type TableBodyProps = HTMLArkProps<"tbody">;

export function TableBody({ className, ...props }: TableBodyProps) {
  return <ark.tbody className={classNames("[&_tr:last-child]:border-0", className)} {...props} />;
}

export type TableFooterProps = HTMLArkProps<"tfoot">;

export function TableFooter({ className, ...props }: TableFooterProps) {
  return <ark.tfoot className={classNames("border-t font-semibold", className)} {...props} />;
}

export type TableRowProps = HTMLArkProps<"tr">;

export function TableRow({ className, ...props }: TableRowProps) {
  return <ark.tr className={classNames("border-[var(--color-hairline)] border-b", className)} {...props} />;
}

export type TableHeadProps = HTMLArkProps<"th">;

export function TableHead({ className, ...props }: TableHeadProps) {
  return <ark.th className={classNames("h-10 px-4 text-left align-middle font-medium", className)} {...props} />;
}

export type TableCellProps = HTMLArkProps<"td">;

export function TableCell({ className, ...props }: TableCellProps) {
  return <ark.td className={classNames("p-4 align-middle", className)} {...props} />;
}

export type TableCaptionProps = HTMLArkProps<"caption">;

export function TableCaption({ className, ...props }: TableCaptionProps) {
  return <ark.caption className={classNames("mt-4 text-[var(--color-muted)] text-sm", className)} {...props} />;
}

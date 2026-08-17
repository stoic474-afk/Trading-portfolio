import { formatUsd } from "@trading-portfolio/std-core/format/usd";
import type { SessionResult, TradingSession } from "@/config/trading-data";
import { classNames } from "@/lib/class-names";
import { summarizeTradingSessions } from "@/lib/trading-session-summary";
import { Container } from "../ui/container";
import { SectionHeading } from "../ui/section-heading";
import { Table, TableBody, TableCaption, TableCell, TableFooter, TableHead, TableHeader, TableRow } from "../ui/table";

export type LiveSessionsProps = {
  readonly period: string;
  readonly records: readonly TradingSession[];
  readonly sourceNote: string;
};

const resultLabel: Record<SessionResult, string> = {
  "break-even": "BE",
  loss: "Loss",
  "no-setup": "No setup",
  win: "Win",
};

const resultClassName: Record<SessionResult, string> = {
  "break-even": "bg-[var(--color-surface-subtle)] text-[var(--color-accent)]",
  loss: "bg-[var(--color-negative-surface)] text-[var(--color-negative)]",
  "no-setup": "bg-[var(--color-hairline)] text-[var(--color-muted)]",
  win: "bg-[var(--color-positive-surface)] text-[var(--color-positive)]",
};

function SessionResultBadge({ result }: { readonly result: SessionResult }) {
  return (
    <span
      className={classNames(
        "inline-flex px-2 py-0.5 font-semibold text-[0.5625rem] uppercase tracking-[0.1em]",
        resultClassName[result],
      )}
    >
      {resultLabel[result]}
    </span>
  );
}

function getPnlClassName(pnlUsd: number | null): string {
  if (pnlUsd === null || pnlUsd === 0) {
    return "text-[var(--color-muted)]";
  }

  return pnlUsd > 0 ? "text-[var(--color-positive)]" : "text-[var(--color-negative)]";
}

export function LiveSessions({ period, records, sourceNote }: LiveSessionsProps) {
  const summary = summarizeTradingSessions(records);

  return (
    <section aria-labelledby="live-sessions-heading" className="pb-[3.25rem]">
      <Container>
        <SectionHeading id="live-sessions-heading">Live Sessions — {period}</SectionHeading>
        <Table wrapperClassName="rounded-[var(--radius-sm)] border bg-[var(--color-surface)] px-5 sm:px-7">
          <TableCaption className="sr-only">Trading results for {period}</TableCaption>
          <TableHeader>
            <TableRow className="border-[var(--color-border)]">
              <TableHead className="h-auto px-0 pt-5 pb-2 text-[0.625rem] text-[var(--color-muted)] uppercase tracking-[0.14em]">
                Date
              </TableHead>
              <TableHead className="h-auto px-0 pt-5 pb-2 text-[0.625rem] text-[var(--color-muted)] uppercase tracking-[0.14em]">
                Result
              </TableHead>
              <TableHead className="h-auto px-0 pt-5 pb-2 text-right text-[0.625rem] text-[var(--color-muted)] uppercase tracking-[0.14em]">
                P&amp;L
              </TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {records.map((session) => (
              <TableRow key={session.dateLabel}>
                <TableCell className="px-0 py-2.5 font-mono text-xs [font-variant-numeric:tabular-nums]">
                  {session.dateLabel}
                </TableCell>
                <TableCell className="px-0 py-2.5">
                  <span className="flex flex-wrap gap-1.5">
                    {session.results.map((result, index) => (
                      <SessionResultBadge key={`${session.dateLabel}-${result}-${index}`} result={result} />
                    ))}
                  </span>
                </TableCell>
                <TableCell
                  className={classNames(
                    "px-0 py-2.5 text-right font-mono text-xs [font-variant-numeric:tabular-nums]",
                    getPnlClassName(session.pnlUsd),
                  )}
                >
                  {session.pnlUsd === null ? "—" : formatUsd(session.pnlUsd, { signDisplay: "exceptZero" })}
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
          <TableFooter>
            <TableRow className="border-0">
              <TableCell className="px-0 py-3">Total</TableCell>
              <TableCell className="px-0 py-3 text-[var(--color-muted)] text-xs">
                {summary.tradeCount} trades · {summary.wins}W {summary.losses}L {summary.breakEvens}BE
              </TableCell>
              <TableCell
                className={classNames(
                  "px-0 py-3 text-right [font-variant-numeric:tabular-nums]",
                  getPnlClassName(summary.totalPnlUsd),
                )}
              >
                {formatUsd(summary.totalPnlUsd, { signDisplay: "exceptZero" })}
              </TableCell>
            </TableRow>
          </TableFooter>
        </Table>
        <p className="mt-3 text-[0.6875rem] text-[var(--color-muted)] leading-5">{sourceNote}</p>
      </Container>
    </section>
  );
}

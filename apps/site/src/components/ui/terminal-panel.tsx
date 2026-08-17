import { Terminal } from "lucide-react";

export type TerminalEntry = {
  readonly command: string;
  readonly output: string;
};

export type TerminalPanelProps = {
  readonly entries: readonly TerminalEntry[];
  readonly prompt: string;
};

export function TerminalPanel({ entries, prompt }: TerminalPanelProps) {
  return (
    <section
      aria-label="Strategy overview terminal"
      className="overflow-hidden rounded-md border border-white/15 bg-black shadow-[var(--shadow-surface)]"
    >
      <div className="flex items-center gap-2 border-white/10 border-b bg-[#111] px-4 py-2.5 font-mono text-white/70 text-xs">
        <Terminal aria-hidden="true" className="size-3.5" strokeWidth={1.75} />
        <span>{prompt}~</span>
      </div>
      <div className="space-y-6 px-5 py-5 font-mono text-[0.8125rem] text-white leading-6 sm:px-7 sm:py-6">
        {entries.map(({ command, output }) => (
          <div key={command}>
            <p aria-hidden="true" className="break-all text-white/65">
              {prompt}~$ {command}
            </p>
            <p className="mt-1.5">{output}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

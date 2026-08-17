import type { ReactNode } from "react";
import { Footer } from "./footer";
import { Header } from "./header";

export type ShellProps = {
  children: ReactNode;
};

export function Shell({ children }: ShellProps) {
  return (
    <div className="min-h-svh">
      <Header />
      <main>{children}</main>
      <Footer />
    </div>
  );
}

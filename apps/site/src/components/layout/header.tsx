import Link from "next/link";
import { siteConfig } from "@/config/site";
import { sitePaths } from "@/config/site-paths";
import { Container } from "../ui/container";

export function Header() {
  return (
    <header className="sticky top-0 z-50 border-[var(--color-hairline)] border-b bg-[var(--color-header)] backdrop-blur-xl">
      <Container className="flex h-16 items-center">
        <Link className="min-w-0 font-semibold tracking-[-0.02em]" href={sitePaths.home}>
          <span className="truncate">{siteConfig.name}</span>
        </Link>
      </Container>
    </header>
  );
}

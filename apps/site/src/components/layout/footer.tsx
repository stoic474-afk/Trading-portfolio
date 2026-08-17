import { siteConfig } from "@/config/site";
import { Container } from "../ui/container";

export function Footer() {
  return (
    <footer className="border-[var(--color-hairline)] border-t py-8">
      <Container>
        <p className="max-w-4xl text-[var(--color-muted)] text-xs leading-5">{siteConfig.disclaimer}</p>
      </Container>
    </footer>
  );
}

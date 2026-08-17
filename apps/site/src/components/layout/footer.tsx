import { siteConfig } from "@/config/site";
import { footerContent } from "@/content/footer";
import { Container } from "../ui/container";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-[var(--color-hairline)] border-t py-8">
      <Container>
        <div className="space-y-3">
          <p className="text-[var(--color-muted)] text-xs">
            © {currentYear} {siteConfig.name}
          </p>
          <p className="max-w-4xl text-[var(--color-muted)] text-xs leading-5">{footerContent.disclaimer}</p>
        </div>
      </Container>
    </footer>
  );
}

import { siteConfig } from "@/config/site";
import { Button } from "@/components/ui/button";

const links = [
  { href: "#services", label: "Services" },
  { href: "#work", label: "Examples" },
  { href: "#about", label: "About" },
];

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-50 border-b border-border/70 bg-background/82 backdrop-blur-xl">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-5 sm:px-6">
        <a href="#" className="flex min-w-0 items-center gap-3" aria-label="Home">
          <span className="grid h-9 w-9 shrink-0 place-items-center rounded-full border border-primary/20 bg-primary/10 font-serif text-sm font-semibold text-primary">
            QT
          </span>
          <span className="hidden text-sm font-semibold tracking-normal text-foreground sm:block">
            {siteConfig.name}
          </span>
        </a>
        <nav className="hidden items-center gap-6 md:flex" aria-label="Primary navigation">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
            >
              {link.label}
            </a>
          ))}
        </nav>
        <Button asChild size="sm">
          <a href={`mailto:${siteConfig.email}`}>Project inquiry</a>
        </Button>
      </div>
    </header>
  );
}

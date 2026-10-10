import Link from "next/link";
import { Logo } from "@/components/logo/logo";
import { MobileMenu } from "./mobile-menu";
import { NAV_LINKS } from "./nav-links";

export function Header() {
  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-border bg-background/30 backdrop-blur-lg">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-6">
        <Link
          href="/#inicio"
          aria-label="Milton Andrade, voltar ao início"
          className="rounded-sm text-foreground transition-opacity hover:opacity-80 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
        >
          <Logo className="h-8 w-auto" />
        </Link>

        <nav aria-label="Navegação principal" className="hidden md:block">
          <ul className="flex items-center gap-8">
            {NAV_LINKS.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className="rounded-sm text-sm text-muted-foreground transition-colors hover:text-foreground focus-visible:text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <MobileMenu />
      </div>
    </header>
  );
}

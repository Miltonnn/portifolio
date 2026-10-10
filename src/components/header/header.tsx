import Link from "next/link";
import { Brand } from "@/components/logo/brand";
import { MobileMenu } from "./mobile-menu";
import { NAV_LINKS } from "./nav-links";

export function Header() {
  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-border bg-background/30 backdrop-blur-lg">
      <div className="flex h-16 items-center justify-between px-6 lg:px-10">
        <Link
          href="/#inicio"
          aria-label="Milton Andrade, voltar ao início"
          className="rounded-sm text-foreground transition-opacity hover:opacity-80 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
        >
          <Brand />
        </Link>

        <nav aria-label="Navegação principal" className="hidden md:block">
          <ul className="flex items-center gap-8">
            {NAV_LINKS.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className="relative rounded-sm text-sm text-muted-foreground transition-colors after:absolute after:inset-x-0 after:-bottom-1 after:h-0.5 after:origin-left after:scale-x-0 after:rounded-full after:bg-linear-to-r after:from-violet-600 after:to-violet-400 after:transition-transform after:duration-300 after:ease-out hover:text-foreground hover:after:scale-x-100 focus-visible:text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:after:scale-x-100 motion-reduce:after:transition-none"
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

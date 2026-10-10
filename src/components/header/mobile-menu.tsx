"use client";

import { useRef, useState, type MouseEvent } from "react";
import { MenuIcon } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { NAV_LINKS, type NavLink } from "./nav-links";

export function MobileMenu() {
  const [isOpen, setIsOpen] = useState(false);
  const pendingHref = useRef<NavLink["href"] | null>(null);

  const handleLinkClick = (
    event: MouseEvent<HTMLAnchorElement>,
    href: NavLink["href"]
  ) => {
    event.preventDefault();
    pendingHref.current = href;
    setIsOpen(false);
  };

  const handleOpenChangeComplete = (open: boolean) => {
    if (open || !pendingHref.current) return;

    const href = pendingHref.current;
    const section = document.querySelector(href.slice(1));
    pendingHref.current = null;

    if (!section) {
      window.location.assign(href);
      return;
    }

    section.scrollIntoView({ behavior: "smooth" });
    window.history.pushState(null, "", href);
  };

  return (
    <Sheet
      open={isOpen}
      onOpenChange={setIsOpen}
      onOpenChangeComplete={handleOpenChangeComplete}
    >
      <SheetTrigger
        render={
          <Button
            variant="ghost"
            size="icon-lg"
            className="size-11 md:hidden"
            aria-label="Abrir menu"
          />
        }
      >
        <MenuIcon className="size-6" />
      </SheetTrigger>

      <SheetContent side="right" className="w-72">
        <SheetHeader>
          <SheetTitle>Menu</SheetTitle>
        </SheetHeader>

        <nav aria-label="Navegação mobile">
          <ul className="flex flex-col px-2">
            {NAV_LINKS.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  onClick={(event) => handleLinkClick(event, link.href)}
                  className="block rounded-md px-3 py-3 text-base text-muted-foreground transition-colors hover:bg-muted hover:text-foreground focus-visible:bg-muted focus-visible:text-foreground focus-visible:outline-none"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </SheetContent>
    </Sheet>
  );
}

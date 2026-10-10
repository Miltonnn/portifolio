import type { ComponentType, ReactNode } from "react";
import Link from "next/link";
import { SiInstagram, SiWhatsapp } from "@icons-pack/react-simple-icons";
import { MapPin } from "lucide-react";
import { Brand } from "@/components/logo/brand";
import { NAV_LINKS } from "@/components/header/nav-links";
import { Reveal } from "@/components/ui/reveal";
import { LOCATION, PHONE, WHATSAPP_HREF } from "@/lib/contact";
import { LinkedinIcon } from "./linkedin-icon";

type SocialLink = {
  label: string;
  href: string;
  icon: ComponentType<{ className?: string }>;
};

const SOCIAL_LINKS: SocialLink[] = [
  { label: "Instagram", href: "https://instagram.com", icon: SiInstagram },
  { label: "LinkedIn", href: "https://linkedin.com", icon: LinkedinIcon },
];

const LINK_CLASSES =
  "inline-flex items-center gap-2 rounded-sm text-muted-foreground transition-colors hover:text-violet-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring";

type FooterColumnProps = {
  title: string;
  delay: number;
  children: ReactNode;
};

function FooterColumn({ title, delay, children }: FooterColumnProps) {
  return (
    <Reveal delay={delay} className="flex flex-col gap-5">
      <h2 className="relative pb-2 text-lg font-semibold after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-8 after:rounded-full after:bg-linear-to-r after:from-violet-600 after:to-violet-400">
        {title}
      </h2>
      {children}
    </Reveal>
  );
}

export function Footer() {
  return (
    <footer id="contato" className="scroll-mt-20 border-t border-white/10">
      <div className="grid lg:grid-cols-[minmax(0,1fr)_minmax(0,3fr)]">
        <div className="border-b border-white/10 px-6 py-12 lg:border-r lg:border-b-0 lg:px-10 lg:py-16">
          <Reveal direction="left" className="flex flex-col items-start gap-5">
            <Link
              href="/#inicio"
              aria-label="Milton Andrade, voltar ao início"
              className="rounded-sm text-foreground transition-opacity hover:opacity-80 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
            >
              <Brand size="md" />
            </Link>

            <p className="max-w-xs text-muted-foreground">
              Front-end apaixonado por e-commerce, performance e boas
              experiências. Tem uma ideia ou oportunidade? Me chama.
            </p>
          </Reveal>
        </div>

        <div className="grid gap-10 px-6 py-12 sm:grid-cols-2 lg:grid-cols-4 lg:py-16 lg:pr-24 lg:pl-10">
          <FooterColumn title="Menu" delay={0.1}>
            <nav aria-label="Rodapé">
              <ul className="flex flex-col gap-3">
                {NAV_LINKS.map((link) => (
                  <li key={link.href}>
                    <Link href={link.href} className={LINK_CLASSES}>
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>
          </FooterColumn>

          <FooterColumn title="Contato" delay={0.15}>
            <a
              href={WHATSAPP_HREF}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`WhatsApp ${PHONE.label} (abre em uma nova aba)`}
              className={LINK_CLASSES}
            >
              <SiWhatsapp
                className="size-4 shrink-0 text-violet-400"
                aria-hidden="true"
              />
              {PHONE.label}
            </a>
          </FooterColumn>

          <FooterColumn title="Endereço" delay={0.2}>
            <address className="flex items-start gap-2 text-muted-foreground not-italic">
              <MapPin
                className="mt-1 size-4 shrink-0 text-violet-400"
                aria-hidden="true"
              />
              <span>
                {LOCATION.city}
                <br />
                {LOCATION.detail}
              </span>
            </address>
          </FooterColumn>

          <FooterColumn title="Redes" delay={0.25}>
            <ul className="flex flex-col gap-3">
              {SOCIAL_LINKS.map(({ label, href, icon: Icon }) => (
                <li key={label}>
                  <a
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`${label} (abre em uma nova aba)`}
                    className={LINK_CLASSES}
                  >
                    <Icon className="size-4 shrink-0 text-violet-400" />
                    {label}
                  </a>
                </li>
              ))}
            </ul>
          </FooterColumn>
        </div>
      </div>

      <div className="border-t border-white/10 px-6 pt-6 pb-28 md:pb-6 lg:px-10">
        <p className="text-sm text-muted-foreground">
          © 2026 Milton Andrade. Todos os direitos reservados.
        </p>
      </div>
    </footer>
  );
}

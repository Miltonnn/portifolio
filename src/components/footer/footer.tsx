import type { ComponentType } from "react";
import { SiInstagram } from "@icons-pack/react-simple-icons";
import { Phone } from "lucide-react";
import { Logo } from "@/components/logo/logo";
import { PHONE } from "@/lib/contact";
import { GRADIENT_BUTTON_CLASSES } from "@/lib/gradient-button";
import { cn } from "@/lib/utils";
import { LinkedinIcon } from "./linkedin-icon";
import { NewsletterForm } from "./newsletter-form";

type SocialLink = {
  label: string;
  href: string;
  icon: ComponentType<{ className?: string }>;
};

const SOCIAL_LINKS: SocialLink[] = [
  { label: "Instagram", href: "https://instagram.com", icon: SiInstagram },
  { label: "LinkedIn", href: "https://linkedin.com", icon: LinkedinIcon },
];

export function Footer() {
  return (
    <footer
      id="contato"
      className="scroll-mt-20 border-t border-white/10 pt-16 pb-28 md:pb-10"
    >
      <div className="mx-auto grid max-w-7xl gap-12 px-6 md:grid-cols-2">
        <div className="flex flex-col items-start gap-5">
          <a
            href="#inicio"
            aria-label="Milton Andrade, voltar ao início"
            className="rounded-sm text-foreground transition-opacity hover:opacity-80 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
          >
            <Logo className="h-10 w-auto" />
          </a>

          <p className="max-w-sm text-muted-foreground">
            Vamos conversar sobre o seu próximo projeto?
          </p>

          <a
            href={PHONE.href}
            className="inline-flex items-center gap-2 rounded-sm text-foreground transition-colors hover:text-violet-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
          >
            <Phone className="size-4 text-violet-400" aria-hidden="true" />
            {PHONE.label}
          </a>

          <ul className="flex gap-3">
            {SOCIAL_LINKS.map(({ label, href, icon: Icon }) => (
              <li key={label}>
                <a
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`${label} (abre em uma nova aba)`}
                  className={cn(GRADIENT_BUTTON_CLASSES, "size-10")}
                >
                  <Icon className="size-5" />
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div className="flex flex-col gap-4 md:items-end">
          <div className="w-full max-w-md">
            <h2 className="text-lg font-semibold">Newsletter</h2>
            <p className="mt-2 mb-4 text-sm text-muted-foreground">
              Receba novidades sobre projetos e conteúdos de desenvolvimento.
            </p>
            <NewsletterForm />
          </div>
        </div>
      </div>

      <div className="mx-auto mt-12 max-w-7xl px-6">
        <p className="border-t border-white/10 pt-6 text-sm text-muted-foreground">
          © 2026 Milton Andrade. Todos os direitos reservados.
        </p>
      </div>
    </footer>
  );
}

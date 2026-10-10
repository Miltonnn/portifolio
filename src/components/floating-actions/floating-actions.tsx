import { SiGithub, SiWhatsapp } from "@icons-pack/react-simple-icons";
import { FileText } from "lucide-react";
import { WHATSAPP_HREF } from "@/lib/contact";
import { GRADIENT_BUTTON_CLASSES } from "@/lib/gradient-button";
import { cn } from "@/lib/utils";
import { ScrollTopButton } from "./scroll-top-button";

const FLOATING_BUTTON_CLASSES = cn(
  GRADIENT_BUTTON_CLASSES,
  "size-11 rounded-full shadow-md shadow-black/30 hover:opacity-80",
);

const DARK_BUTTON_CLASSES = cn(
  FLOATING_BUTTON_CLASSES,
  "border border-white/10 bg-zinc-900 bg-none",
);

export function FloatingActions() {
  return (
    <div className="fixed right-4 bottom-4 z-40 flex flex-col gap-3 md:right-6 md:bottom-6">
      <a
        href={WHATSAPP_HREF}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Conversar no WhatsApp (abre em uma nova aba)"
        className={cn(
          DARK_BUTTON_CLASSES,
          "animate-whatsapp-glow motion-reduce:animate-none",
        )}
      >
        <SiWhatsapp className="size-5" color="#25D366" />
      </a>
      <a
        href="https://github.com/Miltonnn"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="GitHub (abre em uma nova aba)"
        className={DARK_BUTTON_CLASSES}
      >
        <SiGithub className="size-5" />
      </a>
      <a
        href="/assets/pdf/milton-developer.pdf"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Abrir currículo em PDF (abre em uma nova aba)"
        title="Abrir currículo"
        className={DARK_BUTTON_CLASSES}
      >
        <FileText className="size-5" aria-hidden="true" />
      </a>
      <ScrollTopButton className={FLOATING_BUTTON_CLASSES} />
    </div>
  );
}

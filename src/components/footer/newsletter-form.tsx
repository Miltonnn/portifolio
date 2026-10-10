"use client";

import type { FormEvent } from "react";
import { Send } from "lucide-react";
import { GRADIENT_BUTTON_CLASSES } from "@/lib/gradient-button";
import { cn } from "@/lib/utils";

export function NewsletterForm() {
  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
  };

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-3 sm:flex-row">
      <label htmlFor="newsletter-email" className="sr-only">
        Seu e-mail
      </label>
      <input
        id="newsletter-email"
        name="email"
        type="email"
        required
        autoComplete="email"
        placeholder="seu@email.com"
        className="h-11 w-full min-w-0 rounded-[4px] border border-white/15 bg-white/5 px-4 text-base text-foreground placeholder:text-muted-foreground focus-visible:border-violet-400 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-violet-400/40"
      />
      <button
        type="submit"
        className={cn(
          GRADIENT_BUTTON_CLASSES,
          "h-11 shrink-0 gap-2 px-5 text-sm font-medium"
        )}
      >
        Enviar
        <Send className="size-4" aria-hidden="true" />
      </button>
    </form>
  );
}

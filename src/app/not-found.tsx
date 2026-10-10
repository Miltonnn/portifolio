import Link from "next/link";
import { ArrowUpLeft } from "lucide-react";
import { buttonVariants } from "@/components/ui/button";
import { Reveal } from "@/components/ui/reveal";
import { HOVER_ARROW_CLASSES, HOVER_FILL_CLASSES } from "@/lib/hover-fill";
import { cn } from "@/lib/utils";

export default function NotFound() {
  return (
    <main className="relative isolate flex min-h-[80svh] flex-1 items-center justify-center px-6 pt-24 pb-16">
      <div
        aria-hidden="true"
        className="absolute top-1/2 left-1/2 -z-10 size-[28rem] -translate-x-1/2 -translate-y-1/2 rounded-full bg-radial from-violet-500/25 to-transparent to-70%"
      />

      <Reveal className="flex max-w-xl flex-col items-center gap-6 text-center">
        <p
          aria-hidden="true"
          className="bg-linear-to-br from-violet-600 to-violet-400 bg-clip-text text-[8rem] leading-none font-bold tracking-tighter text-transparent sm:text-[12rem]"
        >
          404
        </p>

        <h1 className="text-2xl font-bold tracking-tight sm:text-3xl">
          Página não encontrada
        </h1>

        <p className="text-lg text-pretty text-muted-foreground">
          Projeto ainda em desenvolvimento ou link não atualizado no momento.
        </p>

        <Link
          href="/"
          className={cn(
            buttonVariants({ variant: "outline", size: "lg" }),
            HOVER_FILL_CLASSES,
            "mt-2 h-12 gap-2 px-6 text-base"
          )}
        >
          <ArrowUpLeft
            aria-hidden="true"
            className={cn(
              HOVER_ARROW_CLASSES,
              "group-hover/button:-rotate-45 group-focus-visible/button:-rotate-45"
            )}
          />
          Voltar para a home
        </Link>
      </Reveal>
    </main>
  );
}

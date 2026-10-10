import Image from "next/image";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { Reveal } from "@/components/ui/reveal";
import { TypewriterTitle } from "./typewriter-title";

const STACKS = [
  "React.js",
  "Next.js",
  "TypeScript",
  "Node.js",
  "PostgreSQL",
  "GraphQL",
  "REST APIs",
  "VTEX IO",
  "FastStore",
  "Shopify",
] as const;

const HERO_BUTTON_CLASSES = "h-12 px-6 text-base";

export function Hero() {
  return (
    <section
      id="inicio"
      className="relative isolate flex min-h-[80svh] items-center pt-24 pb-16"
    >
      <div className="mx-auto grid w-full max-w-7xl items-center gap-12 px-6 md:grid-cols-2">
        <div className="flex flex-col items-start gap-6">
          <Reveal direction="left">
            <span className="rounded-full border border-violet-500/30 bg-violet-500/10 px-3 py-1 text-sm text-violet-300">
              Milton Andrade
            </span>
          </Reveal>

          <Reveal direction="left" delay={0.1}>
            <TypewriterTitle />
          </Reveal>

          <Reveal direction="left" delay={0.2}>
            <ul
              aria-label="Tecnologias"
              className="flex flex-wrap items-center gap-x-2 gap-y-1 text-sm text-zinc-300 sm:text-base"
            >
              {STACKS.map((stack) => (
                <li
                  key={stack}
                  className="flex items-center gap-2 not-first:before:text-violet-400 not-first:before:content-['·']"
                >
                  {stack}
                </li>
              ))}
            </ul>
          </Reveal>

          <Reveal direction="left" delay={0.3}>
            <p className="max-w-lg text-lg text-pretty text-muted-foreground">
              Desenvolvo experiências web rápidas, acessíveis e bem pensadas,
              unindo código limpo com atenção aos detalhes de design.
            </p>
          </Reveal>

          <Reveal delay={0.4} className="flex flex-wrap gap-4">
            <a
              href="#projetos"
              className={cn(
                buttonVariants({ size: "lg" }),
                HERO_BUTTON_CLASSES,
              )}
            >
              Ver projetos
            </a>
            <a
              href="#contato"
              className={cn(
                buttonVariants({ variant: "outline", size: "lg" }),
                HERO_BUTTON_CLASSES,
              )}
            >
              Entrar em contato
            </a>
          </Reveal>
        </div>

        <Reveal
          direction="right"
          delay={0.2}
          className="relative mx-auto w-full max-w-sm md:max-w-md"
        >
          <div
            aria-hidden="true"
            className="absolute inset-0 -z-10 scale-110 rounded-full bg-radial from-violet-500/30 to-transparent to-70%"
          />
          <div
            aria-hidden="true"
            className="absolute inset-0 -z-10 rounded-full border border-white/10 bg-linear-to-br from-zinc-800/80 to-zinc-950"
          />
          <Image
            src="/img-hero.png"
            alt="Foto de Milton Andrade"
            width={2508}
            height={2508}
            sizes="(min-width: 768px) 448px, 384px"
            preload
            className="h-auto w-full"
          />
        </Reveal>
      </div>
    </section>
  );
}

import Image from "next/image";
import { ArrowUpRight } from "lucide-react";
import { buttonVariants } from "@/components/ui/button";
import { HOVER_ARROW_CLASSES, HOVER_FILL_CLASSES } from "@/lib/hover-fill";
import { cn } from "@/lib/utils";
import { Reveal } from "@/components/ui/reveal";
import { TypewriterTitle } from "./typewriter-title";

const STACKS = [
  "React.js",
  "Next.js",
  "TypeScript",
  "Node.js",
  "PostgreSQL",
  "Prisma",
  "GraphQL",
  "REST APIs",
  "VTEX IO",
  "FastStore",
  "Shopify",
] as const;

const HERO_BUTTON_CLASSES = cn(HOVER_FILL_CLASSES, "h-12 gap-2 px-6 text-base");

export function Hero() {
  return (
    <section id="inicio" className="relative isolate flex min-h-[80svh] pt-24">
      <div className="mx-auto grid w-full max-w-7xl gap-12 px-6 md:grid-cols-2 md:gap-6">
        <div className="flex flex-col items-start gap-6 self-center md:pb-16">
          <Reveal direction="left">
            <span className="rounded-full border border-violet-500/30 bg-violet-500/10 px-3 py-1 text-sm text-violet-300">
              Performance, acessibilidade e boas experiências.
            </span>
          </Reveal>

          <Reveal direction="left" delay={0.1}>
            <TypewriterTitle />
          </Reveal>

          <Reveal direction="left" delay={0.2} className="overflow-hidden">
            <ul
              aria-label="Tecnologias"
              className="-ml-6 flex flex-wrap items-center gap-y-1 text-sm text-zinc-300 sm:text-base"
            >
              {STACKS.map((stack) => (
                <li
                  key={stack}
                  className="flex items-center before:w-6 before:text-center before:text-violet-400 before:content-['·']"
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
              <ArrowUpRight
                aria-hidden="true"
                className={HOVER_ARROW_CLASSES}
              />
            </a>
            <a
              href="#contato"
              className={cn(
                buttonVariants({ variant: "outline", size: "lg" }),
                HERO_BUTTON_CLASSES,
              )}
            >
              Entrar em contato
              <ArrowUpRight
                aria-hidden="true"
                className={HOVER_ARROW_CLASSES}
              />
            </a>
          </Reveal>
        </div>

        <Reveal
          direction="right"
          delay={0.2}
          className="relative mx-auto w-full max-w-md self-end md:max-w-none"
        >
          <div
            aria-hidden="true"
            className="absolute inset-x-0 top-1/4 bottom-0 -z-10 bg-radial from-violet-500/25 to-transparent to-70% blur-2xl"
          />
          <Image
            src="/img-hero.png"
            alt="Foto de Milton Andrade"
            width={2508}
            height={2508}
            sizes="(min-width: 1280px) 640px, (min-width: 768px) 50vw, 100vw"
            preload
            className="block h-auto w-full [mask-image:linear-gradient(to_bottom,black_65%,transparent)]"
          />
        </Reveal>
      </div>
    </section>
  );
}

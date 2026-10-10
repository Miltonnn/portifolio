import { GlowingEffect } from "@/components/ui/glowing-effect";
import { Reveal } from "@/components/ui/reveal";
import { cn } from "@/lib/utils";
import { VALUES, type ValueItem } from "./values-data";

function ValueCard({ item }: { item: ValueItem }) {
  const Icon = item.icon;

  return (
    <div className="relative h-full rounded-2xl border border-white/10 p-2 md:rounded-3xl md:p-3">
      <GlowingEffect
        spread={40}
        glow
        disabled={false}
        proximity={64}
        inactiveZone={0.01}
      />
      <div className="relative flex h-full flex-col justify-between gap-6 overflow-hidden rounded-xl bg-white/[0.03] p-6 shadow-[0px_0px_27px_0px_#2D2D2D]">
        <div className="w-fit rounded-lg border border-violet-500/30 bg-violet-500/10 p-2">
          <Icon className="size-4 text-violet-300" aria-hidden="true" />
        </div>
        <div className="flex flex-col gap-3">
          <h3 className="text-xl font-semibold tracking-tight text-balance text-foreground md:text-2xl">
            {item.title}
          </h3>
          <p className="text-sm text-pretty text-muted-foreground md:text-base">
            {item.description}
          </p>
        </div>
      </div>
    </div>
  );
}

export function Values() {
  return (
    <section
      id="sobre"
      aria-labelledby="sobre-title"
      className="scroll-mt-20 pt-24"
    >
      <div className="mx-auto max-w-7xl px-6">
        <Reveal className="flex flex-col items-center text-center">
          <span className="text-sm font-medium tracking-wider text-violet-400 uppercase">
            Sobre mim
          </span>
          <h2
            id="sobre-title"
            className="mt-4 text-3xl font-bold tracking-tight sm:text-4xl lg:text-5xl"
          >
            O que me move
          </h2>
        </Reveal>

        <ul className="mt-16 grid grid-cols-1 gap-4 md:grid-cols-12 md:grid-rows-3 xl:max-h-[34rem] xl:grid-rows-2">
          {VALUES.map((item, index) => (
            <li key={item.title} className={cn("min-h-[14rem]", item.area)}>
              <Reveal delay={index * 0.1} className="h-full">
                <ValueCard item={item} />
              </Reveal>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

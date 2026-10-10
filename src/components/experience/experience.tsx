import { Timeline, type TimelineEntry } from "@/components/ui/timeline";
import { EXPERIENCES, type ExperienceItem } from "./experience-data";

function ExperienceContent({ item }: { item: ExperienceItem }) {
  return (
    <article className="rounded-2xl border border-white/10 bg-white/[0.03] p-6 md:p-8">
      <p className="text-sm font-medium text-violet-400">{item.dates}</p>
      <h4 className="mt-2 text-xl font-semibold text-foreground md:text-2xl">
        {item.role}
      </h4>
      <p className="mt-1 text-muted-foreground">{item.place}</p>

      <ul className="mt-5 flex list-disc flex-col gap-2 pl-5 text-pretty text-zinc-300 marker:text-violet-400">
        {item.highlights.map((highlight) => (
          <li key={highlight}>{highlight}</li>
        ))}
      </ul>

      <ul aria-label="Tecnologias utilizadas" className="mt-6 flex flex-wrap gap-2">
        {item.tags.map((tag) => (
          <li
            key={tag}
            className="rounded-full border border-violet-500/30 bg-violet-500/10 px-3 py-1 text-xs text-violet-300"
          >
            {tag}
          </li>
        ))}
      </ul>
    </article>
  );
}

const TIMELINE_DATA: TimelineEntry[] = EXPERIENCES.map((item) => ({
  title: item.period,
  content: <ExperienceContent item={item} />,
}));

export function Experience() {
  return (
    <section
      id="experiencia"
      aria-labelledby="experiencia-title"
      className="scroll-mt-20 pt-24"
    >
      <div className="mx-auto flex max-w-7xl flex-col items-center px-6 text-center">
        <span className="text-sm font-medium tracking-wider text-violet-400 uppercase">
          Trajetória
        </span>
        <h2
          id="experiencia-title"
          className="mt-4 text-3xl font-bold tracking-tight sm:text-4xl lg:text-5xl"
        >
          Formação e experiência
        </h2>
      </div>

      <Timeline data={TIMELINE_DATA} />
    </section>
  );
}

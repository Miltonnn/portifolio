import { Reveal } from "@/components/ui/reveal";
import { SECTION_TITLE_UNDERLINE_CLASSES } from "@/lib/title-underline";
import { cn } from "@/lib/utils";
import { ProjectCarousel } from "./project-carousel";
import { PROJECT_CATEGORIES } from "./projects-data";

export function Projects() {
  return (
    <section
      id="projetos"
      aria-labelledby="projetos-title"
      className="scroll-mt-20 py-24"
    >
      <div className="mx-auto max-w-7xl px-6">
        <Reveal className="flex flex-col items-center text-center">
          <span className="text-sm font-medium tracking-wider text-violet-400 uppercase">
            Portfólio
          </span>
          <h2
            id="projetos-title"
            className={cn(
              SECTION_TITLE_UNDERLINE_CLASSES,
              "mt-4 mb-12 text-3xl font-bold tracking-tight sm:text-4xl lg:text-5xl"
            )}
          >
            Projetos Desenvolvidos
          </h2>
        </Reveal>

        <div className="mt-16 flex flex-col gap-20">
          {PROJECT_CATEGORIES.map((category, index) => (
            <Reveal
              key={category.id}
              direction={index % 2 === 0 ? "left" : "right"}
            >
              <ProjectCarousel category={category} />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

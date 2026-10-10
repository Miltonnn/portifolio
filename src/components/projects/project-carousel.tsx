"use client";

import { useCallback, useSyncExternalStore } from "react";
import { ArrowLeft, ArrowRight } from "lucide-react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  useCarousel,
} from "@/components/ui/carousel";
import { GRADIENT_BUTTON_CLASSES } from "@/lib/gradient-button";
import { TITLE_UNDERLINE_CLASSES } from "@/lib/title-underline";
import { cn } from "@/lib/utils";
import { ProjectCard } from "./project-card";
import type { ProjectCategory } from "./projects-data";

const ARROW_CLASSES = cn(GRADIENT_BUTTON_CLASSES, "size-9");

function CarouselArrows() {
  const { scrollPrev, scrollNext, canScrollPrev, canScrollNext } =
    useCarousel();

  return (
    <div className="flex shrink-0 gap-2">
      <button
        type="button"
        onClick={scrollPrev}
        disabled={!canScrollPrev}
        aria-label="Projetos anteriores"
        className={ARROW_CLASSES}
      >
        <ArrowLeft className="size-4" aria-hidden="true" />
      </button>
      <button
        type="button"
        onClick={scrollNext}
        disabled={!canScrollNext}
        aria-label="Próximos projetos"
        className={ARROW_CLASSES}
      >
        <ArrowRight className="size-4" aria-hidden="true" />
      </button>
    </div>
  );
}

function CarouselProgress() {
  const { api } = useCarousel();

  const subscribe = useCallback(
    (onStoreChange: () => void) => {
      if (!api) return () => {};
      api.on("select", onStoreChange).on("reInit", onStoreChange);
      return () => {
        api.off("select", onStoreChange).off("reInit", onStoreChange);
      };
    },
    [api]
  );

  const progress = useSyncExternalStore(
    subscribe,
    () => {
      if (!api) return 0;
      const totalSnaps = api.scrollSnapList().length;
      return totalSnaps > 0 ? (api.selectedScrollSnap() + 1) / totalSnaps : 0;
    },
    () => 0
  );

  return (
    <div
      aria-hidden="true"
      className="relative mt-8 h-1 w-full overflow-hidden rounded-full bg-white/10"
    >
      <div
        className="absolute inset-y-0 left-0 rounded-full bg-linear-to-r from-violet-600 to-violet-400 transition-[width] duration-500 ease-out"
        style={{ width: `${progress * 100}%` }}
      />
    </div>
  );
}

export function ProjectCarousel({ category }: { category: ProjectCategory }) {
  const titleId = `projetos-${category.id}-title`;

  return (
    <Carousel opts={{ align: "start" }} aria-labelledby={titleId}>
      <div className="mb-8 flex items-end justify-between gap-4">
        <div className="flex flex-col gap-2">
          <span className="text-sm font-medium tracking-wider text-violet-400 uppercase">
            {category.subtitle}
          </span>
          <h3
            id={titleId}
            className={cn(
              TITLE_UNDERLINE_CLASSES,
              "pb-3 text-2xl font-semibold tracking-tight sm:text-3xl after:left-0 after:h-0.5 after:w-10"
            )}
          >
            {category.title}
          </h3>
        </div>
        <CarouselArrows />
      </div>

      <CarouselContent>
        {category.projects.map((project) => (
          <CarouselItem
            key={project.title}
            className="basis-[85%] sm:basis-1/2 lg:basis-1/3"
          >
            <ProjectCard project={project} />
          </CarouselItem>
        ))}
      </CarouselContent>

      <CarouselProgress />
    </Carousel>
  );
}

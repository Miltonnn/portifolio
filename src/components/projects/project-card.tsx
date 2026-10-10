import Image from "next/image";
import { ArrowUpRight } from "lucide-react";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import type { Project } from "./projects-data";

export function ProjectCard({ project }: { project: Project }) {
  return (
    <article className="flex h-full flex-col overflow-hidden rounded-2xl border border-white/10 bg-white/[0.03]">
      <div className="relative aspect-video overflow-hidden bg-linear-to-br from-violet-600/40 via-zinc-900 to-sky-500/30">
        {project.image ? (
          <Image
            src={project.image}
            alt={`Página do projeto ${project.title}`}
            fill
            sizes="(min-width: 1024px) 400px, (min-width: 640px) 50vw, 85vw"
            className="object-cover"
          />
        ) : (
          <span
            aria-hidden="true"
            className="absolute inset-0 flex items-center justify-center text-5xl font-bold text-white/20"
          >
            {project.title.charAt(0)}
          </span>
        )}
      </div>

      <div className="flex flex-1 flex-col gap-3 p-6">
        <h4 className="text-lg font-semibold text-foreground">
          {project.title}
        </h4>
        <p className="text-sm text-pretty text-muted-foreground">
          {project.description}
        </p>

        <a
          href={project.href}
          target="_blank"
          rel="noopener noreferrer"
          className={cn(
            buttonVariants({ variant: "outline" }),
            "mt-auto h-10 self-start px-4"
          )}
        >
          Ver projeto
          <span className="sr-only">
            {project.title} (abre em uma nova aba)
          </span>
          <ArrowUpRight aria-hidden="true" />
        </a>
      </div>
    </article>
  );
}

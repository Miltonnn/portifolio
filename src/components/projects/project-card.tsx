import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { buttonVariants } from "@/components/ui/button";
import { HOVER_ARROW_CLASSES, HOVER_FILL_CLASSES } from "@/lib/hover-fill";
import { cn } from "@/lib/utils";
import type { Project } from "./projects-data";

const PROJECT_PENDING_HREF = "/404";

const PROJECT_LINK_CLASSES = cn(
  buttonVariants({ variant: "outline" }),
  HOVER_FILL_CLASSES,
  "mt-auto h-10 self-start px-4"
);

export function ProjectCard({ project }: { project: Project }) {
  return (
    <article className="group isolate flex h-full flex-col overflow-hidden rounded-2xl border border-white/10 bg-white/[0.03]">
      <div className="relative aspect-video overflow-hidden bg-linear-to-br from-violet-600/40 via-zinc-900 to-sky-500/30">
        {project.image ? (
          <Image
            src={project.image}
            alt={`Página do projeto ${project.title}`}
            fill
            sizes="(min-width: 1024px) 400px, (min-width: 640px) 50vw, 85vw"
            className="object-cover transition-transform duration-500 ease-out group-hover:scale-105 motion-reduce:transition-none"
          />
        ) : (
          <span
            aria-hidden="true"
            className="absolute inset-0 flex items-center justify-center text-5xl font-bold text-white/20 transition-transform duration-500 ease-out group-hover:scale-105 motion-reduce:transition-none"
          >
            {project.title.charAt(0)}
          </span>
        )}

        {project.stack && (
          <span className="absolute top-3 left-3 z-10 rounded-full border border-violet-500/30 bg-zinc-950/80 px-3 py-1 text-xs font-medium text-violet-300 shadow-md shadow-black/30">
            <span className="sr-only">Plataforma: </span>
            {project.stack}
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

        {project.href ? (
          <a
            href={project.href}
            target="_blank"
            rel="noopener noreferrer"
            className={PROJECT_LINK_CLASSES}
          >
            Ver projeto
            <span className="sr-only">
              {project.title} (abre em uma nova aba)
            </span>
            <ArrowUpRight aria-hidden="true" className={HOVER_ARROW_CLASSES} />
          </a>
        ) : (
          <Link href={PROJECT_PENDING_HREF} className={PROJECT_LINK_CLASSES}>
            Ver projeto
            <span className="sr-only">{project.title}</span>
            <ArrowUpRight aria-hidden="true" className={HOVER_ARROW_CLASSES} />
          </Link>
        )}
      </div>
    </article>
  );
}

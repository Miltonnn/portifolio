import { Experience } from "@/components/experience/experience";
import { Hero } from "@/components/hero/hero";
import { HeroLights } from "@/components/hero/hero-lights";
import { Projects } from "@/components/projects/projects";
import { Stacks } from "@/components/stacks/stacks";
import { Values } from "@/components/values/values";

export default function Home() {
  return (
    <main className="flex-1">
      <div className="relative isolate overflow-hidden">
        <HeroLights />
        <Hero />
        <Stacks />
      </div>
      <Values />
      <Experience />
      <Projects />
    </main>
  );
}

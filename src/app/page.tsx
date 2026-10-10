import { Experience } from "@/components/experience/experience";
import { Hero } from "@/components/hero/hero";
import { HeroLights } from "@/components/hero/hero-lights";
import { Projects } from "@/components/projects/projects";
import { SideLights } from "@/components/side-lights/side-lights";
import { Stacks } from "@/components/stacks/stacks";
import { Values } from "@/components/values/values";

export default function Home() {
  return (
    <main className="relative isolate flex-1">
      <SideLights />
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

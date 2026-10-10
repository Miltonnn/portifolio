import { Marquee } from "@/components/ui/marquee";
import { STACKS, type Stack } from "./stacks-data";

const half = Math.ceil(STACKS.length / 2);
const FIRST_ROW = STACKS.slice(0, half);
const SECOND_ROW = STACKS.slice(half);

function StackCard({ stack }: { stack: Stack }) {
  const Icon = stack.icon;

  return (
    <div className="flex items-center gap-3 rounded-xl border border-white/10 bg-white/5 px-5 py-3">
      <Icon className="size-6 shrink-0 opacity-50" color={stack.color} />
      <span className="text-sm font-medium whitespace-nowrap text-zinc-200 opacity-50">
        {stack.name}
      </span>
    </div>
  );
}

export function Stacks() {
  return (
    <section
      id="stacks"
      aria-label="Tecnologias"
      className="scroll-mt-0 pt-8 pb-20"
    >
      <ul className="sr-only">
        {STACKS.map((stack) => (
          <li key={stack.name}>{stack.name}</li>
        ))}
      </ul>

      <div
        aria-hidden="true"
        className="mt-0 flex flex-col gap-4 [mask-image:linear-gradient(to_right,transparent,black_15%,black_85%,transparent)]"
      >
        <Marquee
          pauseOnHover
          className="[--duration:40s] motion-reduce:*:animate-none"
        >
          {FIRST_ROW.map((stack) => (
            <StackCard key={stack.name} stack={stack} />
          ))}
        </Marquee>
        <Marquee
          reverse
          pauseOnHover
          className="[--duration:40s] motion-reduce:*:animate-none"
        >
          {SECOND_ROW.map((stack) => (
            <StackCard key={stack.name} stack={stack} />
          ))}
        </Marquee>
      </div>
    </section>
  );
}

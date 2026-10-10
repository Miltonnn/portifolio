import { cn } from "@/lib/utils";

const LIGHT_POSITIONS = [
  "top-[18%] -left-40 md:-left-64",
  "top-[34%] -right-40 md:-right-64",
  "top-[52%] -left-40 md:-left-64",
  "top-[70%] -right-40 md:-right-64",
  "top-[86%] -left-40 md:-left-64",
];

export function SideLights() {
  return (
    <div
      aria-hidden="true"
      className="pointer-events-none absolute inset-0 -z-10 overflow-hidden"
    >
      {LIGHT_POSITIONS.map((position) => (
        <div
          key={position}
          className={cn(
            "absolute size-[24rem] -translate-y-1/2 rounded-full bg-radial from-white/[0.12] to-transparent to-70% md:size-[40rem]",
            position
          )}
        />
      ))}
    </div>
  );
}

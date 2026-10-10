export function HeroLights() {
  return (
    <div
      aria-hidden="true"
      className="pointer-events-none absolute inset-0 -z-10 [mask-image:linear-gradient(to_bottom,black_70%,transparent)]"
    >
      <div className="absolute -top-64 -left-64 size-[50rem] animate-light-drift-violet rounded-full bg-radial from-violet-600/25 to-transparent to-70% will-change-transform motion-reduce:animate-none" />
      <div className="absolute top-[45svh] -right-64 size-[45rem] animate-light-drift-sky rounded-full bg-radial from-sky-500/15 to-transparent to-70% will-change-transform motion-reduce:animate-none" />
      <div className="absolute inset-x-0 top-0 h-px bg-linear-to-r from-transparent via-violet-500/40 to-transparent" />
    </div>
  );
}

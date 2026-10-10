import { cn } from "@/lib/utils";
import { Logo } from "./logo";

type BrandSize = "sm" | "md";

const SIZE_CLASSES: Record<BrandSize, { logo: string; name: string }> = {
  sm: { logo: "h-8", name: "translate-y-[3.5px] text-lg" },
  md: { logo: "h-10", name: "translate-y-[4.5px] text-xl" },
};

type BrandProps = {
  size?: BrandSize;
};

export function Brand({ size = "sm" }: BrandProps) {
  const sizes = SIZE_CLASSES[size];

  return (
    <span className="inline-flex items-center gap-3">
      <Logo className={cn("w-auto shrink-0", sizes.logo)} />
      <span
        className={cn(
          "bg-linear-to-r from-white to-violet-400 bg-clip-text font-semibold tracking-tight whitespace-nowrap text-transparent",
          sizes.name
        )}
      >
        Milton Andrade
      </span>
    </span>
  );
}

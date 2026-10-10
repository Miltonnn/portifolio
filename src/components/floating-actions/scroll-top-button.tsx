"use client";

import { useSyncExternalStore } from "react";
import { ArrowUp } from "lucide-react";
import { cn } from "@/lib/utils";

const subscribe = (onStoreChange: () => void) => {
  window.addEventListener("scroll", onStoreChange, { passive: true });
  window.addEventListener("resize", onStoreChange);

  return () => {
    window.removeEventListener("scroll", onStoreChange);
    window.removeEventListener("resize", onStoreChange);
  };
};

const getSnapshot = () => window.scrollY > window.innerHeight;

const getServerSnapshot = () => false;

export function ScrollTopButton({ className }: { className: string }) {
  const isVisible = useSyncExternalStore(
    subscribe,
    getSnapshot,
    getServerSnapshot
  );

  return (
    <a
      href="#inicio"
      aria-label="Voltar ao topo"
      title="Voltar ao topo"
      inert={!isVisible}
      className={cn(
        className,
        "transition-[opacity,translate] duration-300",
        !isVisible && "pointer-events-none translate-y-2 opacity-0"
      )}
    >
      <ArrowUp className="size-5" aria-hidden="true" />
    </a>
  );
}

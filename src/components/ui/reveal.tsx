"use client";

import type { ReactNode } from "react";
import { motion } from "motion/react";
import { cn } from "@/lib/utils";

type RevealDirection = "up" | "left" | "right";

type RevealProps = {
  children: ReactNode;
  className?: string;
  delay?: number;
  direction?: RevealDirection;
};

const OFFSETS: Record<RevealDirection, { x: number; y: number }> = {
  up: { x: 0, y: 24 },
  left: { x: -80, y: 0 },
  right: { x: 80, y: 0 },
};

export function Reveal({
  children,
  className,
  delay = 0,
  direction = "up",
}: RevealProps) {
  return (
    <motion.div
      initial={{ opacity: 0, ...OFFSETS[direction] }}
      whileInView={{ opacity: 1, x: 0, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1], delay }}
      className={cn(
        "motion-reduce:transform-none! motion-reduce:opacity-100!",
        className
      )}
    >
      {children}
    </motion.div>
  );
}

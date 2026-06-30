"use client";

import { motion, useReducedMotion } from "motion/react";
import type { ReactNode } from "react";

export function AnimatedSection({ children, className }: { children: ReactNode; className?: string }) {
  const reduceMotion = useReducedMotion();

  return (
    <motion.section
      className={className}
      initial={reduceMotion ? false : { opacity: 0, y: 34, scale: 0.985 }}
      whileInView={reduceMotion ? undefined : { opacity: 1, y: 0, scale: 1 }}
      transition={{ duration: 0.62, ease: [0.22, 1, 0.36, 1] }}
      viewport={{ once: true, margin: "-80px" }}
    >
      {children}
    </motion.section>
  );
}

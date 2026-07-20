"use client";

import { motion, useReducedMotion } from "framer-motion";
import type { ReactNode } from "react";

interface FadeInProps {
  children: ReactNode;
  delay?: number;
  direction?: "up" | "none";
  className?: string;
}

/** Wraps content in a subtle fade-and-rise reveal, triggered once when it
 *  scrolls into view. Falls back to a plain fade (no movement) when the
 *  user has requested reduced motion. */
export function FadeIn({ children, delay = 0, direction = "up", className }: FadeInProps) {
  const shouldReduceMotion = useReducedMotion();
  const rise = shouldReduceMotion ? 0 : direction === "up" ? 20 : 0;

  return (
    <motion.div
      initial={{ opacity: 0, y: rise }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: shouldReduceMotion ? 0.2 : 0.6, delay, ease: [0.22, 1, 0.36, 1] }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

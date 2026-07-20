"use client";

import { useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, useScroll, useTransform, useReducedMotion } from "framer-motion";
import { ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";

export function Hero() {
  const ref = useRef<HTMLElement>(null);
  const shouldReduceMotion = useReducedMotion();
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });
  const y = useTransform(scrollYProgress, [0, 1], ["0%", shouldReduceMotion ? "0%" : "22%"]);
  const contentOpacity = useTransform(scrollYProgress, [0, 0.6], [1, 0]);

  return (
    <section ref={ref} className="relative h-screen min-h-[640px] w-full overflow-hidden">
      <motion.div style={{ y }} className="absolute inset-0 h-[125%] w-full">
        {/* Replace /public/images/hero.jpg with a real, high-resolution
            photograph of the Himalayas (2400px+ wide, landscape). */}
        <Image
          src="/images/hero.jpg"
          alt="Sweeping view of snow-capped Himalayan peaks above the Gori Valley, Kumaon"
          fill
          priority
          sizes="100vw"
          className="object-cover"
        />
      </motion.div>
      <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/25 to-black/45" />

      <motion.div
        style={{ opacity: contentOpacity }}
        className="relative z-10 flex h-full flex-col items-center justify-center px-6 text-center"
      >
        <motion.p
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mb-6 font-mono text-xs uppercase tracking-widest text-cream/80 sm:text-sm"
        >
          29.6°N 80.2°E · Kumaon, India
        </motion.p>
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.35 }}
          className="max-w-4xl font-serif text-5xl leading-[1.1] text-cream sm:text-6xl md:text-7xl lg:text-8xl"
        >
          Discover the Himalayas.
          <br />
          Carry the Mountains Home.
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.5 }}
          className="mt-8 max-w-xl text-base leading-relaxed text-cream/85 md:text-lg"
        >
          Explore hidden villages, mountain trails, local traditions and thoughtfully curated
          products from the heart of Kumaon.
        </motion.p>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.65 }}
          className="mt-10 flex flex-col gap-4 sm:flex-row"
        >
          <Button asChild variant="gold" size="lg">
            <Link href="#waitlist">Join the Waitlist</Link>
          </Button>
          <Button
            asChild
            variant="outline"
            size="lg"
            className="border-cream/60 text-cream hover:bg-cream/10"
          >
            <Link href="#discover">Explore More</Link>
          </Button>
        </motion.div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1.2 }}
        className="absolute bottom-8 left-1/2 z-10 -translate-x-1/2"
      >
        <motion.div
          animate={shouldReduceMotion ? undefined : { y: [0, 8, 0] }}
          transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }}
        >
          <ChevronDown className="h-6 w-6 text-cream/70" aria-hidden="true" />
        </motion.div>
      </motion.div>
    </section>
  );
}

import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import type { Experience } from "@/types";

export function ExperienceCard({ experience }: { experience: Experience }) {
  return (
    <Link href="/experiences" className="group block">
      <div className="relative aspect-[4/3] overflow-hidden rounded-sm bg-stone/10">
        <Image
          src={experience.image}
          alt={experience.title}
          fill
          sizes="(min-width: 1024px) 50vw, 100vw"
          className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
        />
      </div>
      <h3 className="mt-5 font-serif text-2xl text-forest-dark">{experience.title}</h3>
      <p className="mt-2 max-w-md text-sm leading-relaxed text-slate">{experience.story}</p>
      <span className="mt-3 inline-flex items-center gap-1.5 text-sm font-medium text-forest transition-colors group-hover:text-forest-dark">
        Learn More
        <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-1" />
      </span>
    </Link>
  );
}

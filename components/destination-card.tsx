import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import type { Destination } from "@/types";

export function DestinationCard({ destination }: { destination: Destination }) {
  return (
    <Link href="/explore" className="group block">
      <div className="relative aspect-[4/5] overflow-hidden rounded-sm bg-stone/10">
        <Image
          src={destination.image}
          alt={`${destination.name}, ${destination.region}`}
          fill
          sizes="(min-width: 1024px) 25vw, (min-width: 640px) 50vw, 100vw"
          className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/65 via-black/5 to-transparent" />
        <div className="absolute inset-x-0 bottom-0 p-5 text-cream">
          <p className="font-mono text-[11px] uppercase tracking-widest text-cream/75">
            {destination.region} · {destination.elevation}
          </p>
          <h3 className="mt-1 font-serif text-2xl">{destination.name}</h3>
        </div>
      </div>
      <p className="mt-4 text-sm leading-relaxed text-slate">{destination.description}</p>
      <span className="mt-3 inline-flex items-center gap-1.5 text-sm font-medium text-forest transition-colors group-hover:text-forest-dark">
        Read More
        <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-1" />
      </span>
    </Link>
  );
}

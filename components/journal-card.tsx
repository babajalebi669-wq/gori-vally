import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import type { JournalArticle } from "@/types";

export function JournalCard({ article }: { article: JournalArticle }) {
  return (
    <Link href="/journal" className="group block">
      <div className="relative aspect-[16/10] overflow-hidden rounded-sm bg-stone/10">
        <Image
          src={article.image}
          alt={article.title}
          fill
          sizes="(min-width: 1024px) 25vw, (min-width: 640px) 50vw, 100vw"
          className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
        />
      </div>
      <h3 className="mt-4 font-serif text-xl text-forest-dark">{article.title}</h3>
      <p className="mt-2 text-sm leading-relaxed text-slate line-clamp-2">{article.excerpt}</p>
      <span className="mt-3 inline-flex items-center gap-1.5 text-sm font-medium text-forest transition-colors group-hover:text-forest-dark">
        Read Story
        <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-1" />
      </span>
    </Link>
  );
}

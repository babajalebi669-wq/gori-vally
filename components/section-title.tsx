import { cn } from "@/lib/utils";

interface SectionTitleProps {
  eyebrow?: string;
  title: string;
  description?: string;
  align?: "left" | "center";
  className?: string;
}

export function SectionTitle({
  eyebrow,
  title,
  description,
  align = "left",
  className,
}: SectionTitleProps) {
  return (
    <div className={cn("max-w-2xl", align === "center" && "mx-auto text-center", className)}>
      {eyebrow && (
        <p className="mb-3 font-mono text-xs uppercase tracking-widest text-gold-dark">
          {eyebrow}
        </p>
      )}
      <h2 className="font-serif text-4xl leading-[1.1] text-forest-dark md:text-5xl">{title}</h2>
      {description && (
        <p className="mt-4 text-base leading-relaxed text-slate md:text-lg">{description}</p>
      )}
    </div>
  );
}

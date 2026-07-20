import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

interface CTAProps {
  eyebrow?: string;
  headline: string;
  description?: string;
  align?: "left" | "center";
  tone?: "light" | "dark";
  children?: ReactNode;
}

/** Headline + copy + action, with no image/overlay of its own — pair with
 *  ImageBanner for a full-bleed moment, or drop directly onto the page. */
export function CTA({
  eyebrow,
  headline,
  description,
  align = "center",
  tone = "light",
  children,
}: CTAProps) {
  return (
    <div
      className={cn(
        "mx-auto flex max-w-2xl flex-col gap-6",
        align === "center" ? "items-center text-center" : "items-start text-left"
      )}
    >
      {eyebrow && (
        <span
          className={cn(
            "font-mono text-xs uppercase tracking-widest",
            tone === "light" ? "text-gold-light" : "text-gold-dark"
          )}
        >
          {eyebrow}
        </span>
      )}
      <h2
        className={cn(
          "font-serif text-4xl leading-[1.1] md:text-5xl lg:text-6xl",
          tone === "light" ? "text-cream" : "text-forest-dark"
        )}
      >
        {headline}
      </h2>
      {description && (
        <p
          className={cn(
            "max-w-xl text-base leading-relaxed md:text-lg",
            tone === "light" ? "text-cream/85" : "text-slate"
          )}
        >
          {description}
        </p>
      )}
      {children && <div className="mt-2 w-full">{children}</div>}
    </div>
  );
}

import Image from "next/image";
import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

interface ImageBannerProps {
  image: string;
  imageAlt: string;
  children: ReactNode;
  minHeight?: string;
  overlay?: "dark" | "none";
  className?: string;
  id?: string;
}

export function ImageBanner({
  image,
  imageAlt,
  children,
  minHeight = "min-h-[80vh]",
  overlay = "dark",
  className,
  id,
}: ImageBannerProps) {
  return (
    <section
      id={id}
      className={cn(
        "relative flex w-full scroll-mt-20 items-center justify-center overflow-hidden",
        minHeight,
        className
      )}
    >
      <Image src={image} alt={imageAlt} fill sizes="100vw" className="object-cover" />
      {overlay === "dark" && (
        <div className="absolute inset-0 bg-gradient-to-b from-black/55 via-black/35 to-black/60" />
      )}
      <div className="relative z-10 w-full px-6 py-24 lg:px-10">{children}</div>
    </section>
  );
}

"use client";

import { useState } from "react";
import Image from "next/image";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { WaitlistForm } from "@/components/waitlist-form";
import type { Product } from "@/types";

export function ProductCard({ product }: { product: Product }) {
  const [showForm, setShowForm] = useState(false);

  return (
    <div>
      <div className="relative aspect-square overflow-hidden rounded-sm bg-stone/10">
        <Image
          src={product.image}
          alt={product.name}
          fill
          sizes="(min-width: 1024px) 25vw, (min-width: 640px) 50vw, 100vw"
          className="object-cover transition-transform duration-700 ease-out hover:scale-105"
        />
        {product.comingSoon && (
          <div className="absolute left-3 top-3">
            <Badge>Coming Soon</Badge>
          </div>
        )}
      </div>
      <h3 className="mt-5 font-serif text-xl text-forest-dark">{product.name}</h3>
      <p className="mt-2 text-sm leading-relaxed text-slate">{product.story}</p>
      <div className="mt-4">
        {showForm ? (
          <WaitlistForm source={`product-${product.slug}`} variant="compact" />
        ) : (
          <Button
            variant="outline"
            size="sm"
            className="border-forest text-forest hover:bg-forest hover:text-cream"
            onClick={() => setShowForm(true)}
          >
            Notify Me
          </Button>
        )}
      </div>
    </div>
  );
}

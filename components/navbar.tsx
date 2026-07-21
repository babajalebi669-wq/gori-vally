"use client";

import Link from "next/link";
import { useState } from "react";
import { Menu } from "lucide-react";
import { cn } from "@/lib/utils";
import { navLinks } from "@/lib/data/nav";
import { useScrolled } from "@/hooks/use-scroll";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger, SheetClose, SheetTitle } from "@/components/ui/sheet";

export function Navbar() {
  const scrolled = useScrolled(40);
  const [open, setOpen] = useState(false);

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-all duration-500",
        scrolled
          ? "border-b border-stone/15 bg-cream/95 shadow-sm backdrop-blur-md"
          : "bg-transparent"
      )}
    >
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-6 lg:px-10">
        <Link
          href="/"
          className={cn(
            "font-serif text-xl tracking-wide transition-colors",
            scrolled ? "text-forest-dark" : "text-cream"
          )}
        >
          Gori Valley
        </Link>

        <nav className="hidden items-center gap-9 lg:flex" aria-label="Primary">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={cn(
                "text-sm tracking-wide transition-colors",
                scrolled ? "text-slate hover:text-forest-dark" : "text-cream/90 hover:text-cream"
              )}
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="hidden lg:block">
          <Button asChild variant="gold" size="sm">
            <Link href="#waitlist">Join Waitlist</Link>
          </Button>
        </div>

        <Sheet open={open} onOpenChange={setOpen}>
          <SheetTrigger asChild>
            <button
              className={cn(
                "rounded-full p-2 transition-colors lg:hidden",
                scrolled ? "text-forest-dark hover:bg-stone/10" : "text-cream hover:bg-cream/10"
              )}
              aria-label="Open menu"
            >
              <Menu className="h-6 w-6" />
            </button>
          </SheetTrigger>
          <SheetContent>
            <SheetTitle className="sr-only">Navigation Menu</SheetTitle>
            <span className="font-serif text-lg text-forest-dark">Gori Valley</span>
            <nav className="flex flex-col gap-1" aria-label="Mobile">
              {navLinks.map((link) => (
                <SheetClose asChild key={link.href}>
                  <Link
                    href={link.href}
                    className="rounded-md px-3 py-3 text-base text-forest-dark transition-colors hover:bg-stone/10"
                  >
                    {link.label}
                  </Link>
                </SheetClose>
              ))}
            </nav>
            <div className="mt-auto pt-6">
              <SheetClose asChild>
                <Button asChild variant="gold" className="w-full">
                  <Link href="#waitlist">Join Waitlist</Link>
                </Button>
              </SheetClose>
            </div>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  );
}

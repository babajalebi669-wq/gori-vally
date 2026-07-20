"use client";

import { useEffect, useState } from "react";

/** True once the page has scrolled past `threshold` pixels. Used to switch
 *  the Navbar from transparent to a blurred solid surface. */
export function useScrolled(threshold = 40) {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > threshold);
    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [threshold]);

  return scrolled;
}

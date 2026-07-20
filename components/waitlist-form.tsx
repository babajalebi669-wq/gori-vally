"use client";

import { useState, type FormEvent } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Check } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { cn, isValidEmail } from "@/lib/utils";
import type { WaitlistApiResponse } from "@/types";

interface WaitlistFormProps {
  /** Where this signup came from — stored on the row so segmentation is
   *  possible later without a schema change, e.g. "hero", "waitlist-section",
   *  "product-thulma-blanket", "page-explore". */
  source: string;
  variant?: "full" | "compact";
  className?: string;
}

type Status = "idle" | "success" | "duplicate" | "error";

export function WaitlistForm({ source, variant = "full", className }: WaitlistFormProps) {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<Status>("idle");
  const [errorMessage, setErrorMessage] = useState("");
  const isCompact = variant === "compact";
  const isDone = status === "success" || status === "duplicate";

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const trimmed = email.trim();

    if (!isValidEmail(trimmed)) {
      setStatus("error");
      setErrorMessage("Enter a valid email address.");
      return;
    }

    // Optimistic UI: commit to the success state immediately, then confirm
    // with the server in the background. Only a genuine failure rolls back.
    setErrorMessage("");
    setStatus("success");

    try {
      const res = await fetch("/api/waitlist", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email: trimmed, source }),
      });
      const data: WaitlistApiResponse = await res.json();

      if (!res.ok) {
        setStatus("error");
        setErrorMessage(data.error ?? "We couldn't save that — try again in a moment.");
        return;
      }

      if (data.alreadyExists) {
        setStatus("duplicate");
      }
    } catch {
      setStatus("error");
      setErrorMessage("We couldn't reach the server — check your connection and try again.");
    }
  }

  return (
    <div className={cn("w-full", isCompact ? "max-w-xs" : "max-w-md", className)}>
      <AnimatePresence mode="wait">
        {isDone ? (
          <motion.div
            key="done"
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            className={cn(
              "flex items-center gap-3 rounded-md border border-gold/30 bg-cream px-4 py-3 text-forest-dark shadow-sm",
              isCompact ? "text-sm" : "text-base"
            )}
          >
            <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-gold">
              <Check className="h-3.5 w-3.5 text-forest-dark" />
            </span>
            <span>
              {status === "duplicate"
                ? "You're already on the list."
                : "You're on the list — we'll be in touch."}
            </span>
          </motion.div>
        ) : (
          <motion.form
            key="form"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            onSubmit={handleSubmit}
            className={cn("flex gap-3", isCompact ? "flex-col" : "flex-col sm:flex-row")}
            noValidate
          >
            <div className="flex-1">
              <Label htmlFor={`email-${source}`} className="sr-only">
                Email address
              </Label>
              <Input
                id={`email-${source}`}
                type="email"
                autoComplete="email"
                required
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                aria-describedby={status === "error" ? `error-${source}` : undefined}
                aria-invalid={status === "error"}
                className={isCompact ? "h-10 text-sm" : "h-12"}
              />
            </div>
            <Button type="submit" variant="gold" size={isCompact ? "sm" : "lg"} className="shrink-0">
              {isCompact ? "Notify Me" : "Join Waitlist"}
            </Button>
          </motion.form>
        )}
      </AnimatePresence>
      <div aria-live="polite">
        {status === "error" && (
          <p
            id={`error-${source}`}
            role="alert"
            className="mt-2 rounded-md bg-red-50 px-3 py-2 text-sm text-red-700"
          >
            {errorMessage}
          </p>
        )}
      </div>
    </div>
  );
}

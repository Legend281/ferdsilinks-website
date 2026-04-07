import { cn } from "@/lib/utils";
import React from "react";

interface SectionProps extends React.HTMLAttributes<HTMLElement> {
  variant?: "base" | "low" | "high" | "highest";
  children: React.ReactNode;
}

export function Section({ variant = "base", className, children, ...props }: SectionProps) {
  const variants = {
    base: "bg-brand-surface",
    low: "bg-brand-surface-container-low",
    high: "bg-brand-surface-container-high",
    highest: "bg-brand-surface-container-highest",
  };

  // Follows the "No-Line" rule by relying purely on surface shifts,
  // and enforcing massive amounts of whitespace (py-20 / py-24).
  return (
    <section 
      className={cn("w-full py-20 md:py-24", variants[variant], className)}
      {...props}
    >
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        {children}
      </div>
    </section>
  );
}

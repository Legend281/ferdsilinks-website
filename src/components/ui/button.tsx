import * as React from "react"
import { cn } from "@/lib/utils"

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "ghost" | "glass";
  size?: "default" | "sm" | "lg" | "icon";
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = "primary", size = "default", ...props }, ref) => {
    
    // Ferdsilinks | The Digital Architect button variants
    const baseStyles = "inline-flex items-center justify-center whitespace-nowrap rounded font-body font-medium transition-all duration-200 ease-[cubic-bezier(0.22,1,0.36,1)] outline-none focus-visible:ring-2 focus-visible:ring-brand-secondary focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50";
    
    const variants = {
      primary: "bg-brand-tertiary-container text-white rounded-md hover:-translate-y-0.5 hover:shadow-[0px_8px_16px_rgba(207,112,0,0.15)]",
      secondary: "bg-transparent text-brand-on-surface border border-brand-outline-variant hover:bg-brand-surface-container-high",
      ghost: "bg-transparent text-brand-secondary hover:bg-brand-surface-container-low",
      glass: "bg-brand-surface/20 backdrop-blur-md text-brand-on-surface hover:bg-brand-surface/40",
    };

    const sizes = {
      default: "h-10 px-4 py-2",
      sm: "h-9 rounded-md px-3",
      lg: "h-11 rounded-md px-8 text-lg",
      icon: "h-10 w-10",
    };

    return (
      <button
        ref={ref}
        className={cn(baseStyles, variants[variant], sizes[size], className)}
        {...props}
      />
    )
  }
)
Button.displayName = "Button"

export { Button }

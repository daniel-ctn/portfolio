"use client";

import { cn } from "@/lib/utils";
import { motion, HTMLMotionProps } from "framer-motion";
import { forwardRef } from "react";

interface CardProps extends HTMLMotionProps<"div"> {
  variant?: "default" | "gradient" | "glass";
}

const Card = forwardRef<HTMLDivElement, CardProps>(
  ({ className, variant = "default", children, ...props }, ref) => {
    const variants = {
      default: "glass-card",
      gradient: "gradient-border backdrop-blur-xl",
      glass: "glass-card hover:bg-white/[0.05]",
    };

    return (
      <motion.div
        ref={ref}
        className={cn(
          "p-6 transition-all duration-300",
          variants[variant],
          className
        )}
        whileHover={{ y: -5 }}
        {...props}
      >
        {children}
      </motion.div>
    );
  }
);

Card.displayName = "Card";

export { Card };

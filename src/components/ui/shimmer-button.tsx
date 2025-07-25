"use client";

import { cn } from "@/lib/utils";
import { motion } from "motion/react";
import React from "react";

interface ShimmerButtonProps {
  shimmerColor?: string;
  shimmerSize?: string;
  borderRadius?: string;
  shimmerDuration?: string;
  background?: string;
  className?: string;
  children?: React.ReactNode;
  onClick?: () => void;
}

const ShimmerButton = React.forwardRef<HTMLButtonElement, ShimmerButtonProps>(
  (
    {
      shimmerColor = "#ffffff",
      shimmerSize = "0.05em",
      shimmerDuration = "3s",
      borderRadius = "100px",
      background = "radial-gradient(ellipse 80% 80% at 50% 120%, rgba(120, 119, 198, 0.3), transparent)",
      className,
      children,
      onClick,
    },
    ref,
  ) => {
    return (
      <motion.button
        className={cn(
          "group relative z-0 flex cursor-pointer items-center justify-center overflow-hidden whitespace-nowrap border border-white/10 px-6 py-3 text-white [background:var(--bg)] [border-radius:var(--border-radius)]",
          className,
        )}
        ref={ref}
        style={
          {
            "--spread": "90deg",
            "--shimmer-color": shimmerColor,
            "--radius": shimmerSize,
            "--speed": shimmerDuration,
            "--cut": "0.1em",
            "--bg": background,
            "--border-radius": borderRadius,
          } as React.CSSProperties
        }
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        onClick={onClick}
      >
        <div
          className={cn(
            "-z-30 blur-[2px]",
            "absolute inset-0 overflow-visible opacity-75 [background-image:conic-gradient(from_calc(270deg-(var(--spread)*0.5)),transparent_0,var(--shimmer-color)_var(--spread),transparent_var(--spread))] [background-size:calc(100%-var(--radius))_calc(100%-var(--radius)),calc(100%-var(--radius))_calc(100%-var(--radius))] [background-position:50%_50%,50%_50%] [background-repeat:no-repeat]",
          )}
          style={{
            animation: `shimmer var(--speed) ease-in-out infinite`,
          }}
        />
        <div
          className={cn(
            "z-10 flex items-center justify-center gap-2 whitespace-nowrap rounded-[100px] px-3 py-1.5 text-sm font-medium text-white backdrop-blur-3xl",
          )}
        >
          {children}
        </div>

        <style jsx>{`
          @keyframes shimmer {
            0% {
              transform: rotate(0deg);
            }
            100% {
              transform: rotate(360deg);
            }
          }
        `}</style>
      </motion.button>
    );
  },
);

ShimmerButton.displayName = "ShimmerButton";

export { ShimmerButton };

"use client";

import { cn } from "@/lib/utils";
import { motion } from "motion/react";
import React from "react";

interface AnimatedGradientTextProps {
  children: React.ReactNode;
  className?: string;
  colors?: string[];
  animationSpeed?: number;
  showBorder?: boolean;
}

const AnimatedGradientText: React.FC<AnimatedGradientTextProps> = ({
  children,
  className,
  colors = ["#ffaa40", "#9c40ff", "#ffaa40"],
  animationSpeed = 8,
  showBorder = false,
}) => {
  const gradientStyle = {
    background: `linear-gradient(-45deg, ${colors.join(", ")})`,
    backgroundSize: "400% 400%",
    WebkitBackgroundClip: "text",
    backgroundClip: "text",
    WebkitTextFillColor: "transparent",
    animation: `gradientShift ${animationSpeed}s ease infinite`,
  };

  const borderStyle = showBorder
    ? {
        background: `linear-gradient(-45deg, ${colors.join(", ")})`,
        backgroundSize: "400% 400%",
        animation: `gradientShift ${animationSpeed}s ease infinite`,
      }
    : {};

  return (
    <>
      <style jsx>{`
        @keyframes gradientShift {
          0% {
            background-position: 0% 50%;
          }
          50% {
            background-position: 100% 50%;
          }
          100% {
            background-position: 0% 50%;
          }
        }
      `}</style>
      {showBorder ? (
        <motion.div
          className={cn("relative inline-block p-[1px] rounded-lg", className)}
          style={borderStyle}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <div className="bg-black rounded-lg px-4 py-2">
            <span style={gradientStyle}>{children}</span>
          </div>
        </motion.div>
      ) : (
        <motion.span
          className={cn("font-bold", className)}
          style={gradientStyle}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          {children}
        </motion.span>
      )}
    </>
  );
};

export { AnimatedGradientText };

"use client";

import { cn } from "@/lib/utils";
import { motion } from "motion/react";
import React, { useMemo } from "react";

interface NeonGradientCardProps {
  children: React.ReactNode;
  className?: string;
  neonColors?: {
    firstColor: string;
    secondColor: string;
  };
  borderSize?: number;
  borderRadius?: number;
  animated?: boolean;
}

const NeonGradientCard: React.FC<NeonGradientCardProps> = ({
  children,
  className,
  neonColors = {
    firstColor: "#ff00aa",
    secondColor: "#00FFF1",
  },
  borderSize = 2,
  borderRadius = 20,
  animated = true,
}) => {
  const gradientStyle = useMemo(() => {
    return {
      background: `conic-gradient(from 180deg at 50% 50%, ${neonColors.firstColor} 0deg, ${neonColors.secondColor} 180deg, ${neonColors.firstColor} 360deg)`,
      padding: `${borderSize}px`,
      borderRadius: `${borderRadius}px`,
    };
  }, [neonColors, borderSize, borderRadius]);

  const cardStyle = useMemo(() => {
    return {
      borderRadius: `${borderRadius - borderSize}px`,
    };
  }, [borderRadius, borderSize]);

  return (
    <motion.div
      className={cn("relative", className)}
      style={gradientStyle}
      animate={
        animated
          ? {
              rotate: [0, 360],
            }
          : {}
      }
      transition={
        animated
          ? {
              duration: 3,
              repeat: Infinity,
              ease: "linear",
            }
          : {}
      }
    >
      <div
        className="relative bg-black dark:bg-gray-900 p-6 h-full w-full"
        style={cardStyle}
      >
        {children}
      </div>
    </motion.div>
  );
};

export { NeonGradientCard };

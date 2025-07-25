"use client";

import { cn } from "@/lib/utils";
import { AnimatePresence, motion } from "motion/react";
import React, {
  createContext,
  ReactNode,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useRef,
  useState,
} from "react";

interface ParticleProps {
  id: string;
  x: number;
  y: number;
  angle: number;
  speed: number;
  size: number;
  color: string;
  opacity: number;
  life: number;
  decay: number;
}

interface ParticlesConfig {
  count?: number;
  speed?: number;
  size?: { min: number; max: number };
  colors?: string[];
  life?: { min: number; max: number };
  angle?: { min: number; max: number };
  vx?: { min: number; max: number };
  vy?: { min: number; max: number };
  ease?: (t: number) => number;
  refresh?: boolean;
}

interface ParticlesContextType {
  particles: ParticleProps[];
  onMouseMove: (x: number, y: number) => void;
  config: Required<ParticlesConfig>;
}

const ParticlesContext = createContext<ParticlesContextType | null>(null);

const useParticles = () => {
  const context = useContext(ParticlesContext);
  if (!context) {
    throw new Error("useParticles must be used within a ParticlesProvider");
  }
  return context;
};

const defaultConfig: Required<ParticlesConfig> = {
  count: 50,
  speed: 1,
  size: { min: 1, max: 3 },
  colors: ["#ffffff", "#3b82f6", "#8b5cf6", "#ef4444", "#10b981"],
  life: { min: 1, max: 3 },
  angle: { min: 0, max: 360 },
  vx: { min: -2, max: 2 },
  vy: { min: -2, max: 2 },
  ease: (t: number) => t,
  refresh: true,
};

const Particle = ({ particle }: { particle: ParticleProps }) => {
  return (
    <motion.div
      className="absolute pointer-events-none"
      style={{
        left: particle.x,
        top: particle.y,
        width: particle.size,
        height: particle.size,
        backgroundColor: particle.color,
        borderRadius: "50%",
        opacity: particle.opacity,
      }}
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: particle.opacity }}
      exit={{ scale: 0, opacity: 0 }}
      transition={{ duration: 0.3 }}
    />
  );
};

const ParticlesProvider = ({
  children,
  config = {},
}: {
  children: ReactNode;
  config?: ParticlesConfig;
}) => {
  const mergedConfig = useMemo(
    () => ({ ...defaultConfig, ...config }),
    [config],
  );

  const [particles, setParticles] = useState<ParticleProps[]>([]);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const animationFrameRef = useRef<number | null>(null);
  const lastTimeRef = useRef<number>(0);

  const createParticle = useCallback(
    (x?: number, y?: number): ParticleProps => {
      const angle =
        mergedConfig.angle.min +
        Math.random() * (mergedConfig.angle.max - mergedConfig.angle.min);
      const speed =
        mergedConfig.speed * (0.5 + Math.random() * 0.5);
      const size =
        mergedConfig.size.min +
        Math.random() * (mergedConfig.size.max - mergedConfig.size.min);
      const color =
        mergedConfig.colors[
          Math.floor(Math.random() * mergedConfig.colors.length)
        ];
      const life =
        mergedConfig.life.min +
        Math.random() * (mergedConfig.life.max - mergedConfig.life.min);

      return {
        id: Math.random().toString(36).substr(2, 9),
        x: x ?? Math.random() * window.innerWidth,
        y: y ?? Math.random() * window.innerHeight,
        angle,
        speed,
        size,
        color,
        opacity: 1,
        life,
        decay: 1 / (life * 60), // Assuming 60fps
      };
    },
    [mergedConfig],
  );

  const updateParticles = useCallback(
    (deltaTime: number) => {
      setParticles((prevParticles) => {
        const updatedParticles = prevParticles
          .map((particle) => {
            const vx =
              mergedConfig.vx.min +
              Math.random() * (mergedConfig.vx.max - mergedConfig.vx.min);
            const vy =
              mergedConfig.vy.min +
              Math.random() * (mergedConfig.vy.max - mergedConfig.vy.min);

            const newX = particle.x + vx * particle.speed * deltaTime;
            const newY = particle.y + vy * particle.speed * deltaTime;
            const newOpacity = Math.max(0, particle.opacity - particle.decay);

            return {
              ...particle,
              x: newX,
              y: newY,
              opacity: newOpacity,
            };
          })
          .filter((particle) => particle.opacity > 0);

        // Add new particles if needed
        while (updatedParticles.length < mergedConfig.count) {
          updatedParticles.push(createParticle());
        }

        return updatedParticles;
      });
    },
    [mergedConfig, createParticle],
  );

  useEffect(() => {
    // Initialize particles
    const initialParticles: ParticleProps[] = [];
    for (let i = 0; i < mergedConfig.count; i++) {
      initialParticles.push(createParticle());
    }
    setParticles(initialParticles);
  }, [mergedConfig.count, createParticle]);

  useEffect(() => {
    const animate = (currentTime: number) => {
      const deltaTime = (currentTime - lastTimeRef.current) / 1000; // Convert to seconds
      lastTimeRef.current = currentTime;

      if (deltaTime > 0) {
        updateParticles(deltaTime);
      }

      animationFrameRef.current = requestAnimationFrame(animate);
    };

    animationFrameRef.current = requestAnimationFrame(animate);

    return () => {
      if (animationFrameRef.current) {
        cancelAnimationFrame(animationFrameRef.current);
      }
    };
  }, [updateParticles]);

  const onMouseMove = useCallback(
    (x: number, y: number) => {
      setMousePosition({ x, y });
      // Add particles at mouse position
      const newParticles: ParticleProps[] = [];
      for (let i = 0; i < 3; i++) {
        newParticles.push(createParticle(x, y));
      }
      setParticles((prev) => [...prev, ...newParticles]);
    },
    [createParticle],
  );

  const contextValue = useMemo(
    () => ({
      particles,
      onMouseMove,
      config: mergedConfig,
    }),
    [particles, onMouseMove, mergedConfig],
  );

  return (
    <ParticlesContext.Provider value={contextValue}>
      {children}
    </ParticlesContext.Provider>
  );
};

interface ParticlesProps {
  className?: string;
  config?: ParticlesConfig;
  children?: ReactNode;
}

const Particles = ({ className, config, children }: ParticlesProps) => {
  const containerRef = useRef<HTMLDivElement>(null);

  const handleMouseMove = (event: React.MouseEvent) => {
    if (containerRef.current) {
      const rect = containerRef.current.getBoundingClientRect();
      const x = event.clientX - rect.left;
      const y = event.clientY - rect.top;
      // onMouseMove(x, y);
    }
  };

  return (
    <ParticlesProvider config={config}>
      <ParticlesRenderer
        className={className}
        onMouseMove={handleMouseMove}
        ref={containerRef}
      >
        {children}
      </ParticlesRenderer>
    </ParticlesProvider>
  );
};

const ParticlesRenderer = React.forwardRef<
  HTMLDivElement,
  {
    className?: string;
    onMouseMove: (event: React.MouseEvent) => void;
    children?: ReactNode;
  }
>(({ className, onMouseMove, children }, ref) => {
  const { particles } = useParticles();

  return (
    <div
      ref={ref}
      className={cn("relative overflow-hidden", className)}
      onMouseMove={onMouseMove}
    >
      <div className="absolute inset-0 pointer-events-none">
        <AnimatePresence>
          {particles.map((particle) => (
            <Particle key={particle.id} particle={particle} />
          ))}
        </AnimatePresence>
      </div>
      {children}
    </div>
  );
});

ParticlesRenderer.displayName = "ParticlesRenderer";

export { Particles, ParticlesProvider, useParticles };

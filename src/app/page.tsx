"use client";

import { AnimatedBeam } from "@/components/ui/animated-beam";
import { AnimatedGradientText } from "@/components/ui/animated-gradient-text";
import { MagicCard } from "@/components/ui/magic-card";
import { Meteors } from "@/components/ui/meteors";
import { NeonGradientCard } from "@/components/ui/neon-gradient-card";
import { Particles } from "@/components/ui/particles";
import { ShimmerButton } from "@/components/ui/shimmer-button";
import { TextAnimate } from "@/components/ui/text-animate";
import { motion } from "motion/react";
import { forwardRef, useRef } from "react";

const Circle = forwardRef<
  HTMLDivElement,
  { className?: string; children?: React.ReactNode }
>(({ className, children }, ref) => {
  return (
    <div
      ref={ref}
      className={`z-10 flex size-12 items-center justify-center rounded-full border-2 border-border bg-white p-3 shadow-[0_0_20px_-12px_rgba(0,0,0,0.8)] ${className}`}
    >
      {children}
    </div>
  );
});

Circle.displayName = "Circle";

export default function Portfolio() {
  const containerRef = useRef<HTMLDivElement>(null);
  const div1Ref = useRef<HTMLDivElement>(null);
  const div2Ref = useRef<HTMLDivElement>(null);
  const div3Ref = useRef<HTMLDivElement>(null);
  const div4Ref = useRef<HTMLDivElement>(null);
  const div5Ref = useRef<HTMLDivElement>(null);
  const div6Ref = useRef<HTMLDivElement>(null);

  return (
    <div className="min-h-screen bg-black text-white overflow-hidden">
      <Particles
        className="absolute inset-0"
        config={{
          count: 100,
          colors: ["#3b82f6", "#8b5cf6", "#ef4444", "#10b981", "#f59e0b"],
          size: { min: 1, max: 4 },
          speed: 0.5,
        }}
      >
        {/* Hero Section */}
        <section className="relative min-h-screen flex items-center justify-center p-8">
          <Meteors number={30} />
          
          <div className="text-center z-10 max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="mb-6"
            >
              <AnimatedGradientText
                className="text-6xl md:text-8xl font-black mb-4"
                colors={["#ff6b6b", "#4ecdc4", "#45b7d1", "#ff6b6b"]}
                animationSpeed={4}
              >
                SYLESH
              </AnimatedGradientText>
            </motion.div>

            <TextAnimate
              className="text-xl md:text-3xl text-gray-300 mb-8 max-w-3xl mx-auto leading-relaxed"
              animation="blurInUp"
              by="word"
              delay={0.5}
            >
              Full Stack Developer & Creative Technologist crafting digital experiences that push boundaries
            </TextAnimate>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1 }}
              className="flex flex-wrap gap-6 justify-center mt-12"
            >
              <ShimmerButton
                className="px-8 py-4 text-lg font-semibold"
                shimmerColor="#3b82f6"
                background="linear-gradient(135deg, rgba(59, 130, 246, 0.3), rgba(139, 92, 246, 0.3))"
              >
                View My Work
              </ShimmerButton>
              
              <ShimmerButton
                className="px-8 py-4 text-lg font-semibold"
                shimmerColor="#10b981"
                background="linear-gradient(135deg, rgba(16, 185, 129, 0.3), rgba(34, 197, 94, 0.3))"
              >
                Contact Me
              </ShimmerButton>
            </motion.div>
          </div>
        </section>

        {/* Skills Section with Animated Beams */}
        <section className="relative py-20 px-8">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <AnimatedGradientText 
                className="text-4xl md:text-6xl font-bold"
                colors={["#f59e0b", "#ef4444", "#f59e0b"]}
              >
                Tech Stack
              </AnimatedGradientText>
            </div>

            <div
              className="relative flex h-[500px] w-full items-center justify-center overflow-hidden rounded-lg bg-transparent p-10 md:shadow-xl"
              ref={containerRef}
            >
              <div className="flex size-full flex-col max-w-lg max-h-[200px] items-stretch justify-between gap-10">
                <div className="flex flex-row items-center justify-between">
                  <Circle ref={div1Ref} className="bg-blue-500 border-blue-300">
                    <span className="text-xs font-bold text-white">React</span>
                  </Circle>
                  <Circle ref={div5Ref} className="bg-green-500 border-green-300">
                    <span className="text-xs font-bold text-white">Node</span>
                  </Circle>
                </div>
                <div className="flex flex-row items-center justify-between">
                  <Circle ref={div2Ref} className="bg-purple-500 border-purple-300">
                    <span className="text-xs font-bold text-white">Next</span>
                  </Circle>
                  <Circle ref={div4Ref} className="bg-yellow-500 border-yellow-300">
                    <span className="text-xs font-bold text-white">JS</span>
                  </Circle>
                  <Circle ref={div6Ref} className="bg-red-500 border-red-300">
                    <span className="text-xs font-bold text-white">TS</span>
                  </Circle>
                </div>
                <div className="flex flex-row items-center justify-center">
                  <Circle ref={div3Ref} className="bg-indigo-500 border-indigo-300">
                    <span className="text-xs font-bold text-white">Python</span>
                  </Circle>
                </div>
              </div>

              <AnimatedBeam
                containerRef={containerRef}
                fromRef={div1Ref}
                toRef={div4Ref}
                curvature={-75}
                endYOffset={-10}
              />
              <AnimatedBeam
                containerRef={containerRef}
                fromRef={div2Ref}
                toRef={div4Ref}
              />
              <AnimatedBeam
                containerRef={containerRef}
                fromRef={div3Ref}
                toRef={div4Ref}
                curvature={75}
                endYOffset={10}
              />
              <AnimatedBeam
                containerRef={containerRef}
                fromRef={div5Ref}
                toRef={div4Ref}
                curvature={-75}
                endYOffset={-10}
                reverse
              />
              <AnimatedBeam
                containerRef={containerRef}
                fromRef={div6Ref}
                toRef={div4Ref}
                reverse
              />
            </div>
          </div>
        </section>

        {/* Projects Section */}
        <section className="relative py-20 px-8">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <AnimatedGradientText 
                className="text-4xl md:text-6xl font-bold"
                colors={["#8b5cf6", "#3b82f6", "#8b5cf6"]}
              >
                Featured Projects
              </AnimatedGradientText>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[1, 2, 3, 4, 5, 6].map((i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: i * 0.1 }}
                  viewport={{ once: true }}
                >
                  <MagicCard className="h-64 cursor-pointer flex-col items-center justify-center shadow-2xl text-center">
                    <div className="p-6">
                      <h3 className="text-xl font-bold mb-3 text-white">
                        Project {i}
                      </h3>
                      <p className="text-gray-300 mb-4">
                        Amazing project description showcasing cutting-edge technology and innovation.
                      </p>
                      <div className="flex flex-wrap gap-2 justify-center">
                        <span className="px-2 py-1 bg-blue-500/20 text-blue-300 rounded text-xs">
                          React
                        </span>
                        <span className="px-2 py-1 bg-green-500/20 text-green-300 rounded text-xs">
                          Node.js
                        </span>
                        <span className="px-2 py-1 bg-purple-500/20 text-purple-300 rounded text-xs">
                          TypeScript
                        </span>
                      </div>
                    </div>
                  </MagicCard>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* About Section */}
        <section className="relative py-20 px-8">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16">
              <AnimatedGradientText 
                className="text-4xl md:text-6xl font-bold"
                colors={["#ef4444", "#f59e0b", "#ef4444"]}
              >
                About Me
              </AnimatedGradientText>
            </div>

            <NeonGradientCard
              className="p-8"
              neonColors={{
                firstColor: "#ff6b6b",
                secondColor: "#4ecdc4",
              }}
              borderSize={3}
              borderRadius={20}
              animated={true}
            >
              <TextAnimate
                className="text-lg md:text-xl leading-relaxed text-center"
                animation="blurInUp"
                by="word"
              >
                I&apos;m a passionate developer who loves creating digital experiences that matter. 
                With expertise in modern web technologies and a keen eye for design, I craft 
                solutions that are both functional and beautiful. When I&apos;m not coding, 
                you can find me exploring new technologies or contributing to open source projects.
              </TextAnimate>
            </NeonGradientCard>
          </div>
        </section>

        {/* Contact Section */}
        <section className="relative py-20 px-8">
          <div className="max-w-4xl mx-auto text-center">
            <div className="mb-8">
              <AnimatedGradientText 
                className="text-4xl md:text-6xl font-bold"
                colors={["#10b981", "#3b82f6", "#10b981"]}
              >
                Let&apos;s Connect
              </AnimatedGradientText>
            </div>

            <TextAnimate
              className="text-xl text-gray-300 mb-12"
              animation="fadeIn"
              delay={0.3}
            >
              Ready to bring your ideas to life? Let&apos;s create something amazing together.
            </TextAnimate>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="flex flex-wrap gap-6 justify-center"
            >
              <ShimmerButton
                className="px-8 py-4 text-lg font-semibold"
                shimmerColor="#10b981"
                background="linear-gradient(135deg, rgba(16, 185, 129, 0.3), rgba(34, 197, 94, 0.3))"
              >
                Email Me
              </ShimmerButton>
              
              <ShimmerButton
                className="px-8 py-4 text-lg font-semibold"
                shimmerColor="#3b82f6"
                background="linear-gradient(135deg, rgba(59, 130, 246, 0.3), rgba(139, 92, 246, 0.3))"
              >
                LinkedIn
              </ShimmerButton>
              
              <ShimmerButton
                className="px-8 py-4 text-lg font-semibold"
                shimmerColor="#8b5cf6"
                background="linear-gradient(135deg, rgba(139, 92, 246, 0.3), rgba(168, 85, 247, 0.3))"
              >
                GitHub
              </ShimmerButton>
            </motion.div>
          </div>
        </section>

        {/* Footer */}
        <footer className="relative py-12 px-8 border-t border-gray-800">
          <div className="max-w-4xl mx-auto text-center">
            <TextAnimate
              className="text-gray-400"
              animation="fadeIn"
            >
              © 2025 Sylesh. Crafted with passion and cutting-edge technology.
            </TextAnimate>
          </div>
        </footer>
      </Particles>
    </div>
  );
}

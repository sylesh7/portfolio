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
import { forwardRef, useRef, useState } from "react";

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
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);
  const div1Ref = useRef<HTMLDivElement>(null);
  const div2Ref = useRef<HTMLDivElement>(null);
  const div3Ref = useRef<HTMLDivElement>(null);
  const div4Ref = useRef<HTMLDivElement>(null);
  const div5Ref = useRef<HTMLDivElement>(null);
  const div6Ref = useRef<HTMLDivElement>(null);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ 
        behavior: 'smooth',
        block: 'start'
      });
    }
    setIsMenuOpen(false); // Close mobile menu after clicking
  };

  const openEmail = () => {
    window.location.href = 'mailto:sylesh@example.com';
  };

  const openLinkedIn = () => {
    window.open('https://linkedin.com/in/sylesh', '_blank');
  };

  const openGitHub = () => {
    window.open('https://github.com/sylesh7', '_blank');
  };

  return (
    <>
      <div className="min-h-screen bg-black text-white">
        {/* Navigation Header */}
        <nav className="fixed top-0 left-0 right-0 z-50 bg-black/80 backdrop-blur-md border-b border-gray-800">
          <div className="max-w-6xl mx-auto px-6 py-4">
            <div className="flex justify-between items-center">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5 }}
              >
                <AnimatedGradientText
                  className="text-2xl font-bold"
                  colors={["#ff6b6b", "#4ecdc4", "#45b7d1"]}
                  animationSpeed={3}
                >
                  SYLESH
                </AnimatedGradientText>
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="hidden md:flex gap-6"
              >
                {[
                  { name: 'Home', id: 'hero' },
                  { name: 'Skills', id: 'skills' },
                  { name: 'Projects', id: 'projects' },
                  { name: 'About', id: 'about' },
                  { name: 'Contact', id: 'contact' }
                ].map((item, index) => (
                  <button
                    key={item.id}
                    onClick={() => scrollToSection(item.id)}
                    className="text-gray-300 hover:text-white transition-colors duration-300 font-medium"
                  >
                    {item.name}
                  </button>
                ))}
              </motion.div>

              {/* Mobile Menu Button */}
              <motion.button
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="md:hidden text-white"
                onClick={() => setIsMenuOpen(!isMenuOpen)}
              >
                <div className="w-6 h-6 flex flex-col justify-center items-center">
                  <span className={`bg-white block transition-all duration-300 ease-out h-0.5 w-6 rounded-sm ${isMenuOpen ? 'rotate-45 translate-y-1' : '-translate-y-0.5'}`}></span>
                  <span className={`bg-white block transition-all duration-300 ease-out h-0.5 w-6 rounded-sm my-0.5 ${isMenuOpen ? 'opacity-0' : 'opacity-100'}`}></span>
                  <span className={`bg-white block transition-all duration-300 ease-out h-0.5 w-6 rounded-sm ${isMenuOpen ? '-rotate-45 -translate-y-1' : 'translate-y-0.5'}`}></span>
                </div>
              </motion.button>
            </div>

            {/* Mobile Menu */}
            {isMenuOpen && (
              <motion.div
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.3 }}
                className="md:hidden mt-4 pb-4 border-t border-gray-800"
              >
                <div className="flex flex-col gap-4 pt-4">
                  {[
                    { name: 'Home', id: 'hero' },
                    { name: 'Skills', id: 'skills' },
                    { name: 'Projects', id: 'projects' },
                    { name: 'About', id: 'about' },
                    { name: 'Contact', id: 'contact' }
                  ].map((item) => (
                    <button
                      key={item.id}
                      onClick={() => scrollToSection(item.id)}
                      className="text-gray-300 hover:text-white transition-colors duration-300 font-medium text-left"
                    >
                      {item.name}
                    </button>
                  ))}
                </div>
              </motion.div>
            )}
          </div>
        </nav>

        {/* Background Particles */}
        <Particles
          className="fixed inset-0 pointer-events-none z-0"
          config={{
            count: 100,
            colors: ["#3b82f6", "#8b5cf6", "#ef4444", "#10b981", "#f59e0b"],
            size: { min: 1, max: 4 },
            speed: 0.5,
          }}
        />

        {/* Main Content */}
        <main className="relative z-10">
          {/* Hero Section */}
          <section id="hero" className="relative min-h-screen flex items-center justify-center p-8 pt-20">
            <Meteors number={30} />
            
            <div className="text-center z-20 max-w-4xl mx-auto">
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
                  onClick={() => scrollToSection('projects')}
                >
                  View My Work
                </ShimmerButton>
                
                <ShimmerButton
                  className="px-8 py-4 text-lg font-semibold"
                  shimmerColor="#10b981"
                background="linear-gradient(135deg, rgba(16, 185, 129, 0.3), rgba(34, 197, 94, 0.3))"
                onClick={() => scrollToSection('contact')}
              >
                Contact Me
              </ShimmerButton>
            </motion.div>
          </div>
        </section>

        {/* Skills Section with Animated Beams */}
        <section id="skills" className="relative py-20 px-8">
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
        <section id="projects" className="relative py-20 px-8">
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
              {[
                {
                  title: "E-Commerce Platform",
                  description: "Full-stack e-commerce solution with React, Node.js, and MongoDB. Features include real-time inventory, payment processing, and admin dashboard.",
                  tech: ["React", "Node.js", "MongoDB"],
                  colors: ["blue", "green", "orange"],
                  demoUrl: "https://demo-ecommerce.vercel.app",
                  githubUrl: "https://github.com/sylesh7/ecommerce-platform"
                },
                {
                  title: "AI Chat Application",
                  description: "Real-time chat application with AI integration using OpenAI API. Features include smart responses and conversation history.",
                  tech: ["Next.js", "OpenAI", "WebSocket"],
                  colors: ["purple", "blue", "green"],
                  demoUrl: "https://ai-chat-demo.vercel.app",
                  githubUrl: "https://github.com/sylesh7/ai-chat-app"
                },
                {
                  title: "Task Management System",
                  description: "Collaborative project management tool with drag-and-drop interface, team collaboration, and progress tracking.",
                  tech: ["React", "Express", "PostgreSQL"],
                  colors: ["red", "blue", "purple"],
                  demoUrl: "https://task-manager-demo.vercel.app",
                  githubUrl: "https://github.com/sylesh7/task-manager"
                },
                {
                  title: "Weather Dashboard",
                  description: "Beautiful weather application with forecasts, interactive maps, and location-based alerts using multiple weather APIs.",
                  tech: ["Vue.js", "Python", "FastAPI"],
                  colors: ["blue", "yellow", "green"],
                  demoUrl: "https://weather-dashboard-demo.vercel.app",
                  githubUrl: "https://github.com/sylesh7/weather-dashboard"
                },
                {
                  title: "Social Media Analytics",
                  description: "Comprehensive analytics dashboard for social media performance with data visualization and automated reporting.",
                  tech: ["React", "D3.js", "Node.js"],
                  colors: ["purple", "pink", "blue"],
                  demoUrl: "https://social-analytics-demo.vercel.app",
                  githubUrl: "https://github.com/sylesh7/social-analytics"
                },
                {
                  title: "Blockchain Wallet",
                  description: "Secure cryptocurrency wallet with multi-chain support, transaction history, and portfolio tracking features.",
                  tech: ["React", "Web3.js", "Solidity"],
                  colors: ["orange", "purple", "blue"],
                  demoUrl: "https://crypto-wallet-demo.vercel.app",
                  githubUrl: "https://github.com/sylesh7/blockchain-wallet"
                }
              ].map((project, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: i * 0.1 }}
                  viewport={{ once: true }}
                >
                  <MagicCard className="h-80 cursor-pointer flex-col items-center justify-center shadow-2xl text-center group">
                    <div className="p-6 h-full flex flex-col justify-between">
                      <div>
                        <h3 className="text-xl font-bold mb-3 text-white group-hover:text-blue-300 transition-colors">
                          {project.title}
                        </h3>
                        <p className="text-gray-300 mb-4 text-sm leading-relaxed">
                          {project.description}
                        </p>
                        <div className="flex flex-wrap gap-2 justify-center mb-4">
                          {project.tech.map((tech, techIndex) => (
                            <span 
                              key={tech} 
                              className={`px-2 py-1 bg-${project.colors[techIndex]}-500/20 text-${project.colors[techIndex]}-300 rounded text-xs`}
                            >
                              {tech}
                            </span>
                          ))}
                        </div>
                      </div>
                      
                      <div className="flex gap-3 justify-center">
                        <ShimmerButton
                          className="px-4 py-2 text-sm"
                          shimmerColor="#3b82f6"
                          onClick={() => window.open(project.demoUrl, '_blank')}
                        >
                          Live Demo
                        </ShimmerButton>
                        <ShimmerButton
                          className="px-4 py-2 text-sm"
                          shimmerColor="#10b981"
                          onClick={() => window.open(project.githubUrl, '_blank')}
                        >
                          GitHub
                        </ShimmerButton>
                      </div>
                    </div>
                  </MagicCard>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* About Section */}
        <section id="about" className="relative py-20 px-8">
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
              animated={false}
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
        <section id="contact" className="relative py-20 px-8">
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

            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="max-w-2xl mx-auto mb-12"
            >
              <NeonGradientCard
                className="p-8"
                neonColors={{
                  firstColor: "#10b981",
                  secondColor: "#3b82f6",
                }}
                borderSize={2}
                borderRadius={15}
                animated={false}
              >
                <form className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-medium text-gray-300 mb-2">
                        Name
                      </label>
                      <input
                        type="text"
                        className="w-full px-4 py-3 bg-gray-800/50 border border-gray-700 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-white placeholder-gray-400"
                        placeholder="Your Name"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-300 mb-2">
                        Email
                      </label>
                      <input
                        type="email"
                        className="w-full px-4 py-3 bg-gray-800/50 border border-gray-700 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-white placeholder-gray-400"
                        placeholder="your.email@example.com"
                      />
                    </div>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-2">
                      Subject
                    </label>
                    <input
                      type="text"
                      className="w-full px-4 py-3 bg-gray-800/50 border border-gray-700 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-white placeholder-gray-400"
                      placeholder="Project Collaboration"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-2">
                      Message
                    </label>
                    <textarea
                      rows={5}
                      className="w-full px-4 py-3 bg-gray-800/50 border border-gray-700 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-white placeholder-gray-400 resize-none"
                      placeholder="Tell me about your project idea..."
                    />
                  </div>
                  <div className="text-center">
                    <ShimmerButton
                      className="px-8 py-3 text-lg font-semibold"
                      shimmerColor="#10b981"
                      background="linear-gradient(135deg, rgba(16, 185, 129, 0.3), rgba(34, 197, 94, 0.3))"
                    >
                      Send Message
                    </ShimmerButton>
                  </div>
                </form>
              </NeonGradientCard>
            </motion.div>

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
                onClick={openEmail}
              >
                Email Me
              </ShimmerButton>
              
              <ShimmerButton
                className="px-8 py-4 text-lg font-semibold"
                shimmerColor="#3b82f6"
                background="linear-gradient(135deg, rgba(59, 130, 246, 0.3), rgba(139, 92, 246, 0.3))"
                onClick={openLinkedIn}
              >
                LinkedIn
              </ShimmerButton>
              
              <ShimmerButton
                className="px-8 py-4 text-lg font-semibold"
                shimmerColor="#8b5cf6"
                background="linear-gradient(135deg, rgba(139, 92, 246, 0.3), rgba(168, 85, 247, 0.3))"
                onClick={openGitHub}
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
      </main>
      </div>
    </>
  );
}

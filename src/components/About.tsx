import Image from 'next/image';
import {
  Code,
  Brush,
  Blocks,
  Download,
  Palette,
  Globe,
  Database,
  FileText,
  DollarSign,
  AppWindow,
  PenTool,
} from 'lucide-react';
import { Button } from './ui/button';
import Link from 'next/link';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from './ui/accordion';

const skillCategories = [
  {
    title: 'Programming Languages',
    skills: [
      { name: 'Python', icon: Code },
      { name: 'C', icon: Code },
      { name: 'Java', icon: Code },
      { name: 'JavaScript', icon: Code },
    ],
  },
  {
    title: 'Designing Tools',
    skills: [
      { name: 'Canva', icon: PenTool },
      { name: 'Figma', icon: Palette },
      { name: 'Adobe Photoshop', icon: Brush },
    ],
  },
  {
    title: 'Technologies',
    skills: [
      { name: 'Next.js & React', icon: Code },
      { name: 'Web Development', icon: Globe },
      { name: 'SQL', icon: Database },
      { name: 'PHP', icon: Code },
      { name: 'Web3 Development', icon: Blocks },
      { name: 'Smart Contracts', icon: FileText },
      { name: 'Supabase', icon: Database },
      { name: 'DeFi', icon: DollarSign },
      { name: 'DApp', icon: AppWindow },
    ],
  },
];

const About = () => {
  return (
    <section id="about" className="w-full py-12 md:py-24 lg:py-32 bg-secondary/50">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid gap-10 lg:grid-cols-2 lg:gap-16">
          <div className="space-y-6 animate-in fade-in-20 slide-in-from-left-10 duration-500">
            <div className="inline-block rounded-lg bg-primary text-primary-foreground px-3 py-1 text-sm font-medium">
              About Me
            </div>
            <h2 className="text-3xl font-headline font-bold tracking-tighter sm:text-4xl md:text-5xl">
              A Passion for Building and Creating
            </h2>
            <p className="max-w-[600px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              I'm a full-stack developer with a keen eye for design. My passion lies in creating beautiful, functional, and user-centered digital experiences. I'm a lifelong learner, always excited to explore new technologies and frameworks.
            </p>
            <Button asChild size="lg">
              <Link href="/resume.pdf" target="_blank" rel="noopener noreferrer">
                <Download className="mr-2 h-5 w-5" />
                Download Resume
              </Link>
            </Button>
            <Accordion type="single" collapsible defaultValue="item-0" className="w-full">
              {skillCategories.map((category, index) => (
                <AccordionItem key={category.title} value={`item-${index}`}>
                  <AccordionTrigger className="text-xl font-headline">{category.title}</AccordionTrigger>
                  <AccordionContent>
                    <div className="grid grid-cols-2 gap-4 pt-4">
                      {category.skills.map((skill) => (
                        <div key={skill.name} className="flex items-center gap-3">
                          <skill.icon className="h-6 w-6 text-primary" />
                          <span className="font-medium">{skill.name}</span>
                        </div>
                      ))}
                    </div>
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
          <div className="flex items-center justify-center animate-in fade-in-20 slide-in-from-right-10 duration-500">
            <Image
              src="/profile.jpg"
              alt="About Me"
              width={500}
              height={500}
              className="rounded-full object-cover aspect-square shadow-lg"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;

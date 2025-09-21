import Link from 'next/link';
import { Button } from './ui/button';
import { ArrowRight } from 'lucide-react';
import { TextGenerateEffect } from './ui/text-generate-effect';

const Hero = () => {
  return (
    <section id="#" className="w-full py-20 md:py-32 lg:py-40 bg-background">
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-3xl mx-auto text-center space-y-6 animate-in fade-in-20 slide-in-from-top-5 duration-500">
          <div className="text-6xl font-headline font-bold tracking-tighter sm:text-7xl md:text-8xl lg:text-9xl text-primary">
            <TextGenerateEffect 
              words="Sylesh" 
              className="text-6xl font-headline font-bold tracking-tighter sm:text-7xl md:text-8xl lg:text-9xl text-primary"
              duration={0.8}
            />
          </div>
          <h2 className="text-xl font-body sm:text-2xl md:text-3xl text-primary/80">
            Full stack web3 developer and designer
          </h2>
          <p className="text-lg text-muted-foreground md:text-xl">
            I craft elegant and effective solutions at the intersection of design and code.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Button asChild size="lg">
              <Link href="/projects">
                View My Work <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
            <Button asChild variant="outline" size="lg">
              <Link href="/contact">
                Get In Touch
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;

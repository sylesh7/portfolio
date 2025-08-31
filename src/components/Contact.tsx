import Link from 'next/link';
import { Button } from './ui/button';
import { Github, Linkedin, Twitter, Mail } from 'lucide-react';

const socialLinks = [
  { name: 'GitHub', href: 'https://github.com/sylesh7', icon: Github },
  { name: 'LinkedIn', href: 'https://linkedin.com/in/sylesh-r-4b2139295', icon: Linkedin },
  { name: 'Twitter', href: 'https://twitter.com/SyleshSai35826', icon: Twitter },
];

const Contact = () => {
  return (
    <section id="contact" className="w-full py-12 md:py-24 lg:py-32 bg-secondary/50">
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-2xl mx-auto text-center space-y-4">
          <div className="inline-block rounded-lg bg-primary text-primary-foreground px-3 py-1 text-sm font-medium">
            Contact
          </div>
          <h2 className="text-3xl font-headline font-bold tracking-tighter sm:text-4xl md:text-5xl">
            Let's Build Something Together
          </h2>
          <p className="text-muted-foreground md:text-xl/relaxed">
            Have a project in mind or just want to say hello? My inbox is always open.
          </p>
          <Button asChild size="lg">
            <Link href="mailto:syleshrps@gmail.com">
              <Mail className="mr-2 h-5 w-5" />
              syleshrps@gmail.com
            </Link>
          </Button>
          <div className="flex items-center justify-center gap-6 pt-4">
            {socialLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground transition-colors hover:text-primary"
              >
                <link.icon className="h-6 w-6" />
                <span className="sr-only">{link.name}</span>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;

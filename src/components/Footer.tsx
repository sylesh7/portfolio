import { Github, Linkedin, Twitter, Code } from 'lucide-react';
import Link from 'next/link';

const Footer = () => {
  const socialLinks = [
    { name: 'GitHub', href: 'https://github.com/sylesh7', icon: Github },
    { name: 'LinkedIn', href: 'https://linkedin.com/in/sylesh-r-4b2139295', icon: Linkedin },
    { name: 'Twitter', href: 'https://twitter.com/SyleshSai35826', icon: Twitter },
  ];

  return (
    <footer className="w-full border-t border-border/40">
      <div className="container flex flex-col items-center justify-between gap-4 py-10 md:h-24 md:flex-row md:py-0">
        <div className="flex flex-col items-center gap-4 px-8 md:flex-row md:gap-2 md:px-0">
          <p className="text-center text-sm leading-loose text-muted-foreground md:text-left">
            © {new Date().getFullYear()} Noirfolio. All Rights Reserved.
          </p>
        </div>
        <div className="flex items-center gap-4">
          {socialLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground transition-colors hover:text-primary"
            >
              <link.icon className="h-5 w-5" />
              <span className="sr-only">{link.name}</span>
            </Link>
          ))}
        </div>
      </div>
    </footer>
  );
};

export default Footer;

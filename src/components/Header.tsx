"use client";

import { useState } from 'react';
import Link from 'next/link';
import { Menu, X, Home, User, Briefcase, Mail } from 'lucide-react';
import { Button } from './ui/button';
import { cn } from '@/lib/utils';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { name: 'Home', href: '/', icon: Home },
    { name: 'About', href: '/about', icon: User },
    { name: 'Projects', href: '/projects', icon: Briefcase },
    { name: 'Contact', href: '/contact', icon: Mail },
  ];

  return (
    <>
      {/* Mobile navigation menu */}
      {isOpen && (
        <div 
          className="fixed bottom-20 left-1/2 -translate-x-1/2 z-40 w-[calc(100%-2rem)] md:hidden animate-in fade-in-20 slide-in-from-bottom-5 duration-300"
          onClick={() => setIsOpen(false)}
        >
          <div className="bg-background/80 backdrop-blur-sm border border-border/40 rounded-lg shadow-lg p-4">
            <div className="grid gap-4">
              {navItems.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  onClick={() => setIsOpen(false)}
                  className="flex items-center gap-3 text-base font-medium text-foreground transition-colors hover:text-primary py-2"
                >
                  <item.icon className="h-5 w-5" />
                  {item.name}
                </Link>
              ))}
            </div>
          </div>
        </div>
      )}

      {/* Main floating navigation bar */}
      <header className="fixed bottom-4 left-1/2 -translate-x-1/2 z-50 w-[calc(100%-2rem)] max-w-xs">
        <div className="w-full border border-border/40 bg-background/80 backdrop-blur-sm supports-[backdrop-filter]:bg-background/60 rounded-full shadow-lg">
          <div className="container flex h-16 items-center justify-center p-0">
            
            {/* Desktop navigation */}
            <nav className="hidden md:flex">
              {navItems.map((item) => (
                <Button key={item.name} asChild variant="ghost" className="flex-col h-auto p-4">
                  <Link href={item.href}>
                    <item.icon className="h-5 w-5" />
                    <span className="text-xs">{item.name}</span>
                  </Link>
                </Button>
              ))}
            </nav>
            
            {/* Mobile navigation toggle */}
            <div className="md:hidden flex-1 flex justify-center">
              <Button variant="ghost" size="icon" onClick={() => setIsOpen(!isOpen)}>
                {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
                <span className="sr-only">Toggle Menu</span>
              </Button>
            </div>
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;

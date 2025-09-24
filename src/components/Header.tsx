"use client";

import { Home, User, Briefcase, Mail } from 'lucide-react';
import { FloatingDock } from './ui/floating-dock';

const Header = () => {
  const navItems = [
    { title: 'Home', icon: <Home className="h-5 w-5" />, href: '/' },
    { title: 'About', icon: <User className="h-5 w-5" />, href: '/about' },
    { title: 'Projects', icon: <Briefcase className="h-5 w-5" />, href: '/projects' },
    { title: 'Contact', icon: <Mail className="h-5 w-5" />, href: '/contact' },
  ];

  return (
    <div className="fixed bottom-4 left-1/2 -translate-x-1/2 z-50">
      <FloatingDock 
        items={navItems}
        desktopClassName="bg-card/80 backdrop-blur-sm border border-border/40 shadow-lg"
        mobileClassName="bg-card/80 backdrop-blur-sm border border-border/40 shadow-lg"
      />
    </div>
  );
};

export default Header;

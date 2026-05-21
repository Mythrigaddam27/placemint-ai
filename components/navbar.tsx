'use client';

import Link from 'next/link';
import { Button } from '@/components/ui/button';

export default function Navbar() {
  return (
    <nav className="sticky top-0 z-50 glass border-b border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-lg bg-gradient-to-r from-primary to-secondary flex items-center justify-center">
              <span className="text-white font-bold text-sm">P</span>
            </div>
            <span className="gradient-text font-bold text-xl hidden sm:inline">Placemint AI</span>
          </Link>

          {/* Navigation Links */}
          <div className="hidden md:flex items-center gap-8">
            <Link href="/" className="text-foreground/80 hover:text-foreground transition">
              Home
            </Link>
            <Link href="/dashboard" className="text-foreground/80 hover:text-foreground transition">
              Dashboard
            </Link>
            <Link href="/mock-interview" className="text-foreground/80 hover:text-foreground transition">
              Mock Interview
            </Link>
            <Link href="/resume-analyzer" className="text-foreground/80 hover:text-foreground transition">
              Resume Analyzer
            </Link>
          </div>

          {/* Login Button */}
          <Button variant="outline" className="border-primary/50 hover:bg-primary/10">
            Login
          </Button>
        </div>
      </div>
    </nav>
  );
}

"use client";

import Link from "next/link";
import Image from "next/image";
import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { isBrowser } from "@/lib/browser-utils";
const logo = "/images/Backup_of_FOR LINK.svg";

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted && !isBrowser()) {
    return (
      <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container flex h-16 items-center justify-between">
          <Link href="/" className="flex items-center space-x-2">
            <img src={logo} alt="Logo" width={32} height={32} />

            <span className="text-2xl font-bold">Game</span>
          </Link>
          <nav className="hidden md:flex items-center gap-6">
            {/* ...nav links */}
            <Button>Get Started</Button>
          </nav>
          <div className="md:hidden">
            <Button variant="ghost" size="icon">
              <Menu className="h-6 w-6" />
            </Button>
          </div>
        </div>
      </header>
    );
  }

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center justify-between">
        <Link href="/" className="flex items-center space-x-2">
          <img src={logo} alt="Logo" width={32} height={32} />
          <span className="text-2xl font-bold">Game</span>
        </Link>
        <nav className="hidden md:flex items-center gap-6">
          <Link
            href="/games"
            className="text-sm font-medium hover:underline underline-offset-4"
          >
            Games
          </Link>
          <Link
            href="/consoles"
            className="text-sm font-medium hover:underline underline-offset-4"
          >
            Consoles
          </Link>
          <Link
            href="/accessories"
            className="text-sm font-medium hover:underline underline-offset-4"
          >
            Accessories
          </Link>
          <Link
            href="/playstation-services"
            className="text-sm font-medium hover:underline underline-offset-4"
          >
            PlayStation Services
          </Link>
          <Link
            href="/installation"
            className="text-sm font-medium hover:underline underline-offset-4"
          >
            Game Installation
          </Link>
          <Link
            href="/about"
            className="text-sm font-medium hover:underline underline-offset-4"
          >
            About
          </Link>
          <Link
            href="/contact"
            className="text-sm font-medium hover:underline underline-offset-4"
          >
            Contact
          </Link>
          <Link
            href="/faq"
            className="text-sm font-medium hover:underline underline-offset-4"
          >
            FAQ
          </Link>
          <Button>Get Started</Button>
        </nav>
        <div className="md:hidden">
          <Button
            variant="ghost"
            size="icon"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? (
              <X className="h-6 w-6" />
            ) : (
              <Menu className="h-6 w-6" />
            )}
          </Button>
        </div>
      </div>

      {isMenuOpen && (
        <div className="container md:hidden py-4 flex flex-col gap-4">
          <Link
            href="/games"
            className="text-sm font-medium hover:underline underline-offset-4"
            onClick={() => setIsMenuOpen(false)}
          >
            Games
          </Link>
          <Link
            href="/consoles"
            className="text-sm font-medium hover:underline underline-offset-4"
            onClick={() => setIsMenuOpen(false)}
          >
            Consoles
          </Link>
          <Link
            href="/accessories"
            className="text-sm font-medium hover:underline underline-offset-4"
            onClick={() => setIsMenuOpen(false)}
          >
            Accessories
          </Link>
          <Link
            href="/playstation-services"
            className="text-sm font-medium hover:underline underline-offset-4"
            onClick={() => setIsMenuOpen(false)}
          >
            PlayStation Services
          </Link>
          <Link
            href="/installation"
            className="text-sm font-medium hover:underline underline-offset-4"
            onClick={() => setIsMenuOpen(false)}
          >
            Game Installation
          </Link>
          <Link
            href="/about"
            className="text-sm font-medium hover:underline underline-offset-4"
            onClick={() => setIsMenuOpen(false)}
          >
            About
          </Link>
          <Link
            href="/contact"
            className="text-sm font-medium hover:underline underline-offset-4"
            onClick={() => setIsMenuOpen(false)}
          >
            Contact
          </Link>
          <Link
            href="/faq"
            className="text-sm font-medium hover:underline underline-offset-4"
            onClick={() => setIsMenuOpen(false)}
          >
            FAQ
          </Link>
          <Button className="w-full">Get Started</Button>
        </div>
      )}
    </header>
  );
}

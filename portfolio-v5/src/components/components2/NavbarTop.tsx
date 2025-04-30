"use client";

import React, { useState } from "react";
import { DATA } from "@/data/resume";
import { ModeToggle } from "@/components/components2/mode-toggle";
import { AnimatedGradientText } from "../magicui/animated-gradient-text";
import { cn } from "@/lib/utils";
import { ShinyButton } from "../magicui/shiny-button";

interface NavItem {
  label: string;
  href: string;
}

const navItems: NavItem[] = [
  { label: "Home", href: "/portfolio" },
  { label: "About", href: "#about" },
  { label: "Projects", href: "#projects" },
  { label: "Contact", href: "#contact" },
];

const NavbarTop: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="w-full fixed top-0 left-0 z-50 backdrop-blur-md bg-white/30 dark:bg-gray-900/30 shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="group relative flex items-center justify-center rounded-full px-4 py-2 shadow-[inset_0_-8px_10px_#8fdfff1f] transition-shadow duration-500 ease-out hover:shadow-[inset_0_-5px_10px_#8fdfff3f] ">
            <span
              className={cn(
                "absolute inset-0 block h-full w-full animate-gradient rounded-[inherit] bg-gradient-to-r from-[#0070F3]/50 via-[#7928CA]/50 to-[#38bdf8]/50 bg-[length:300%_100%] p-[1px]"
              )}
              style={{
                WebkitMask:
                  "linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)",
                WebkitMaskComposite: "destination-out",
                mask: "linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)",
                maskComposite: "subtract",
                WebkitClipPath: "padding-box",
              }}
            />
            <AnimatedGradientText
              colorFrom="#0070F3"
              colorTo="#38bdf8"
              className="text-sm font-medium"
            >
              {DATA.name}
            </AnimatedGradientText>
          </div>

          <div className="hidden md:flex space-x-6 text-base">
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="text-gray-800 dark:text-white hover:text-blue-500 transition mt-1"
              >
                {item.label}
              </a>
            ))}
          </div>
          <div className="flex gap-6">
            <a href="#contact">
              <ShinyButton className="hidden md:block rounded-full border">
                Hire Me
              </ShinyButton>
            </a>
            <div className="hidden md:block">
              <ModeToggle />
            </div>
          </div>
          <button
            className="md:hidden text-gray-700 dark:text-gray-300"
            onClick={() => setIsOpen(!isOpen)}
          >
            ☰
          </button>
        </div>
      </div>

      {isOpen && (
        <div className="md:hidden backdrop-blur-md bg-white/30 dark:bg-gray-900/30 p-4">
          {navItems.map((item) => (
            <a
              key={item.label}
              href={item.href}
              className="block text-gray-700 dark:text-gray-300 py-2 hover:text-blue-500 transition"
            >
              {item.label}
            </a>
          ))}
          <a className="md:hidden backdrop-blur-md bg-white/30 dark:bg-gray-900/30">
            Theme
          </a>
          <ModeToggle />
        </div>
      )}
    </nav>
  );
};

export default NavbarTop;

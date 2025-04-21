"use client";

import React, { useState } from "react";
import { DATA } from "@/data/resume";
import { ModeToggle } from "@/components/mode-toggle"; 
import { Separator } from "@radix-ui/react-separator";
import Link from "next/link";
import { AnimatedGradientText } from "./magicui/animated-gradient-text";
import { cn } from "@/lib/utils";
import { ShinyButton } from "./magicui/shiny-button";

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
          {/* <a href="/testing" className="flex items-center">
            <span className="text-xl font-bold text-gray-900 dark:text-white">
              {DATA.name}
            </span>
          </a> */}
          {/* <Link className="flex items-center text-xl  mr-6" href="/portfolio">
            <span className="font-bold">
              <AnimatedGradientText colorFrom="#0070F3" colorTo="#38bdf8">
                {DATA.name}
              </AnimatedGradientText>
            </span>
          </Link> */}
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
                className="text-gray-700 dark:text-gray-300 hover:text-blue-500 transition mt-1"
              >
                {item.label}
              </a>
            ))}
            {/* <Separator orientation="vertical" className="h-full py-2" />
            <ModeToggle /> */}
          </div>
          {/* <a
            href="#contact"
            className="hidden md:block bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition"
          >
            Hire Me
          </a> */}
          <div className="flex gap-6">
            <ShinyButton
              // onClick={openModal}
              className="hidden md:block rounded-full border"
            >
              Hire Me
            </ShinyButton>
            <ModeToggle />
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
          {/* <a
            href="/hire"
            className="block text-center bg-blue-600 text-white px-4 py-2 mt-2 rounded-lg hover:bg-blue-700 transition"
          >
            Hire Me
          </a> */}
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

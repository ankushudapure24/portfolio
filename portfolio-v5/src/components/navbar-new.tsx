// import { Dock, DockIcon } from "@/components/magicui/dock";
// import { ModeToggle } from "@/components/mode-toggle";
// import { buttonVariants } from "@/components/ui/button";
// import { Separator } from "@/components/ui/separator";
// import {
//   Tooltip,
//   TooltipContent,
//   TooltipTrigger,
// } from "@/components/ui/tooltip";
// import { DATA } from "@/data/resume";
// import { cn } from "@/lib/utils";
// import Link from "next/link";

// export default function Navbar() {
//   return (
//     <div className="fixed inset-x-0 top-0 z-30 mx-auto flex h-16 w-full bg-background backdrop-blur-lg dark:bg-background shadow-md">

//       <Link
//         href="/hire"
//         className="m-4 bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-all h-10 w-auto "
//       >
//         Hire Me
//       </Link>
//     </div>
//   );
// }

"use client";

import React, { useState } from "react";
import Image from "next/image";
import { DATA } from "@/data/resume";
interface NavItem {
  label: string;
  href: string;
}

const navItems: NavItem[] = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Projects", href: "/projects" },
  { label: "Contact", href: "/contact" },
];

const NavbarTop: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="w-full bg-white dark:bg-gray-900 shadow-md fixed top-0 left-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <a href="/testing" className="flex items-center">
            {/* <Image
              src="/me.png"
              alt="Logo"
              width={40}
              height={40}
              className="mr-3 rounded-full"
            /> */}
            <span className="text-xl font-bold text-gray-900 dark:text-white">
              {DATA.name}
            </span>
          </a>

          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-6">
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="text-gray-700 dark:text-gray-300 hover:text-blue-500 transition"
              >
                {item.label}
              </a>
            ))}
          </div>

          {/* Hire Me Button */}
          <a
            href="/hire"
            className="hidden md:block bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition"
          >
            Hire Me
          </a>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-gray-700 dark:text-gray-300"
            onClick={() => setIsOpen(!isOpen)}
          >
            ☰
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-white dark:bg-gray-900 p-4">
          {navItems.map((item) => (
            <a
              key={item.label}
              href={item.href}
              className="block text-gray-700 dark:text-gray-300 py-2 hover:text-blue-500 transition"
            >
              {item.label}
            </a>
          ))}
          {/* Hire Me Button in Mobile */}
          <a
            href="/hire"
            className="block text-center bg-blue-600 text-white px-4 py-2 mt-2 rounded-lg hover:bg-blue-700 transition"
          >
            Hire Me
          </a>
        </div>
      )}
    </nav>
  );
};

export default NavbarTop;

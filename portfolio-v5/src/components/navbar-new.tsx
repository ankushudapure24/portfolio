"use client";

import React, { useState } from "react";
import { DATA } from "@/data/resume";
import { ModeToggle } from "@/components/mode-toggle"; 
import { Separator } from "@radix-ui/react-separator";


interface NavItem {
  label: string;
  href: string;
}

const navItems: NavItem[] = [
  { label: "Home", href: "/testing" },
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
          <a href="/testing" className="flex items-center">
            <span className="text-xl font-bold text-gray-900 dark:text-white">
              {DATA.name}
            </span>
          </a>

          <div className="hidden md:flex space-x-6">
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="text-gray-700 dark:text-gray-300 hover:text-blue-500 transition mt-1"
              >
                {item.label}
              </a>
            ))}
            <Separator orientation="vertical" className="h-full py-2" />
            <ModeToggle />
          </div>
          <a
            href="#contact"
            className="hidden md:block bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition"
          >
            Hire Me
          </a>
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

// "use client";

// import React, { useState } from "react";
// import { DATA } from "@/data/resume";
// import { ModeToggle } from "@/components/mode-toggle"; // ⬅️ Add this import

// interface NavItem {
//   label: string;
//   href: string;
// }

// const navItems: NavItem[] = [
//   { label: "Home", href: "/testing" },
//   { label: "About", href: "#about" },
//   { label: "Projects", href: "#projects" },
//   { label: "Contact", href: "#contact" },
// ];

// const NavbarTop: React.FC = () => {
//   const [isOpen, setIsOpen] = useState(false);

//   return (
//     <nav className="w-full fixed top-0 left-0 z-50 backdrop-blur-md bg-white/30 dark:bg-gray-900/30 shadow-md">
//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//         <div className="flex justify-between items-center h-16">
//           <a href="/testing" className="flex items-center">
//             <span className="text-xl font-bold text-gray-900 dark:text-white">
//               {DATA.name}
//             </span>
//           </a>

//           <div className="hidden md:flex items-center space-x-6">
//             {navItems.map((item) => (
//               <a
//                 key={item.label}
//                 href={item.href}
//                 className="text-gray-700 dark:text-gray-300 hover:text-blue-500 transition"
//               >
//                 {item.label}
//               </a>
//             ))}
//             <ModeToggle /> {/* ⬅️ Toggle for desktop */}
//           </div>

//           <div className="flex md:hidden items-center space-x-2">
//             <ModeToggle /> {/* ⬅️ Toggle for mobile */}
//             <button
//               className="text-gray-700 dark:text-gray-300"
//               onClick={() => setIsOpen(!isOpen)}
//             >
//               ☰
//             </button>
//           </div>
//         </div>
//       </div>

//       {isOpen && (
//         <div className="md:hidden backdrop-blur-md bg-white/30 dark:bg-gray-900/30 p-4">
//           {navItems.map((item) => (
//             <a
//               key={item.label}
//               href={item.href}
//               className="block text-gray-700 dark:text-gray-300 py-2 hover:text-blue-500 transition"
//             >
//               {item.label}
//             </a>
//           ))}
//           <a
//             href="/hire"
//             className="block text-center bg-blue-600 text-white px-4 py-2 mt-2 rounded-lg hover:bg-blue-700 transition"
//           >
//             Hire Me
//           </a>
//         </div>
//       )}
//     </nav>
//   );
// };

// export default NavbarTop;


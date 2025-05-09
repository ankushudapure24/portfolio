// "use client";

// import { Button } from "@/components/ui/button";
// import { Moon, Sun } from "lucide-react";
// import { useTheme } from "next-themes";

// export function ModeToggle() {
//   const { theme, setTheme } = useTheme();

//   return (
//     <div className="border rounded-full">
//       <Button
//         variant="ghost"
//         size="icon"
//         className="hover:bg-transparent"
//         onClick={() => setTheme(theme === "light" ? "dark" : "light")}
//       >
//         <Sun />

//         <span className="sr-only">Toggle theme</span>
//       </Button>

//       <Button
//         onClick={() => setTheme(theme === "light" ? "dark" : "light")}
//         variant="ghost"
//         size="icon"
//         className="hover:bg-transparent dark:bg-zinc-800 rounded-full w-8 h-7 mr-1"
//       >
//         <Moon />
//         <span className="sr-only">Toggle theme</span>
//       </Button>
//     </div>
//   );
// }

"use client";

import { Button } from "@/components/ui/button";
import { MoonIcon, SunIcon } from "@radix-ui/react-icons";
import { useTheme } from "next-themes";

export function ModeToggle() {
  const { theme, setTheme } = useTheme();

  return (
    <Button
      variant="ghost"
      type="button"
      size="icon"
      className="px-2"
      onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
    >
      <SunIcon className="h-[1.2rem] w-[1.2rem] text-neutral-800 dark:hidden dark:text-neutral-200" />
      <MoonIcon className="hidden h-[1.2rem] w-[1.2rem] text-neutral-800 dark:block dark:text-neutral-200" />
    </Button>
  );
}

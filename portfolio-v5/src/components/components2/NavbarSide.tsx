import { Dock, DockIcon } from "@/components/magicui/dock";
import { buttonVariants } from "@/components/ui/button";
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { DATA } from "@/data/resume";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { ModeToggle } from "./mode-toggle";


export default function Navbar() {
  return (
    // <div
    //   className={cn("fixed top-1/2 left-1 z-10 -translate-y-1/2", "")}
    // >
    //   <Dock
    //     magnification={50}
    //     distance={30}
    //     className="z-20 pointer-events-auto flex flex-col px-2 items-center "
    //   >

    <div
      className={cn(
        "fixed z-10",
        "md:top-1/2 bottom-0 left-1 -translate-y-1/2", // 🖥️ For desktop
        "md:top-1/2 md:left-1 md:-translate-y-1/2", // 🖥️ Re-apply on md+
        "left-1/2 -translate-x-1/2  md:translate-x-0 md:bottom-auto", // 📱 Mobile override
        "flex justify-center"
      )}
    >
      <Dock className="z-20 pointer-events-auto flex flex-row md:flex-col px-2 items-center bg-background dark:border dark:border-white/10 rounded-xl shadow-md">
        {Object.entries(DATA.contact.social)
          .filter(([_, social]) => social.navbar)
          .map(([name, social]) => (
            <DockIcon key={name}>
              <Tooltip>
                <TooltipTrigger asChild>
                  <Link
                    href={social.url}
                    className={cn(
                      buttonVariants({ variant: "ghost", size: "icon" }),
                      "size-6 text-gray-700 dark:text-gray-300 hover:text-black dark:hover:text-white"
                    )}
                  >
                    <social.icon className="size-5" />
                  </Link>
                </TooltipTrigger>
                <TooltipContent>
                  <p>{name}</p>
                </TooltipContent>
              </Tooltip>
            </DockIcon>
          ))}
        <DockIcon>
          <Tooltip>
            <TooltipTrigger asChild>
              {/* <ModeToggle /> */}
              <ModeToggle />
            </TooltipTrigger>
            <TooltipContent>
              <p>Theme</p>
            </TooltipContent>
          </Tooltip>
        </DockIcon>
      </Dock>
    </div>
  );
}



// "use client";

// import { useState, useEffect } from "react";

// import Link from "next/link";
// import { Dock, DockIcon } from "@/components/magicui/dock";
//   import { buttonVariants } from "@/components/ui/button";
// import { Separator } from "@/components/ui/separator";
// import {
//   Tooltip,
//   TooltipContent,
//   TooltipTrigger,
// } from "@/components/ui/tooltip";
// import { DATA } from "@/data/resume";
// import { cn } from "@/lib/utils";
// import { ModeToggle } from "./mode-toggle";

// const Navbar = () => {
//   const [isScrolled, setIsScrolled] = useState(false);

//   useEffect(() => {
//     const handleScroll = () => {
//       setIsScrolled(window.scrollY > 50);
//     };
//     window.addEventListener("scroll", handleScroll);
//     return () => window.removeEventListener("scroll", handleScroll);
//   }, []);

//   return (
//     <>
//       <div className="pointer-events-none fixed inset-x-2 xs:inset-x-4 sm:inset-x-6 bottom-2 xs:bottom-3 sm:bottom-4 z-30 flex items-center justify-center">
//         <Dock className="z-50 pointer-events-auto relative mx-auto flex xs:min-h-[55px] sm:min-h-[60px] h-14 xs:h-15 sm:h-16 w-[95%] xs:w-auto max-w-md items-center px-2 xs:px-3 sm:px-4 bg-white/80 backdrop-blur-md shadow-lg dark:bg-gray-900/80 dark:shadow-gray-800 rounded-full">
//           {DATA.navbar.map((item) => (
//             <DockIcon key={item.href}>
//               <Tooltip>
//                 <TooltipTrigger asChild>
//                   <Link
//                     href={item.href}
//                     className={cn(
//                       buttonVariants({ variant: "ghost", size: "icon" }),
//                       "size-12 text-gray-700 dark:text-gray-300 hover:text-black dark:hover:text-white"
//                     )}
//                   >
//                     <item.icon className="size-5" />
//                   </Link>
//                 </TooltipTrigger>
//                 <TooltipContent>
//                   <p>{item.label}</p>
//                 </TooltipContent>
//               </Tooltip>
//             </DockIcon>
//           ))}
//           <Separator orientation="vertical" className="h-8 mx-4" />
//           {Object.entries(DATA.contact.social)
//             .filter(([_, social]) => social.navbar)
//             .map(([name, social]) => (
//               <DockIcon key={name}>
//                 <Tooltip>
//                   <TooltipTrigger asChild>
//                     <Link
//                       href={social.url}
//                       className={cn(
//                         buttonVariants({ variant: "ghost", size: "icon" }),
//                         "size-12 text-gray-700 dark:text-gray-300 hover:text-black dark:hover:text-white"
//                       )}
//                     >
//                       <social.icon className="size-5" />
//                     </Link>
//                   </TooltipTrigger>
//                   <TooltipContent>
//                     <p>{name}</p>
//                   </TooltipContent>
//                 </Tooltip>
//               </DockIcon>
//             ))}
//           <Separator orientation="vertical" className="h-8 mx-4" />
//           <DockIcon>
//             <Tooltip>
//               <TooltipTrigger asChild>
//                 {/* <ModeToggle /> */}
//                 <ModeToggle/>
//               </TooltipTrigger>
//               <TooltipContent>
//                 <p>Theme</p>
//               </TooltipContent>
//             </Tooltip>
//           </DockIcon>
//         </Dock>
//       </div>
//     </>
//   );
// };

// export default Navbar;

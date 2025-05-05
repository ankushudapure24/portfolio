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
    <div
      className={cn(
        "fixed z-10",
        "md:top-1/2 bottom-0 left-1 -translate-y-1/2", // For desktop
        "md:top-1/2 md:left-1 md:-translate-y-1/2", // Re-apply on md+
        "left-1/2 -translate-x-1/2  md:translate-x-0 md:bottom-auto", // Mobile override
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



import Image from "next/image";
import { cn } from "@/lib/utils";
import { MagicCard } from "../magicui/magic-card";
import { CardContent } from "../ui/card";
import { useTheme } from "next-themes";

interface EducationItemProps {
  school: string;
  href: string;
  degree: string;
  logoUrl: string;
  start: string;
  end?: string;
  className?: string;
}

const EducationItem: React.FC<EducationItemProps> = ({
  school,
  href,
  degree,
  logoUrl,
  start,
  end,
  className,
}) => {
  const { theme } = useTheme();

  return (
    <MagicCard
      gradientColor={theme === "dark" ? "#262626" : "#D9D9D955"}
      className={cn(
        "w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-[320px] h-auto rounded-2xl",
        className
      )}
    >
      <CardContent className="p-4 h-[360px]">
        <a
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          className={cn(
            "relative cursor-pointer overflow-hidden rounded-2xl border flex flex-col items-center justify-between p-4 gap-5",
            "border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-900 dark:hover:bg-gray-800 transition-all duration-300 ease-in-out hover:shadow-lg h-full"
          )}
        >
          <div className="rounded-full overflow-hidden border-2 border-gray-300 dark:border-gray-600 shadow-md w-20 h-20 sm:w-24 sm:h-24 md:w-28 md:h-28">
            <Image
              src={logoUrl}
              alt={school}
              width={112}
              height={112}
              className="w-full h-full object-cover"
            />
          </div>

          <div className="text-center px-2">
            <h3 className="text-base sm:text-lg font-bold text-gray-900 dark:text-white">
              {school}
            </h3>
            <p className="text-sm text-gray-600 dark:text-gray-300 mt-1">
              {degree}
            </p>
          </div>

          <div className="text-xs text-gray-500 dark:text-gray-400">
            <p>
              {start} - {end || "Present"}
            </p>
          </div>

          <div className="text-[10px] px-3 py-1 rounded-full bg-blue-100 dark:bg-blue-900/30 text-blue-800 dark:text-blue-300 font-medium tracking-wide uppercase">
            Academic Journey
          </div>
        </a>
      </CardContent>
    </MagicCard>
  );
};

export default EducationItem;


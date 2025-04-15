import Image from "next/image";
import { cn } from "@/lib/utils";
import { MagicCard } from "./magicui/magic-card";
import { Card, CardContent } from "./ui/card";
import { useTheme } from "next-themes";

const EducationItem = ({ school, href, degree, logoUrl, start, end }: any) => {
  const { theme } = useTheme();
  console.log("theme---", theme);

  return (
    // <Card className="w-full max-w-[300px] max-h-[400px] rounded-2xl p-4 bg">
    <MagicCard
      gradientColor={theme === "dark" ? "#262626" : "#D9D9D955"}
      className="w-[320px] h-[400px] rounded-2xl"
    >
      <CardContent className="p-3 h-full">
        <a
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          className={cn(
            "relative cursor-pointer overflow-hidden rounded-2xl border flex flex-col items-center justify-between p-6 gap-5 lg:h-[375px]",
            "border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-900 dark:hover:bg-gray-800 transition-all duration-300 ease-in-out hover:shadow-lg"
          )}
        >
          {/* Circular Image */}
          <div className="rounded-full overflow-hidden border-2 border-gray-300 dark:border-gray-600 shadow-md w-24 h-24 sm:w-28 sm:h-28">
            <Image
              src={logoUrl}
              alt={school}
              width={112}
              height={112}
              className="w-full h-full object-cover"
            />
          </div>

          {/* Text Details */}
          <div className="text-center">
            <h3 className="text-lg font-bold text-gray-900 dark:text-white">
              {school}
            </h3>
            <p className="text-sm text-gray-600 dark:text-gray-300 mt-1">
              {degree}
            </p>
          </div>

          {/* Duration */}
          <div className="text-xs text-gray-500 dark:text-gray-400">
            <p>
              {start} - {end ? end : "Present"}
            </p>
          </div>

          {/* Badge */}
          <div className="text-[10px] px-3 py-1 rounded-full bg-blue-100 dark:bg-blue-900/30 text-blue-800 dark:text-blue-300 font-medium tracking-wide uppercase">
            Academic Journey
          </div>
        </a>
      </CardContent>
    </MagicCard>

    // </Card>
  );
};

export default EducationItem;

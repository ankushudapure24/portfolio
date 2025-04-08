import Image from "next/image";
import { cn } from "@/lib/utils";

const EducationItem = ({ school, href, degree, logoUrl, start, end }: any) => {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className={cn(
        "relative cursor-pointer overflow-hidden rounded-xl border flex flex-wrap items-center justify-between p-3 sm:p-4 md:p-6 w-full min-h-[100px]",
        "border-gray-950/[.1] bg-white hover:shadow-md",
        "dark:border-gray-50/[.1] dark:bg-gray-900 dark:hover:bg-gray-50/[.15]"
      )}
    >
      <div className="flex items-center gap-3 sm:gap-4">
        <div className="rounded-2xl bg-gray-100 p-1">
          <Image
            src={logoUrl}
            alt={school}
            width={50}
            height={50}
            className="rounded-2xl w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14"
          />
        </div>
        <div className="ml-3 sm:ml-4">
          <h3 className="text-md sm:text-lg md:text-xl font-semibold">
            {school}
          </h3>
          <p className="text-gray-600 dark:text-gray-300 text-xs sm:text-sm md:text-base">
            {degree}
          </p>
        </div>
      </div>

      <div className="text-right text-gray-500 dark:text-gray-300 text-xs sm:text-sm md:text-base ">
        <p>
          {start} - {end ? end : "Present"}
        </p>
      </div>
    </a>
  );
};

export default EducationItem;

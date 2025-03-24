import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import Link from "next/link";
import { useState, useRef, useEffect } from "react";

interface Props {
  title: string;
  description: string;
  dates: string;
  location: string;
  image?: string;
  links?: readonly {
    icon: React.ReactNode;
    title: string;
    href: string;
  }[];
}

export function HackathonCard({
  title,
  description,
  dates,
  location,
  image,
  links,
}: Props) {
  const contentRef = useRef<HTMLDivElement>(null);
  const [isOverflowing, setIsOverflowing] = useState(false);

  useEffect(() => {
    if (contentRef.current) {
      setIsOverflowing(
        contentRef.current.scrollHeight > contentRef.current.clientHeight
      );
    }
  }, [description]);

  return (
    <div
      className={`relative flex flex-col items-center overflow-hidden w-[320px] h-[320px] min-h-[320px] hover:h-full rounded-lg border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-900 shadow-md transition-all duration-300 ${
        isOverflowing ? " hover:h-auto" : "h-auto"
      }`}
    >
      {/* Avatar Section */}
      <div className="flex flex-col items-center w-full pt-6">
        <Avatar className="size-20 border border-gray-200 dark:border-gray-600 shadow-md">
          <AvatarImage src={image} alt={title} className="object-cover" />
          <AvatarFallback className="text-lg font-bold text-gray-700 dark:text-gray-200">
            {title[0]}
          </AvatarFallback>
        </Avatar>

        {dates && (
          <time className="mt-2 text-xs text-blue-600 dark:text-blue-300">
            {dates}
          </time>
        )}
      </div>

      {/* Card Content */}
      <div
        ref={contentRef}
        className={`relative w-full flex-1 px-6 py-4 transition-all duration-300 ease-in-out overflow-hidden ${
          isOverflowing ? "h-[160px] hover:h-auto" : "h-auto"
        }`}
      >
        <h2 className="text-lg font-semibold text-gray-900 dark:text-white">
          {title}
        </h2>
        {location && (
          <p className="text-sm text-gray-600 dark:text-gray-400">
            📍 {location}
          </p>
        )}
        <p className="mt-2 text-xs text-gray-700 dark:text-gray-300">
          {description}
        </p>
      </div>

      {/* Links */}
      {links && links.length > 0 && (
        <div className="flex flex-wrap justify-center gap-2 p-4">
          {links.map((link, idx) => (
            <Link href={link.href} key={idx} className="group">
              <Badge className="flex gap-2 px-2 py-1 text-xs bg-gray-200 dark:bg-gray-800 text-gray-800 dark:text-gray-300 hover:bg-blue-600 hover:text-white transition-all">
                {link.icon} {link.title}
              </Badge>
            </Link>
          ))}
        </div>
      )}
    </div>
  );
}

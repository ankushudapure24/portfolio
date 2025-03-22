import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import Link from "next/link";

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
  return (
    <div className="flex overflow-hidden ease-out h-full w-full max-w-lg gap-8 rounded-lg border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-900 p-4 shadow-md transition-all duration-300 hover:scale-105 hover:shadow-lg">
      {/* Avatar Section */}
      <div className="flex flex-col justify-center items-center w-48 h-48">
        <div className="flex flex-col">
          <Avatar className="size-14 border border-gray-200 dark:border-gray-600 shadow-md">
            <AvatarImage src={image} alt={title} className="object-cover" />
            <AvatarFallback className="text-lg font-bold text-gray-700 dark:text-gray-200">
              {title[0]}
            </AvatarFallback>
          </Avatar>
        </div>

        <div className="mt-3 text-center">
          {dates && (
            <time className="text-xs text-blue-600 dark:text-blue-300">
              {dates}
            </time>
          )}
        </div>
      </div>
      <div className="w-full pl-6 py-6 h-full space-y-2">
        <h2 className="mt-1 text-lg font-semibold text-gray-900 dark:text-white">
          {title}
        </h2>
        {location && (
          <p className="text-sm text-gray-600 dark:text-gray-400">
            📍 {location}
          </p>
        )}
        {description && (
          <p className="mt-2 text-xs text-gray-700 dark:text-gray-300">
            {description}
          </p>
        )}

        {links && links.length > 0 && (
          <div className="mt-3 flex flex-wrap justify-center gap-3 pt-2">
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
    </div>
  );
}






import { Badge } from "@/components/ui/badge";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { cn } from "@/lib/utils";
import Image from "next/image";
import Link from "next/link";
import Markdown from "react-markdown";

interface Props {
  title: string;
  href?: string;
  description: string;
  dates: string;
  tags: readonly string[];
  link?: string;
  image?: string;
  video?: string;
  links?: readonly {
    icon: React.ReactNode;
    type: string;
    href: string;
  }[];
  className?: string;
}

export function ProjectCard({
  title,
  href,
  description,
  dates,
  tags,
  link,
  image,
  video,
  links,
  className,
}: Props) {
  return (
    <Card
      className={
        "flex flex-col m-6 w-full max-w-[480px] overflow-hidden border hover:shadow-lg backdrop-blur-lg hover:border-gray-400 rounded-2xl transition-all duration-300 ease-out h-full "
      }
    >
      <Link href={href || "#"} className="block">
        {video && (
          <video
            src={video}
            autoPlay
            loop
            muted
            playsInline
            className="pointer-events-none mx-auto h-48 w-full object-cover rounded-t-2xl"
          />
        )}
        {image && (
          <Image
            src={image}
            alt={title}
            width={500}
            height={300}
            className="h-48 w-full object-cover rounded-t-2xl"
          />
        )}
      </Link>
      <CardHeader className="px-5 py-4">
        <CardTitle className="text-lg font-semibold text-gray-800 dark:text-white">
          {title}
        </CardTitle>
        <time className="text-xs text-gray-500 dark:text-gray-100">{dates}</time>
        {link && (
          <div className="text-xs text-blue-500 underline">
            {link.replace("https://", "").replace("www.", "").replace("/", "")}
          </div>
        )}
      </CardHeader>
      <CardContent className="px-5 pb-3">
        <Markdown className="prose prose-sm text-gray-700 dark:prose-invert dark:text-gray-100">
          {description}
        </Markdown>
        {tags && tags.length > 0 && (
          <div className="mt-3 flex flex-wrap gap-2">
            {tags.map((tag) => (
              <Badge
                key={tag}
                className="px-2 py-1 text-xs font-medium bg-gray-100 text-gray-800 border border-gray-300 rounded-full"
              >
                {tag}
              </Badge>
            ))}
          </div>
        )}
      </CardContent>
      <CardFooter className="px-5 pb-4">
        {links && links.length > 0 && (
          <div className="flex flex-wrap gap-2">
            {links.map((link, idx) => (
              <Link href={link.href} key={idx} target="_blank">
                <Badge className="flex items-center gap-2 px-3 py-1 text-xs font-medium bg-blue-50 text-blue-700 border border-blue-200 rounded-lg hover:bg-blue-100">
                  {link.icon}
                  {link.type}
                </Badge>
              </Link>
            ))}
          </div>
        )}
      </CardFooter>
    </Card>
  );
}

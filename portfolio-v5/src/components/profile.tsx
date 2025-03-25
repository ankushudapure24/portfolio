import { TextAnimate } from "@/components/magicui/text-animate";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { Card, CardContent } from "@/components/ui/card";
import { DATA } from "@/data/resume";
import BlurFade from "./magicui/blur-fade";
import Markdown from "react-markdown";
import Image from "next/image";

const BLUR_FADE_DELAY = 0.04;


const ProfileCard = () => {
  return (
    <>
      <Card className="w-full text-white bg-black overflow-hidden">
        <div className="absolute inset-1 bottom-40 bg-[url('/pattern.svg')] bg-left-top bg-transparent opacity-50"></div>
        <CardContent className="flex flex-col sm:flex-row items-center gap-6 sm:gap-8 p-6">
          {/* Avatar Section */}

          <Avatar className="">
            <AvatarImage alt={DATA.name} src={DATA.avatarUrl} />
            <AvatarFallback className="text-2xl font-semibold">
              {DATA.initials}
            </AvatarFallback>
          </Avatar>

          {/* Text Section */}
          <div className="text-center sm:text-left">
            <TextAnimate
              animation="fadeIn"
              as="h1"
              className="text-4xl font-inter sm:text-5xl xl:text-8xl font-extrabold tracking-tight text-center bg-gradient-to-b from-[#4362ff] to-[#06081e] bg-clip-text text-transparent"
            >
              {`Hi, I'm ${DATA.name.split(" ")[0]}`}
            </TextAnimate>
            <TextAnimate
              animation="fadeIn"
              className="text-gray-400 text-lg md:text-2xl font-semibold drop-shadow-md transition-opacity duration-700 ease-in-out opacity-0 animate-fadeIn sm:text-xl mt-2 leading-relaxed dark:text-gray-400 py-4"
            >
              {DATA.description}
            </TextAnimate>
          </div>
        </CardContent>
        <div className=" p-8 mt-4 rounded-tr-3xl rounded-tl-3xl bg-white border-gray-500 dark:from-gray-900 dark:to-gray-800 overflow-hidden">
          <BlurFade delay={BLUR_FADE_DELAY * 4}>
            <Markdown className="prose max-w-full text-pretty font-sans sm:text-sm md:text:xl xl:text-2xl text-muted-foreground">
              {DATA.summary}
            </Markdown>
          </BlurFade>
        </div>
      </Card>
    </>
  );
};

export default ProfileCard;




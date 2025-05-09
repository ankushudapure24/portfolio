import { TextAnimate } from "@/components/magicui/text-animate";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { DATA } from "@/data/resume";
import BlurFade from "../magicui/blur-fade";
import Markdown from "react-markdown";
import Image from "next/image";
import { AuroraText } from "../magicui/aurora-text";

const BLUR_FADE_DELAY = 0.04;

const ProfileCard = () => {
  return (
    <Card className="w-full bg-white dark:bg-black rounded-xl shadow-lg overflow-hidden py-10 px-4 sm:px-6 lg:px-4">
      <div
        className="absolute hidden md:block lg:block inset-0 bottom-20 top-10 bg-[url('/pattern.svg')] bg-transparent opacity-40 dark:opacity-60  
    sm:mx-4
    max-sm:inset-x-2 max-sm:top-16 max-sm:bottom-28 max-sm:mx-2 "
        style={{
          maskImage:
            "radial-gradient(circle, rgba(0,0,0,0) 20%, rgba(0,0,0,1) 60%)",
          WebkitMaskImage:
            "radial-gradient(circle, rgba(0,0,0,0) 20%, rgba(0,0,0,1) 60%)",
        }}
      ></div>
      <Image
        src="/starss.png"
        alt="Stars"
        width={150}
        height={150}
        className="absolute top-[-20px] left-[-10px] opacity-85 pointer-events-none hidden sm:hidden md:hidden lg:block dark:invert"
      />
      <Image
        src="/starss.png"
        alt="Stars"
        width={150}
        height={150}
        className="absolute bottom-[-10px] right-[-10px] rotate-180 opacity-85 pointer-events-none dark:invert hidden sm:hidden md:hidden lg:block"
      />
      <CardContent className="flex mx-2 md:mt-12 flex-col items-center gap-5">
        <h1 className="text-5xl md:text-7xl font-bold text-black dark:text-white">
          Hey Hi! I&apos;m <AuroraText>{DATA.name.split(" ")[0]}</AuroraText>
        </h1>
        <TextAnimate className="text-lg sm:text-2xl text-gray-600 dark:text-gray-40">
          {DATA.description}
        </TextAnimate>
        <div className="flex flex-col mt-6 md:flex-row items-center md:items-start gap-4 md:gap-8 max-w-5xl bg-gradient-to-bl dark:from-gray-900 dark:via-violet-600 dark:to-blue-600 rounded-xl w-full px-2 py-1 shadow-[0_0_10px_rgba(124,58,237,0.5),0_0_20px_rgba(37,99,235,0.5)]">
          <div className="flex-shrink-0 m-2">
            <Avatar className="w-60 h-60 md:w-52 md:h-52 border-2 bg-white dark:bg-black border-black dark:border-white rounded-2xl">
              <AvatarImage src={DATA.avatarUrl} />
              <AvatarFallback>{DATA.name.charAt(0)}</AvatarFallback>
            </Avatar>
          </div>

          <div className="relative h-auto md:h-52 p-3 m-2 mx-4 mb-4 md:m-2 bg-violet-100 dark:bg-black/35 rounded-2xl overflow-auto text-center">
            <BlurFade delay={0.2}>
              <Markdown className="prose dark:prose-invert text-base sm:text-base md:text-xl text-left">
                {DATA.summary || "Here's something about me..."}
              </Markdown>
            </BlurFade>
          </div>
        </div>

        <div className="flex gap-4 mt-6 md:mb-6">
          <Button
            variant="default"
            onClick={() => {
              document
                .getElementById("contact")
                ?.scrollIntoView({ behavior: "smooth" });
            }}
          >
            Let&apos;s Connect
          </Button>
        </div>
      </CardContent>
    </Card>
  );
};

export default ProfileCard;

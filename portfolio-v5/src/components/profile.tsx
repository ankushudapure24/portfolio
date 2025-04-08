import { TextAnimate } from "@/components/magicui/text-animate";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { DATA } from "@/data/resume";
import BlurFade from "./magicui/blur-fade";
import Markdown from "react-markdown";
import Image from "next/image";
import { BorderBeam } from "./magicui/border-beam";
import { AuroraText } from "./magicui/aurora-text";
import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

const BLUR_FADE_DELAY = 0.04;

const ProfileCard = () => {
  const [isVisible, setIsVisible] = useState(false);
  return (
    <div className="relative flex flex-col items-center text-center px-4 sm:px-6 lg:px-4">
      <Card className="w-full bg-white dark:bg-black rounded-xl shadow-lg overflow-hidden p-8">
        <div
          className="absolute inset-0 bottom-40 top-10 bg-[url('/pattern.svg')] bg-transparent opacity-40 dark:opacity-60  
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
        <CardContent className="flex mt-12 flex-col items-center gap-6">
          <h1 className="text-6xl sm:text-7xl font-bold text-black dark:text-white">
            Hey, Hi! I'm <AuroraText>{DATA.name.split(" ")[0]}</AuroraText>
          </h1>
          <p className="text-lg sm:text-2xl text-gray-600 dark:text-gray-400">
            <TextAnimate>{DATA.description}</TextAnimate>
          </p>
          <div className="relative w-56 h-56 flex items-center justify-center">
            <AnimatePresence mode="wait">
              {!isVisible ? (
                <motion.div
                  key="avatar"
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.5 }}
                  className="absolute inset-0 flex items-center justify-center"
                >
                  <Avatar className="w-56 h-56 border-2 border-black dark:border-white rounded-full">
                    <AvatarImage src={DATA.avatarUrl} />
                    <AvatarFallback>{DATA.name.charAt(0)}</AvatarFallback>
                  </Avatar>
                </motion.div>
              ) : (
                <motion.div
                  key="about"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.5 }}
                  className="absolute inset-0 flex items-center justify-center"
                >
                  <div
                    className="w-96 h-64 mt-4 p-4 bg-gray-100 dark:bg-gray-900 rounded-2xl overflow-auto text-left"
                    style={{
                      scrollbarWidth: "none", // Firefox
                      msOverflowStyle: "none", // IE 10+
                    }}
                  >
                    <BlurFade delay={0.2}>
                      <Markdown className="prose dark:prose-invert text-sm sm:text-base">
                        {DATA.summary || "Here's something about me..."}
                      </Markdown>
                    </BlurFade>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          <div className="flex gap-4 mt-6">
            <Button variant="default" onClick={() => setIsVisible(!isVisible)}>
              {isVisible ? "Back" : "About Me"}
            </Button>
          </div>
        </CardContent>
      </Card>
      <Card></Card>
    </div>
  );
};

export default ProfileCard;


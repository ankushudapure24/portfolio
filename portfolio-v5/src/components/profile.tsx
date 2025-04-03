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
import { motion } from "framer-motion";

// import {
//   Drawer,
//   DrawerClose,
//   DrawerContent,
//   DrawerDescription,
//   DrawerFooter,
//   DrawerHeader,
//   DrawerTitle,
//   DrawerTrigger,
// } from "@/components/ui/drawer";




const BLUR_FADE_DELAY = 0.04;

const ProfileCard = () => {
   const [isVisible, setIsVisible] = useState(false);
  return (
    <div className="relative flex flex-col items-center text-center px-4 sm:px-6 lg:px-8">
      <div
        className="absolute inset-1 bottom-40 top-10 bg-[url('/pattern.svg')] bg-left-top bg-transparent opacity-40 dark:opacity-70 mx-8"
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
        className="absolute top-[-20px] left-[-10px] opacity-85 pointer-events-none dark:invert"
      />
      <Image
        src="/starss.png"
        alt="Stars"
        width={150}
        height={150}
        className="absolute bottom-[140px] right-[-10px] rotate-180 opacity-85 pointer-events-none dark:invert"
      />

      <Card className="w-full bg-white dark:bg-black rounded-xl shadow-lg overflow-hidden p-8">
        <CardContent className="flex mt-12 flex-col items-center gap-6">
          <h1 className="text-6xl sm:text-7xl font-bold text-black dark:text-white">
            Hey, Hi! I'm <AuroraText>{DATA.name.split(" ")[0]}</AuroraText>
          </h1>
          <p className="text-lg sm:text-2xl text-gray-600 dark:text-gray-400">
            <TextAnimate>{DATA.description}</TextAnimate>
          </p>
          <Avatar className="w-56 mt-4 h-56 rounded-full">
            <AvatarImage alt={DATA.name} src={DATA.avatarUrl} />
            <AvatarFallback className="text-2xl font-semibold">
              {DATA.initials}
            </AvatarFallback>
            <BorderBeam size={450} />
          </Avatar>
          <div className="flex gap-4 mt-4">
            {/* <Button className="bg-black text-white  dark:bg-white dark:text-black px-6 py-3 rounded-full hover:bg-gray-800">
              Let's Connect
            </Button> */}
            {/* <Drawer>
              <DrawerTrigger asChild>
                <Button
                  variant="default"
                  onClick={() => setIsVisible(!isVisible)}
                >
                  About me
                </Button>
              </DrawerTrigger>
              <DrawerContent>
                <div className="mx-auto w-full max-w-sm">
                  <DrawerDescription>
                    <div className=" p-6 mt-6 rounded-3xl bg-gray-50 overflow-hidden">
                      <BlurFade delay={BLUR_FADE_DELAY * 4}>
                        <Markdown className="prose max-w-full text-pretty font-sans sm:text-sm md:text:xl xl:text-xl text-muted-foreground">
                          {DATA.summary}
                        </Markdown>
                      </BlurFade>
                    </div>
                  </DrawerDescription>
                </div>
              </DrawerContent>
            </Drawer> */}
            {/* <Button className="bg-gray-200 text-black px-6 py-3 rounded-full hover:bg-gray-300">
              View Projects
            </Button> */}
            <Button variant="default" onClick={() => setIsVisible(!isVisible)}>
              About me
            </Button>
          </div>
        </CardContent>
      </Card>
      <div className="flex flex-col items-center">
        {isVisible && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.5 }}
            className="p-6 mt-6 rounded-3xl bg-gray-50 overflow-hidden"
          >
            <BlurFade delay={BLUR_FADE_DELAY * 4}>
              <Markdown className="prose max-w-full text-pretty font-sans sm:text-sm md:text-xl xl:text-xl text-muted-foreground">
                {DATA.summary}
              </Markdown>
            </BlurFade>
          </motion.div>
        )}
      </div>
      <Card></Card>
    </div>
  );
};

export default ProfileCard;

// import { TextAnimate } from "@/components/magicui/text-animate";
// import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
// import { Card, CardContent } from "@/components/ui/card";
// import { DATA } from "@/data/resume";
// import BlurFade from "./magicui/blur-fade";
// import Markdown from "react-markdown";
// import Image from "next/image";

// const BLUR_FADE_DELAY = 0.04;

// const ProfileCard = () => {
//   return (
//     <>
//       <Card className="w-full text-white bg-black overflow-hidden h-full">
//         {/* <div className="absolute inset-1 bottom-48 bg-[url('/pattern.svg')] bg-left-top bg-transparent opacity-50"></div> */}
//         <CardContent className="flex flex-col sm:flex-row items-center gap-6 sm:gap-8 p-6">
//           {/* Text Section */}
//           <div className="text-center sm:text-left">
//             <TextAnimate
//               animation="fadeIn"
//               as="h1"
//               className="text-4xl font-inter sm:text-5xl xl:text-8xl font-extrabold tracking-tight text-center bg-gradient-to-b from-[#4362ff] to-[#06081e] bg-clip-text text-transparent"
//             >
//               {`Hi, I'm ${DATA.name.split(" ")[0]}`}
//             </TextAnimate>
//             <div className="w-auto mx-20 h-full">
//               <TextAnimate
//                 animation="fadeIn"
//                 className="text-gray-400 text-lg md:text-2xl  font-semibold drop-shadow-md transition-opacity duration-700 ease-in-out opacity-0 animate-fadeIn sm:text-xl mt-2 leading-relaxed dark:text-gray-400 py-4"
//               >
//                 {DATA.description}
//               </TextAnimate>
//             </div>
//           </div>
//           {/* Avatar Section */}

//           <Avatar className="">
//             <AvatarImage alt={DATA.name} src={DATA.avatarUrl} />
//             <AvatarFallback className="text-2xl font-semibold">
//               {DATA.initials}
//             </AvatarFallback>
//           </Avatar>
//         </CardContent>
//         <div className=" p-8 mt-4 rounded-tr-3xl rounded-tl-3xl bg-white border-gray-500 dark:from-gray-900 dark:to-gray-800 overflow-hidden">
//           <BlurFade delay={BLUR_FADE_DELAY * 4}>
//             <Markdown className="prose max-w-full text-pretty font-sans sm:text-sm md:text:xl xl:text-2xl text-muted-foreground">
//               {DATA.summary}
//             </Markdown>
//           </BlurFade>
//         </div>
//       </Card>
//     </>
//   );
// };

// export default ProfileCard;

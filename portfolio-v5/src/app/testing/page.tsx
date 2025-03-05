"use client";
import { TextAnimate } from "@/components/magicui/text-animate";
import AnimatedListDemo from "@/components/ui/animated-lists";
import BlurFade from "@/components/magicui/blur-fade";
import BlurFadeText from "@/components/magicui/blur-fade-text";
import { DATA, DATA2 } from "@/data/resume";
import { Marquee } from "@/components/magicui/marquee";
import WorkCard from "@/components/ui/marquee-test";
import { IconCloudDemo } from "@/components/skils-icons";
import MenuDemo from "@/components/menus";
import ProfileCard from "@/components/profile";
import { Meteors } from "@/components/magicui/meteors";
import Markdown from "react-markdown";
import Image from "next/image";
import { RetroGrid } from "@/components/magicui/retro-grid";
import EducationItem from "@/components/education";
import { BorderBeam } from "@/components/magicui/border-beam";



const BLUR_FADE_DELAY = 0.04;

const TextAnimateTest = () => {
  return (
    <main className="flex flex-col min-h-[100dvh] space-y-8">
      <section id="hero">
        <div className="relative mx-auto w-full max-w-2xl space-y-8 overflow-hidden">
          <div className="gap-2 flex justify-between">
            <div className="flex-col flex flex-1 space-y-1.5">
              {/* <BlurFadeText
                delay={BLUR_FADE_DELAY}
                className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none"
                yOffset={8}
                text={`Hi, I'm ${DATA.name.split(" ")[0]} 👋`}
              />
              <BlurFadeText
                className="max-w-[600px] md:text-xl"
                delay={BLUR_FADE_DELAY}
                text={DATA.description}
              /> */}
              <Meteors />
              <ProfileCard />
            </div>
          </div>
        </div>
      </section>
      <section id="about">
        <BlurFade delay={BLUR_FADE_DELAY * 3}>
          <h2 className="text-xl font-bold">About</h2>
        </BlurFade>
        <BlurFade delay={BLUR_FADE_DELAY * 4}>
          <Markdown className="prose max-w-full text-pretty font-sans text-sm text-muted-foreground dark:prose-invert">
            {DATA.summary}
          </Markdown>
        </BlurFade>
      </section>
      <section id="education">
        <h2 className="text-xl font-bold mb-4">Education</h2>
        <div className="space-y-4">
          {DATA.education.map((edu, index) => (
            <EducationItem key={index} {...edu} />
          ))}
        </div>
      </section>
      <section id="work">
        <h2 className="text-xl font-bold mb-4">Work Experince</h2>
        <div className="relative flex w-full flex-col items-center justify-center overflow-hidden">
          <Marquee pauseOnHover className="[--duration:15s] flex">
            {DATA.work.map((job) => (
              <WorkCard key={job.company} {...job} />
            ))}
          </Marquee>
          <Marquee reverse pauseOnHover className="[--duration:20s] flex">
            {DATA.work.map((job) => (
              <WorkCard key={job.company} {...job} />
            ))}
          </Marquee>
        </div>
      </section>
      <section id="skills" className="py-8">
        {/* <div className="flex min-h-0 flex-col gap-y-3"> */}
        <div className="relative flex h-[500px] w-full flex-col items-center justify-center overflow-hidden rounded-lg border bg-background">
          <div className="absolute inset-0 z-0">
            <RetroGrid />
          </div>
          <h2 className="text-xl font-bold mb-4">Skills</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 px-4 md:px-10">
            {DATA2.skills.map((skill, index) => (
              <div
                key={index}
                className="bg-white/10 backdrop-blur-md border border-white/20 p-4 rounded-lg flex flex-col items-center justify-center shadow-lg hover:scale-105 transition-transform duration-300"
              >
                <Image
                  src={skill.icons_url}
                  alt={skill.name}
                  width={50}
                  height={50}
                  className="mb-2"
                />
                <span className="text-sm font-medium">{skill.name}</span>
              </div>
            ))}
          </div>
          <BorderBeam />
        </div>
      </section>
      <section id="others">
        <div className="flex flex-col items-center justify-center gap-8">
          <h2 className="text-xl font-bold">
            Below are the testing components
          </h2>
          <TextAnimate
            animation="blurIn"
            as="h1"
            className="text-4xl font-bold"
          >
            {DATA2.text}
          </TextAnimate>
          <TextAnimate animation="slideUp" by="word" className="text-2xl">
            {DATA2.text2}
          </TextAnimate>
        </div>
        <div>
          <AnimatedListDemo />
        </div>
        <div>
          <IconCloudDemo />
        </div>
        <div>
          <MenuDemo />
        </div>
      </section>
    </main>
  );
};

export default TextAnimateTest;

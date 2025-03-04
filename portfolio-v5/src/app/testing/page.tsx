"use client";
import { TextAnimate } from "@/components/magicui/text-animate";
import AnimatedListDemo from "@/components/ui/animated-lists";
import BlurFadeText from "@/components/magicui/blur-fade-text";
import { DATA, DATA2 } from "@/data/resume";
import { MarqueeWorkExperience } from "@/components/ui/marquee-test";
import { IconCloudDemo } from "@/components/skils-icons";
import MenuDemo from "@/components/menus";
import ProfileCard from "@/components/profile";
import { Meteors } from "@/components/magicui/meteors";
import EducationSection from "@/components/education";

const BLUR_FADE_DELAY = 0.04;

const TextAnimateTest = () => {
  return (
    <main className="flex flex-col min-h-[100dvh] space-y-10">
      <section id="hero">
        <div className="relative mx-auto w-full max-w-2xl space-y-8 overflow-hidden">
          <Meteors />
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
              <ProfileCard />
            </div>
          </div>
        </div>
      </section>
      <div className="flex flex-col items-center justify-center gap-8">
        <h2 className="text-xl font-bold">Below are the testing components</h2>
        <TextAnimate animation="blurIn" as="h1" className="text-4xl font-bold">
          {DATA2.text}
        </TextAnimate>
        <TextAnimate animation="slideUp" by="word" className="text-2xl">
          {DATA2.text2}
        </TextAnimate>
      </div>
      <div className="flex flex-col gap-4">
        <EducationSection />
        <MarqueeWorkExperience />
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
    </main>
  );
};

export default TextAnimateTest;

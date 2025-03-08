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
import { ProjectCard } from "@/components/project-card-new";
import { useState } from "react";
import { motion } from "framer-motion";


const BLUR_FADE_DELAY = 0.04;

const MyPage = () => {
  const [showProjects, setShowProjects] =   useState(false);
  return (
    <main className="flex flex-col min-h-[100dvh] space-y-8">
      <section id="hero">
        <div className="relative flex-col flex flex-1 overflow-hidden">
          <Meteors />
          <ProfileCard />
        </div>
      </section>
      <section id="about">
        <h2 className="text-xl font-bold mb-4 text-center"> About Me</h2>
        <div className="bg-gradient-to-r from-blue-50 to-indigo-100 p-5 rounded-3xl dark:from-gray-900 dark:to-gray-800 shadow-md">
          <BlurFade delay={BLUR_FADE_DELAY * 4}>
            <Markdown className="prose max-w-full text-pretty font-sans text-m text-muted-foreground dark:prose-invert">
              {DATA.summary}
            </Markdown>
          </BlurFade>
        </div>
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
        <div className="relative flex w-full flex-col items-center justify-center overflow-hidden rounded-lg">
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
          <BorderBeam />
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

      <section id="projects">
        <div className="relative w-full py-12 flex flex-col items-center">
          {/* Section Header */}
          <BlurFade delay={BLUR_FADE_DELAY * 11}>
            <div className="flex flex-col items-center justify-center space-y-6 text-center py-12">
              <div className="space-y-3">
                <div className="inline-block rounded-full bg-black text-white dark:bg-white dark:text-black px-4 py-1 text-sm font-semibold shadow-md">
                  My Projects
                </div>

                <TextAnimate
                  animation="blurIn"
                  as="h2"
                  className="text-4xl font-extrabold tracking-tight text-gray-900 dark:text-gray-100 sm:text-5xl"
                >
                  Explore My Work
                </TextAnimate>

                <TextAnimate
                  animation="fadeIn"
                  className="text-gray-600 dark:text-gray-300 md:text-lg lg:text-base/relaxed xl:text-lg/relaxed max-w-3xl mx-auto"
                >
                  I&apos;ve built a range of projects, from responsive websites
                  to full-stack applications. Here are some of my favorites!
                </TextAnimate>
              </div>
            </div>
          </BlurFade>

          {/* Projects Grid Container with Limited Height Initially */}
          <motion.div
            className="relative overflow-hidden transition-all w-full max-w-[800px]"
            style={{
              maxHeight: showProjects ? "1000px" : "400px", // Show half projects initially
            }}
            animate={{ maxHeight: showProjects ? "1280px" : "400px" }}
            transition={{ duration: 0.6, ease: "easeInOut" }}
          >
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
              {DATA.projects.map((project, id) => (
                <BlurFade
                  key={project.title}
                  delay={BLUR_FADE_DELAY * 12 + id * 0.05}
                >
                  <ProjectCard
                    href={project.href}
                    key={project.title}
                    title={project.title}
                    description={project.description}
                    dates={project.dates}
                    tags={project.technologies}
                    image={project.image}
                    video={project.video}
                    links={project.links}
                  />
                </BlurFade>
              ))}
            </div>

            {/* Gradient Fade Effect at Bottom Before Expanding */}
            {!showProjects && (
              <div className="absolute bottom-0 left-0 w-full h-20 bg-gradient-to-t from-white dark:from-black to-transparent"></div>
            )}
          </motion.div>

          {/* Show Projects Button */}
          <button
            onClick={() => setShowProjects(!showProjects)}
            className="mt-6 rounded-xl bg-black px-6 py-3 text-lg font-semibold text-white transition-all hover:scale-105 hover:bg-gray-800 dark:bg-white dark:text-black dark:hover:bg-gray-300"
          >
            {showProjects ? "Hide Projects" : "View Projects"}
          </button>
        </div>
      </section>

      <section id="hackathons">
        <div className="relative w-full py-8 flex flex-col items-center">
          <BlurFade delay={BLUR_FADE_DELAY * 11}>
            <div className="flex flex-col items-center justify-center space-y-6 text-center py-12 ">
              <div className="space-y-3">
                <div className="inline-block rounded-full bg-black text-white dark:bg-white dark:text-black px-4 py-1 text-sm font-semibold shadow-md">
                  Hackathons
                </div>

                <TextAnimate
                  animation="blurIn"
                  as="h2"
                  className="text-4xl font-extrabold tracking-tight text-gray-900 dark:text-gray-100 sm:text-5xl"
                >
                  Explore My Work
                </TextAnimate>

                <TextAnimate
                  animation="fadeIn"
                  className="text-gray-600 dark:text-gray-300 md:text-lg lg:text-base/relaxed xl:text-lg/relaxed max-w-3xl mx-auto"
                >
                  I&apos;ve built a range of projects, from responsive websites
                  to full-stack applications. Here are some of my favorites!
                </TextAnimate>
              </div>
            </div>
          </BlurFade>
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

export default MyPage;





"use client";
import { TextAnimate } from "@/components/magicui/text-animate";
import BlurFade from "@/components/magicui/blur-fade";
import { DATA, DATA2 } from "@/data/resume";
import { Marquee } from "@/components/magicui/marquee";
import WorkCard from "@/components/WorkCard";
import ProfileCard from "@/components/profile";
import Image from "next/image";
import { RetroGrid } from "@/components/magicui/retro-grid";
import EducationItem from "@/components/education";
import { BorderBeam } from "@/components/magicui/border-beam";
import { ProjectCard } from "@/components/project-card-new";
import Certification from "@/components/Certification";
import { useState } from "react";
import { motion } from "framer-motion";
import { HackathonCard } from "@/components/hacathon-card-new";
import Link from "next/link";
import { ContactCard } from "@/components/contact-card";
import { VelocityScroll } from "@/components/magicui/scroll-based-velocity";
import { AuroraText } from "@/components/magicui/aurora-text";
import AnimatedListDemo from "@/components/animated-lists";
import {
  Card,
  CardContent,
} from "@/components/ui/card";
import { WarpBackground } from "@/components/magicui/warp-background";
import Achievement from "@/components/Achivements";

const BLUR_FADE_DELAY = 0.04;

const MyPage = () => {
  const [hoveredImage, setHoveredImage] = useState("/uni.png");
  const [showProjects, setShowProjects] = useState(false);
  const [showAll, setShowAll] = useState(false);

  return (
    <main className="flex flex-col min-h-[100dvh] space-y-10">
      <section id="hero">
        <div className="relative flex flex-col overflow-hidden">
          <ProfileCard />
        </div>
      </section>
      <section id="about"></section>

      <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-12 text-center">
        <AuroraText>Education</AuroraText>
      </h2>
      <section className="education px-2 sm:px-6 md:px-10">
        <div className="flex flex-col md:flex-row sm:ml-4 rounded-3xl bg-gradient-to-r from-indigo-700 via-blue-400 to-indigo-600 bg-gray-900">
          <div className="flex flex-col md:w-1/2 gap-6 m-6 sm:m-10">
            {DATA.education.map((edu: any, index: number) => (
              <div
                key={index}
                onMouseEnter={() => setHoveredImage(edu.logoUrl)} // Change image on hover
                onMouseLeave={() => setHoveredImage("/uni.png")} // Reset on hover out
              >
                <EducationItem {...edu} />
              </div>
            ))}
          </div>

          <div className="hidden md:flex w-1/2 items-center justify-center">
            <Image
              src={hoveredImage}
              alt="Education"
              width={420}
              height={320}
              className="object-contain transition-all duration-300 ease-in-out"
            />
          </div>
        </div>
      </section>

      <section id="work" className="w-full sm:px-6 md:px-10">
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-12 text-center">
          <AuroraText>Work Experience</AuroraText>
        </h2>

        <div className="relative flex p-12 w-full flex-col items-center justify-center overflow-hidden rounded-3xl border bg-background">
          <div className="absolute inset-0 z-0">
            <RetroGrid />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-6 px-2 sm:px-4 md:px-8 z-10">
            {DATA.work.map((job) => (
              <WorkCard key={job.company} {...job} />
            ))}
          </div>

          <BorderBeam />
        </div>
      </section>

      <section id="skills" className="items-center flex flex-col">
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-12 text-center">
          <AuroraText>Skills</AuroraText>
        </h2>

        <div className="relative flex w-full max-w-[1420px] items-center justify-center rounded-lg gap-2 p-1 bg-gradient-to-r from-blue-400 to-indigo-700 overflow-hidden">
          <Marquee reverse pauseOnHover className="[--duration:20s] flex p-4">
            {DATA2.skills.map((skill, index) => (
              <div
                key={index}
                className="w-32 h-40 bg-white dark:bg-gray-800 border-2 border-indigo-950 dark:border-indigo-600 rounded-xl shadow-xl flex flex-col items-center justify-between p-4 transform transition-transform duration-300 hover:scale-105 hover:border-blue-500 group"
              >
                <div className="h-20 flex items-center justify-center">
                  <Image
                    src={skill.icons_url}
                    alt={skill.name}
                    width={44}
                    height={44}
                    className="transition-transform duration-300 group-hover:scale-110"
                  />
                </div>
                <div className="flex items-end justify-center">
                  <span className="text-md font-medium text-center text-gray-800 dark:text-gray-100">
                    {skill.name}
                  </span>
                </div>
              </div>
            ))}
          </Marquee>
        </div>
      </section>

      <section id="projects">
        <div className="relative w-full py-8 flex flex-col items-center rounded-3xl">
          <BlurFade delay={BLUR_FADE_DELAY * 11}>
            <div className="flex flex-col items-center justify-center space-y-6 text-center mb-6">
              <div className="space-y-3">
                {/* <div className="inline-block rounded-full bg-black text-white dark:bg-white dark:text-black px-4 py-1 text-sm font-semibold shadow-md">
                  My Projects
                </div> */}
                <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold  text-center">
                  <AuroraText>Projects</AuroraText>
                </h2>
                <div>
                  <h2 className="text-4xl font-extrabold sm:text-5xl ">
                    <AuroraText>Explore My Work</AuroraText>
                  </h2>
                </div>
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

          <motion.div
            className="relative overflow-hidden transition-all h-full w-full sm:max-h-none"
            style={{
              maxHeight: showProjects ? "none" : "420px",
            }}
            animate={
              typeof window !== "undefined" && window.innerWidth >= 640
                ? { maxHeight: showProjects ? "1200px" : "420px" }
                : {}
            }
            transition={{ duration: 0.6, ease: "easeInOut" }}
          >
            <div className="grid sm:grid-cols-1 md:grid-cols-2 p-6 gap-6 lg:grid-cols-3">
              {DATA.projects.map((project, id) => (
                <BlurFade
                  key={project.title}
                  delay={BLUR_FADE_DELAY * 12 + id * 0.05}
                >
                  <ProjectCard
                    href={project.href}
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

            {!showProjects && (
              <div className="absolute bottom-0 left-0 w-full h-20 bg-gradient-to-t from-white dark:from-black to-transparent"></div>
            )}
          </motion.div>

          <button
            onClick={() => setShowProjects(!showProjects)}
            className="mt-6 rounded-xl bg-black px-6 py-3 text-lg font-semibold text-white transition-all hover:scale-105 hover:bg-gray-800 dark:bg-white dark:text-black dark:hover:bg-gray-300"
          >
            {showProjects ? "Hide Projects" : "View Projects"}
          </button>
        </div>
      </section>

      <section id="hackathons">
        <div className="space-y-12 w-full py-8">
          <BlurFade delay={BLUR_FADE_DELAY * 13}>
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              {/* <VelocityScroll numRows={1}>
                <AuroraText>Hackathons</AuroraText>
              </VelocityScroll> */}
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold  text-center">
                <AuroraText>Hackathons</AuroraText>
              </h2>
              <div className="space-y-2">
                <div>
                  <h2 className="text-4xl font-extrabold sm:text-5xl bg-gradient-to-r from-blue-400 to-indigo-600 inline-block bg-clip-text text-transparent">
                    I like building things
                  </h2>
                </div>
                <TextAnimate className="text-gray-600 dark:text-gray-300 md:text-lg lg:text-base/relaxed xl:text-lg/relaxed max-w-3xl mx-auto">
                  {`During my time in university, I attended ${DATA.hackathons.length}+ hackathons. People from around the country would come together and build incredible things in 2-3 days. It was eye-opening to see the endless possibilities brought to life by a group of motivated and passionate individuals.`}
                </TextAnimate>
              </div>
            </div>
          </BlurFade>
          <BlurFade delay={BLUR_FADE_DELAY * 14}>
            <div className="flex flex-col sm:grid sm:grid-cols-2 lg:grid-cols-4 m-5 sm:m-10 gap-4 items-center">
              {DATA.hackathons
                .slice(0, showAll ? DATA.hackathons.length : 8)
                .map((project, id) => (
                  <BlurFade
                    key={project.title + project.dates}
                    delay={BLUR_FADE_DELAY * 15 + id * 0.05}
                  >
                    <HackathonCard
                      title={project.title}
                      description={project.description}
                      location={project.location}
                      dates={project.dates}
                      image={project.image}
                      links={project.links}
                    />
                  </BlurFade>
                ))}
            </div>
            {DATA.hackathons.length > 8 && (
              <div className="flex justify-center mt-4">
                <button
                  className="pinline-block rounded-lg bg-black text-white dark:bg-white dark:text-black px-4 py-1 text-lg shadow-md"
                  onClick={() => setShowAll(!showAll)}
                >
                  {showAll ? "Show Less" : "Show All"}
                </button>
              </div>
            )}
          </BlurFade>
        </div>
      </section>

      {DATA2.certifications && DATA2.certifications.length > 0 && (
        <section className="Certification relative">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-12 text-center">
            <AuroraText>Certificates</AuroraText>
          </h2>

          <div className="relative overflow-hidden px-4 sm:px-6 m-4 sm:m-6 flex flex-col items-center bg-gradient-to-r from-indigo-700 via-blue-400 to-indigo-600 p-4 sm:p-4 rounded-3xl dark:from-gray-950 dark:to-gray-950 shadow-md">
            <div
              className={`relative flex gap-4 items-center my-4 sm:my-6 w-full max-w-[1360px] px-2 sm:px-6 z-10 ${
                DATA2.certifications.length >= 4 ? "overflow-x-auto" : ""
              }`}
              style={{
                scrollbarWidth: "none",
                WebkitOverflowScrolling: "touch",
              }}
            >
              <div
                className={`flex gap-4 items-center p-3 ${
                  DATA2.certifications.length >= 4
                    ? "min-w-max"
                    : "w-full justify-center flex-wrap"
                }`}
                style={{ scrollBehavior: "smooth" }}
              >
                {DATA2.certifications.map((cert, index) => (
                  <Certification key={index} {...cert} />
                ))}
              </div>
            </div>
            {/* <BorderBeam /> */}
          </div>
        </section>
      )}

      {/* <section id="Achivements">
        <div className="flex flex-col mt-4 items-center">
          <VelocityScroll numRows={1}>
            <AuroraText>Achievements</AuroraText>
          </VelocityScroll>
        </div>
        <div className="relative overflow-hidden flex flex-col px-6 py-6 mt-12 mx-6 items-center p-5 rounded-3xl dark:from-black shadow-md">
          <div className="flex flex-col items-center max-w-6xl">
            <AnimatedListDemo />
          </div>
          <BorderBeam />
        </div>
      </section> */}

      <section id="Achivements">
        {/* <VelocityScroll numRows={1}>
          <AuroraText>Achievements</AuroraText>
        </VelocityScroll> */}
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-center">
          <AuroraText>Achievements</AuroraText>
        </h2>

        <div className="flex flex-col items-center">
          <WarpBackground className="w-full max-w-[1440px] px-4 sm:px-6 md:px-8 my-12 flex justify-center">
            <Card className="flex flex-col sm:w-auto md:w-auto lg:w-[840px]">
              <CardContent className="flex flex-col p-4 items-center">
                <AnimatedListDemo />
              </CardContent>
            </Card>
          </WarpBackground>
        </div>
      </section>

      <section id="contact">
        <div className="flex flex-col items-center justify-center gap-6 px-6 py-6 text-center">
          <BlurFade delay={BLUR_FADE_DELAY * 16}>
            <div className="space-y-4">
              <span className="inline-block rounded-full bg-foreground text-background px-4 py-1 text-sm font-medium">
                Contact
              </span>
              <h2 className="text-4xl sm:text-5xl font-extrabold bg-gradient-to-r from-blue-500 to-purple-500 bg-clip-text text-transparent">
                Get in Touch
              </h2>
              <p className="max-w-2xl mx-auto text-muted-foreground text-lg md:text-xl">
                Want to chat? Feel free to{" "}
                <Link
                  href={DATA.contact.social.X.url}
                  className="text-blue-500 font-semibold hover:underline"
                >
                  drop me a DM on Twitter
                </Link>
                , and I&apos;ll respond as soon as I can. Please note that all
                solicitations will be ignored.
              </p>
            </div>
          </BlurFade>
          <div className="grid items-center">
            <ContactCard />
          </div>
        </div>
      </section>
    </main>
  );
};

export default MyPage;

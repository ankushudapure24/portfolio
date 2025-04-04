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
import Achievement from "@/components/Achivements";
import { useState } from "react";
import { motion } from "framer-motion";
import { HackathonCard } from "@/components/hacathon-card-new";
import Link from "next/link";
import { ContactCard } from "@/components/contact-card";
import ParticlesDemo from "@/components/Partiles";
import { Meteors } from "@/components/magicui/meteors";
import { VelocityScroll } from "@/components/magicui/scroll-based-velocity";
import { AuroraText } from "@/components/magicui/aurora-text";
import AnimatedListDemo from "@/components/animated-lists";

const BLUR_FADE_DELAY = 0.04;

const MyPage = () => {
  const [hoveredImage, setHoveredImage] = useState("/uni.png"); 
  const [showProjects, setShowProjects] = useState(false);
  const [showAll, setShowAll] = useState(false);
  // const companies = [
  //   "/Vector.png",
  //   "/Vector.png",
  //   "/Vector.png",
  //   "/Vector.png",
  // ];
  return (
    <main className="flex flex-col min-h-[100dvh] space-y-10">
      <section id="hero">
        <div className="relative flex flex-col overflow-hidden">
          {/* <Meteors /> */}
          <ProfileCard />
        </div>
        {/* <div className="bg-white">
          <Marquee>
            {companies.concat(companies).map((logo, index) => (
              <Image
                key={index}
                src={logo}
                alt={`Logo ${index}`}
                width={30} // Adjust size as needed
                height={30}
                className="logo dark:bg-white"
              />
            ))}
          </Marquee>
        </div> */}
      </section>
      <section id="about"></section>

      <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold m-12 text-center">
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

      <section id="work" className="w-full px-4 sm:px-6 md:px-10">
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold m-12 text-center">
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

      <section id="skills">
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold m-12 text-center">
          <AuroraText>Skills</AuroraText>
        </h2>

        <div className="relative flex w-full flex-col items-center justify-center rounded-lg gap-2 p-2 bg-gradient-to-r from-blue-400 to-indigo-700 overflow-hidden">
          <Marquee reverse pauseOnHover className="[--duration:20s] flex">
            {DATA2.skills.map((skill, index) => (
              <div
                key={index}
                className="bg-white backdrop-blur-md border border-white/20 p-10 dark:bg-gray-800 rounded-lg flex flex-col items-center justify-center shadow-lg hover:scale-105 transition-transform duration-300"
              >
                <Image
                  src={skill.icons_url}
                  alt={skill.name}
                  width={30}
                  height={30}
                  className="mb-2"
                />
                <span className="text-sm font-medium">{skill.name}</span>
              </div>
            ))}
          </Marquee>
        </div>
      </section>

      <section id="projects">
        <div className="relative w-full py-8 flex flex-col items-center rounded-3xl">
          <BlurFade delay={BLUR_FADE_DELAY * 11}>
            <div className="flex flex-col items-center justify-center space-y-6 text-center py-12">
              <div className="space-y-3">
                <div className="inline-block rounded-full bg-black text-white dark:bg-white dark:text-black px-4 py-1 text-sm font-semibold shadow-md">
                  My Projects
                </div>
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
            className="relative overflow-hidden transition-all w-full"
            style={{
              maxHeight: showProjects ? "none" : "400px",
            }}
            animate={{ maxHeight: showProjects ? "1200px" : "400px" }}
            transition={{ duration: 0.6, ease: "easeInOut" }}
          >
            <div className="grid sm:grid-cols-1 md:grid-cols-2 gap-6 lg:grid-cols-3">
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
            <div className="flex flex-col items-center justify-center m-12 space-y-4 text-center">
              <VelocityScroll numRows={1}>
                <AuroraText>Hackathons</AuroraText>
              </VelocityScroll>
              <div className="space-y-2">
                {/* <div className="inline-block rounded-full bg-black text-white dark:bg-white dark:text-black px-4 py-1 text-lg font-semibold shadow-md">
                  Hackathons
                </div> */}
                <div>
                  {/* <h2 className="text-4xl font-extrabold sm:text-5xl bg-gradient-to-r from-blue-400 to-indigo-600 inline-block bg-clip-text text-transparent">
                    I like building things
                  </h2> */}
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
                  className="pinline-block rounded-xl bg-black text-white dark:bg-white dark:text-black px-4 py-1 text-lg shadow-md"
                  onClick={() => setShowAll(!showAll)}
                >
                  {showAll ? "Show Less" : "Show All"}
                </button>
              </div>
            )}
          </BlurFade>
        </div>
      </section>

      <section className="Certification relative">
        <div className="flex flex-col py-4 items-center m-12">
          {/* <div className="iinline-block rounded-full bg-black text-white dark:bg-white dark:text-black px-4 py-1 text-lg font-semibold shadow-md">
            Certificates
          </div> */}
          <VelocityScroll numRows={1}>
            <AuroraText>Certificates</AuroraText>
          </VelocityScroll>
        </div>

        {/* <div className="relative overflow-hidden m-12 flex flex-col items-center bg-gradient-to-r from-indigo-700 via-blue-400 to-indigo-600 p-5 rounded-3xl dark:from-gray-900 dark:to-gray-800 shadow-md">
          <div
            className="relative flex flex-row gap-4 h-full items-center my-6 max-w-7xl z-10"
            style={{ scrollbarWidth: "none" }}
          >
            {DATA2.certifications.map((cert, index) => (
              <Certification key={index} {...cert} />
            ))}
          </div>
          <BorderBeam />
        </div> */}
        <div className="relative overflow-hidden m-12 flex flex-col items-center bg-gradient-to-r from-indigo-700 via-blue-400 to-indigo-600 p-5 rounded-3xl dark:from-gray-950 dark:to-gray-950 shadow-md">
          <div
            className={`relative flex gap-4 items-center my-6 max-w-7xl z-10 ${
              DATA2.certifications.length > 4 ? "overflow-x-auto" : ""
            }`}
            style={{
              scrollbarWidth: "none",
              WebkitOverflowScrolling: "touch", 
            }}
          >
            <div
              className={`flex gap-4 items-center ${
                DATA2.certifications.length > 4 ? "min-w-max" : ""
              }`}
            >
              {DATA2.certifications.map((cert, index) => (
                
                  <Certification key={index} {...cert} />
                
              ))}
            </div>
          </div>
          <BorderBeam />
        </div>
      </section>

      <section id="Achivements">
        <div className="flex flex-col mt-4 items-center m-12">
          {/* <div className="iinline-block rounded-full bg-black text-white dark:bg-white dark:text-black px-4 py-1 text-lg font-semibold shadow-md">
            Achievements
          </div> */}
          <VelocityScroll numRows={1}>
            <AuroraText>Achievements</AuroraText>
          </VelocityScroll>
        </div>
        <div className="relative overflow-hidden flex flex-col m-12 items-center p-5 rounded-3xl dark:from-black shadow-md">
          {/* <div className="absolute inset-1 bg-[url('/pattern.svg')] bg-cover opacity-80 "></div> */}

          <div className="flex flex-col items-center my-10 max-w-6xl">
            {/* {DATA2.achievements.map((achieve, index) => (
              <Achievement key={index} {...achieve} />
            ))} */}
            <AnimatedListDemo />
          </div>
          <BorderBeam />
        </div>
      </section>
      <section id="contact">
        <div className="flex flex-col items-center justify-center gap-6 px-6 py-16 text-center">
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

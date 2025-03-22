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
import { HackathonCard} from "@/components/hacathon-card-new";
import Link from "next/link";
import { ContactCard } from "@/components/contact-card";
import ParticlesDemo from "@/components/Partiles";
import { Meteors } from "@/components/magicui/meteors";


const BLUR_FADE_DELAY = 0.04;

const MyPage = () => {
  const [hoveredImage, setHoveredImage] = useState("/uni.png"); // Default image
  const [showProjects, setShowProjects] = useState(false);
  const companies = ["/Vector.png", "/Vector.png", "/Vector.png", "/Vector.png"];
  return (
    <main className="flex flex-col min-h-[100dvh] space-y-10">
      <section id="hero">
        <div className="relative flex flex-col overflow-hidden">
          {/* <Meteors /> */}
          <ProfileCard />
        </div>
        <Marquee>
          {companies.concat(companies).map((logo, index) => (
            <Image
              key={index}
              src={logo}
              alt={`Logo ${index}`}
              width={30} // Adjust size as needed
              height={30}
              className="logo"
            />
          ))}
        </Marquee>
      </section>
      <section id="about">
        {/* <h2 className="text-4xl p-4 font-bold mb-4 text-center bg-gradient-to-r from-blue-400 to-indigo-700 bg-clip-text text-transparent">
          {" "}
          About Me
        </h2> */}
      </section>
      {/* <section id="education">
        <h2 className="text-4xl p-4 font-bold mb-4 text-center bg-gradient-to-r from-blue-400 to-indigo-700 bg-clip-text text-transparent">
          Education
        </h2>
        <div className="space-y-4 flex flex-col justify-center items-center mb-8">
          {DATA.education.map((edu, index) => (
            <EducationItem key={index} {...edu} />
          ))}
        </div>
      </section> */}
      <h2 className="text-4xl font-bold text-center bg-gradient-to-r from-blue-400 to-indigo-700 bg-clip-text text-transparent">
        Education
      </h2>
      {/* <section className="education">
        <div className="flex flex-row rounded-3xl bg-gradient-to-r from-indigo-500 to-blue-500  bg-gray-900">
          <div className="flex flex-col w-1/2 gap-12 m-10 ">
            {DATA.education.map((edu, index) => (
              <EducationItem key={index} {...edu} />
            ))}
          </div>
          <div className="w-1/2 items-center justify-center grid">
            <Image
              src="/waterloo.png"
              alt="Education"
              width={620}
              height={420}
              className="object-contain"
            />
          </div>
        </div>
      </section> */}
      <section className="education">
        <div className="flex flex-row rounded-3xl bg-gradient-to-r from-indigo-500 to-blue-500 bg-gray-900">
          {/* Left Side - Education Items */}
          <div className="flex flex-col w-1/2 gap-6 m-10">
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

          {/* Right Side - Dynamic Image */}
          <div className="w-1/2 flex items-center justify-center">
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

      <section id="work">
        <h2 className="text-4xl p-4 font-bold mb-4 text-center bg-gradient-to-r from-blue-400 to-indigo-700 bg-clip-text text-transparent">
          Work Experince
        </h2>
        <div className="relative flex p-6 w-full flex-col items-center justify-center overflow-hidden rounded-lg border bg-background">
          <div className="absolute inset-0 z-0">
            <RetroGrid />
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 px-4 md:px-10">
            {DATA.work.map((job) => (
              <WorkCard key={job.company} {...job} />
            ))}
          </div>
          <BorderBeam />
        </div>
        {/* <div className="relative flex w-full flex-col items-center justify-center overflow-hidden rounded-lg gap-2 p-2 max-w-6xl ml-60">
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
        </div> */}
      </section>
      <section id="skills">
        <h2 className="text-4xl p-4 font-bold mb-4 text-center bg-gradient-to-r from-blue-400 to-indigo-700 bg-clip-text text-transparent">
          Skills
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
                  width={50}
                  height={50}
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
                  <h2 className="text-4xl font-extrabold sm:text-5xl bg-gradient-to-r from-blue-400 to-indigo-600 inline-block bg-clip-text text-transparent">
                    Explore My Work
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
            className="relative overflow-hidden transition-all w-full max-w-[800px]"
            style={{
              maxHeight: showProjects ? "1000px" : "400px",
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
            <div className="flex flex-col items-center justify-center space-y-4 text-center bg-white">
              <div className="space-y-2">
                <div className="inline-block rounded-full bg-black text-white dark:bg-white dark:text-black px-4 py-1 text-sm font-semibold shadow-md">
                  Hackathons
                </div>
                {/* <TextAnimate
                  animation="blurIn"
                  as="h2"
                  className="text-4xl font-extrabold tracking-tight text-gray-900 dark:text-gray-100 sm:text-5xl"
                >
                  I like building things
                </TextAnimate> */}
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
            <div className="space-y-4 divide-dashed flex flex-col items-center">
              {DATA.hackathons.map((project, id) => (
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
          </BlurFade>
        </div>
      </section>
      <section className="Certification">
        <div className="flex flex-col py-4 items-center">
          <div className="inline-block rounded-full bg-black text-white  dark:text-black px-4 py-1 text-sm font-semibold shadow-md">
            Certificates
          </div>
        </div>
        <div className="relative overflow-hidden flex flex-col items-center bg-gradient-to-r from-indigo-700 to-blue-500 p-5 rounded-3xl dark:from-gray-900 dark:to-gray-800 shadow-md">
          <div className="flex flex-col items-center my-10 max-w-6xl">
            {DATA2.certifications.map((cert, index) => (
              <Certification key={index} {...cert} />
            ))}
          </div>

          {/* <BorderBeam /> */}
        </div>
      </section>
      <section id="Achivements">
        <div className="flex flex-col py-6 items-center">
          <div className="inline-block rounded-full bg-black text-white dark:bg-white dark:text-black px-4 py-1 text-sm font-semibold shadow-md ">
            Achievements
          </div>
        </div>
        <div className="relative overflow-hidden flex flex-col items-center bg-gradient-to-r from-indigo-700 to-blue-500 p-5 rounded-3xl dark:from-gray-900 dark:to-gray-800 shadow-md">
          <div className="flex flex-col items-center my-10 max-w-6xl">
            {DATA2.achievements.map((achieve, index) => (
              <Achievement key={index} {...achieve} />
            ))}
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

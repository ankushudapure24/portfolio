// import BlurFade from "@/components/magicui/blur-fade";
// import BlurFadeText from "@/components/magicui/blur-fade-text";
// import { ProjectCard } from "@/components/project-card";
// import { ResumeCard } from "@/components/resume-card";
// import { HackathonCard } from "@/components/hackathon-card";
// import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
// import { Badge } from "@/components/ui/badge";
// import { DATA, DATA2 } from "@/data/resume";
// import Link from "next/link";
// import Markdown from "react-markdown";
// import Image from "next/image";

// const BLUR_FADE_DELAY = 0.04;

// export default function Page() {
//   return (
//     <main className="flex flex-col min-h-[100dvh] space-y-10">
//       <section id="hero">
//         <div className="mx-auto w-full max-w-2xl space-y-8">
//           <div className="gap-2 flex justify-between">
//             <div className="flex-col flex flex-1 space-y-1.5">
//               <BlurFadeText
//                 delay={BLUR_FADE_DELAY}
//                 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none"
//                 yOffset={8}
//                 text={`Hi, I'm ${DATA.name.split(" ")[0]} 👋`}
//               />
//               <BlurFadeText
//                 className="max-w-[600px] md:text-xl"
//                 delay={BLUR_FADE_DELAY}
//                 text={DATA.description}
//               />
//             </div>
//             <BlurFade delay={BLUR_FADE_DELAY}>
//               <Avatar className="size-28 border">
//                 <AvatarImage alt={DATA.name} src={DATA.avatarUrl} />
//                 <AvatarFallback>{DATA.initials}</AvatarFallback>
//               </Avatar>
//             </BlurFade>
//           </div>
//         </div>
//       </section>
//       <section id="about">
//         <BlurFade delay={BLUR_FADE_DELAY * 3}>
//           <h2 className="text-xl font-bold">About</h2>
//         </BlurFade>
//         <BlurFade delay={BLUR_FADE_DELAY * 4}>
//           <Markdown className="prose max-w-full text-pretty font-sans text-sm text-muted-foreground dark:prose-invert">
//             {DATA.summary}
//           </Markdown>
//         </BlurFade>
//       </section>
//       <section id="work">
//         <div className="flex min-h-0 flex-col gap-y-3">
//           <BlurFade delay={BLUR_FADE_DELAY * 5}>
//             <h2 className="text-xl font-bold">Work Experience</h2>
//           </BlurFade>
//           {DATA.work.map((work, id) => (
//             <BlurFade
//               key={work.company}
//               delay={BLUR_FADE_DELAY * 6 + id * 0.05}
//             >
//               <ResumeCard
//                 key={work.company}
//                 logoUrl={work.logoUrl}
//                 altText={work.company}
//                 title={work.company}
//                 subtitle={work.title}
//                 href={work.href}
//                 badges={work.badges}
//                 period={`${work.start} - ${work.end ?? "Present"}`}
//                 description={work.description}
//               />
//             </BlurFade>
//           ))}
//         </div>
//       </section>
//       <section id="education">
//         <div className="flex min-h-0 flex-col gap-y-3">
//           <BlurFade delay={BLUR_FADE_DELAY * 7}>
//             <h2 className="text-xl font-bold">Education</h2>
//           </BlurFade>
//           {DATA.education.map((education, id) => (
//             <BlurFade
//               key={education.school}
//               delay={BLUR_FADE_DELAY * 8 + id * 0.05}
//             >
//               <ResumeCard
//                 key={education.school}
//                 href={education.href}
//                 logoUrl={education.logoUrl}
//                 altText={education.school}
//                 title={education.school}
//                 subtitle={education.degree}
//                 period={`${education.start} - ${education.end}`}
//               />
//             </BlurFade>
//           ))}
//         </div>
//       </section>
//       <section id="skills">
//         <div className="flex min-h-0 flex-col gap-y-3">
//           <BlurFade delay={BLUR_FADE_DELAY * 9}>
//             <h2 className="text-xl font-bold">Skills</h2>
//           </BlurFade>
//           {/* <div className="flex flex-wrap gap-1">
//             {DATA.skills.map((skill, id) => (
//               <BlurFade key={skill} delay={BLUR_FADE_DELAY * 10 + id * 0.05}>
//                 <Badge key={skill}>{skill}</Badge>
//               </BlurFade>
//             ))}
//           </div> */}
//         </div>
//       </section>

//       <section id="projects">
//         <div className="space-y-12 w-full py-12">
//           <BlurFade delay={BLUR_FADE_DELAY * 11}>
//             <div className="flex flex-col items-center justify-center space-y-4 text-center">
//               <div className="space-y-2">
//                 <div className="inline-block rounded-lg bg-foreground text-background px-3 py-1 text-sm">
//                   My Projects
//                 </div>
//                 <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
//                   Check out my latest work
//                 </h2>
//                 <p className="text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
//                   I&apos;ve worked on a variety of projects, from simple
//                   websites to complex web applications. Here are a few of my
//                   favorites.
//                 </p>
//               </div>
//             </div>
//           </BlurFade>
//           <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 max-w-[800px] mx-auto">
//             {DATA.projects.map((project, id) => (
//               <BlurFade
//                 key={project.title}
//                 delay={BLUR_FADE_DELAY * 12 + id * 0.05}
//               >
//                 <ProjectCard
//                   href={project.href}
//                   key={project.title}
//                   title={project.title}
//                   description={project.description}
//                   dates={project.dates}
//                   tags={project.technologies}
//                   image={project.image}
//                   video={project.video}
//                   links={project.links}
//                 />
//               </BlurFade>
//             ))}
//           </div>
//         </div>
//       </section>
//       <section id="hackathons">
//         <div className="space-y-12 w-full py-12">
//           <BlurFade delay={BLUR_FADE_DELAY * 13}>
//             <div className="flex flex-col items-center justify-center space-y-4 text-center">
//               <div className="space-y-2">
//                 <div className="inline-block rounded-lg bg-foreground text-background px-3 py-1 text-sm">
//                   Hackathons
//                 </div>
//                 <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
//                   I like building things
//                 </h2>
//                 <p className="text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
//                   During my time in university, I attended{" "}
//                   {DATA.hackathons.length}+ hackathons. People from around the
//                   country would come together and build incredible things in 2-3
//                   days. It was eye-opening to see the endless possibilities
//                   brought to life by a group of motivated and passionate
//                   individuals.
//                 </p>
//               </div>
//             </div>
//           </BlurFade>
//           <BlurFade delay={BLUR_FADE_DELAY * 14}>
//             <ul className="mb-4 ml-4 divide-y divide-dashed border-l">
//               {DATA.hackathons.map((project, id) => (
//                 <BlurFade
//                   key={project.title + project.dates}
//                   delay={BLUR_FADE_DELAY * 15 + id * 0.05}
//                 >
//                   <HackathonCard
//                     title={project.title}
//                     description={project.description}
//                     location={project.location}
//                     dates={project.dates}
//                     image={project.image}
//                     links={project.links}
//                   />
//                 </BlurFade>
//               ))}
//             </ul>
//           </BlurFade>
//         </div>
//       </section>
//       <section id="contact">
//         <div className="grid items-center justify-center gap-4 px-4 text-center md:px-6 w-full py-12">
//           <BlurFade delay={BLUR_FADE_DELAY * 16}>
//             <div className="space-y-3">
//               <div className="inline-block rounded-lg bg-foreground text-background px-3 py-1 text-sm">
//                 Contact
//               </div>
//               <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
//                 Get in Touch
//               </h2>
//               <p className="mx-auto max-w-[600px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
//                 Want to chat? Just shoot me a dm{" "}
//                 <Link
//                   href={DATA.contact.social.X.url}
//                   className="text-blue-500 hover:underline"
//                 >
//                   with a direct question on twitter
//                 </Link>{" "}
//                 and I&apos;ll respond whenever I can. I will ignore all
//                 soliciting.
//               </p>
//             </div>
//           </BlurFade>
//         </div>
//       </section>
//     </main>
//   );
// }

"use client";
import Link from "next/link";
import { TextAnimate } from "@/components/magicui/text-animate";
import BlurFade from "@/components/magicui/blur-fade";
import { DATA } from "@/data/resume";
import { Marquee } from "@/components/magicui/marquee";
import { RetroGrid } from "@/components/magicui/retro-grid";
import { BorderBeam } from "@/components/magicui/border-beam";
import WorkCard from "@/components/WorkCard";
import ProfileCard from "@/components/Hero";
import Image from "next/image";
import EducationItem from "@/components/EducationCard";
import { ProjectCard } from "@/components/ProjectCard";
import { HackathonCard } from "@/components/HackathonCard";
import Certification from "@/components/Certification";
import Achievement from "@/components/Achivements";
import { ContactCard } from "@/components/ContactCard";
import { AuroraText } from "@/components/magicui/aurora-text";
import { Card, CardContent } from "@/components/ui/card";
import { useEffect, useRef, useState } from "react";

const BLUR_FADE_DELAY = 0.04;

const MyPage = () => {
  const [showAllPro, setShowAllPro] = useState(false);
  const [showAll, setShowAll] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);
  const scrollRefCert = useRef<HTMLDivElement>(null);
  const autoScrollInterval = useRef<NodeJS.Timeout | null>(null);

  //for education cards
  useEffect(() => {
    autoScrollInterval.current = setInterval(() => {
      if (scrollRef.current) {
        const { scrollLeft, scrollWidth, clientWidth } = scrollRef.current;

        // Check if scrolled to (or near) the end
        if (scrollLeft + clientWidth >= scrollWidth - 10) {
          scrollRef.current.scrollTo({
            left: 0,
            behavior: "smooth",
          });
        } else {
          scrollRef.current.scrollBy({
            left: 330,
            behavior: "smooth",
          });
        }
      }
    }, 4000);

    return () => {
      if (autoScrollInterval.current) clearInterval(autoScrollInterval.current);
    };
  }, []);

  const scrollLeft = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({
        left: -330,
        behavior: "smooth",
      });
    }
  };

  const scrollRight = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({
        left: 330,
        behavior: "smooth",
      });
    }
  };

  //for certificates
  useEffect(() => {
    autoScrollInterval.current = setInterval(() => {
      if (scrollRefCert.current) {
        const { scrollLeft, scrollWidth, clientWidth } = scrollRefCert.current;

        // Check if we are at the end
        if (scrollLeft + clientWidth >= scrollWidth - 10) {
          // Reset to start
          scrollRefCert.current.scrollTo({
            left: 0,
            behavior: "smooth",
          });
        } else {
          // Scroll normally by 320px
          scrollRefCert.current.scrollBy({
            left: 320,
            behavior: "smooth",
          });
        }
      }
    }, 4000);

    return () => {
      if (autoScrollInterval.current) clearInterval(autoScrollInterval.current);
    };
  }, []);

  return (
    <main className="flex flex-col min-h-[100dvh] space-y-10">
      <section id="hero">
        <div className="relative flex flex-col overflow-hidden">
          <ProfileCard />
        </div>
      </section>
      <section id="about"></section>
      <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-center">
        <AuroraText>Education</AuroraText>
      </h2>
      <section className="education">
        <div className="flex flex-col mx-4 md:mx-10 mb-10 bg-white dark:bg-black rounded-3xl shadow-lg p-4 sm:p-6 relative overflow-hidden">
          <div
            ref={scrollRef}
            className="flex overflow-x-auto space-x-4 sm:space-x-6 mt-6 px-6 pb-4 scroll-smooth"
            style={{
              scrollbarWidth: "none",
              msOverflowStyle: "none",
            }}
          >
            {DATA.education.map((edu: any, index: number) => (
              <div
                key={index}
                className="min-w-[280px] sm:min-w-[300px] md:min-w-[320px] max-w-[340px] flex-shrink-0"
              >
                <EducationItem {...edu} />
              </div>
            ))}
          </div>

          <div className="flex justify-center space-x-6 sm:space-x-10 mt-4 px-2">
            <button
              onClick={scrollLeft}
              className="bg-gray-200 dark:bg-gray-700 rounded-full p-2 hover:bg-gray-300 dark:hover:bg-gray-600 transition"
              aria-label="Scroll Left"
            >
              ◀
            </button>
            <button
              onClick={scrollRight}
              className="bg-gray-200 dark:bg-gray-700 rounded-full p-2 hover:bg-gray-300 dark:hover:bg-gray-600 transition"
              aria-label="Scroll Right"
            >
              ▶
            </button>
          </div>

          <BorderBeam />
        </div>
      </section>
      {DATA.work && DATA.work.length > 0 && (
        <section id="work" className="w-full px-4 sm:px-6 md:px-10">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-center mb-8 sm:mb-10 md:mb-12">
            <AuroraText>Work Experience</AuroraText>
          </h2>

          <div className="relative flex flex-col items-center justify-center overflow-hidden rounded-3xl border bg-background p-4 sm:p-6 md:p-10">
            <div className="absolute inset-0 z-0">
              <RetroGrid />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6">
              {DATA.work.map((job) => (
                <WorkCard key={job.company} {...job} />
              ))}
            </div>

            <BorderBeam />
          </div>
        </section>
      )}
      <section id="skills" className="items-center flex flex-col">
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-12 text-center">
          <AuroraText>Skills</AuroraText>
        </h2>

        <div className="relative flex w-full md:max-w-[1400px] max-w-[350px] items-center justify-center rounded-lg gap-2 p-1 bg-gradient-to-r from-blue-400 to-indigo-700 overflow-hidden">
          <Marquee reverse pauseOnHover className="[--duration:20s] flex p-4">
            {DATA.skills.map((skill, index) => (
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
      {DATA.projects && DATA.projects.length > 0 && (
        <section id="projects">
          <div className="relative w-full py-8 flex flex-col items-center rounded-3xl">
            <BlurFade delay={BLUR_FADE_DELAY * 11}>
              <div className="flex flex-col items-center justify-center space-y-6 text-center mb-6">
                <div className="space-y-3">
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
                      I&apos;ve built a range of projects, from responsive
                      websites to full-stack applications. Here are some of my
                      favorites!
                  </TextAnimate>
                </div>
              </div>
            </BlurFade>
            <div className="space-y-12 w-full py-8">
              <BlurFade delay={BLUR_FADE_DELAY * 14}>
                <div className="grid sm:grid-cols-1 md:grid-cols-2 p-6 gap-6 lg:grid-cols-3">
                  {DATA.projects
                    .slice(0, showAllPro ? DATA.projects.length : 3)
                    .map((project, id) => (
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
                {DATA.hackathons.length > 8 && (
                  <div className="flex justify-center mt-4">
                    <button
                      className="mt-4 rounded-xl bg-black px-6 py-3 text-lg font-semibold text-white transition-all hover:scale-105 hover:bg-gray-800 dark:bg-white dark:text-black dark:hover:bg-gray-300"
                      onClick={() => setShowAllPro(!showAllPro)}
                    >
                      {showAllPro ? "Show Less" : "Show More"}
                    </button>
                  </div>
                )}
              </BlurFade>
            </div>
          </div>
        </section>
      )}
      {DATA.hackathons && DATA.hackathons.length > 0 && (
        <section id="hackathons">
          <div className="space-y-12 w-full py-8">
            <BlurFade delay={BLUR_FADE_DELAY * 13}>
              <div className="flex flex-col items-center justify-center space-y-4 text-center">
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
                    className="mt-4 rounded-xl bg-black px-6 py-3 text-lg font-semibold text-white transition-all hover:scale-105 hover:bg-gray-800 dark:bg-white dark:text-black dark:hover:bg-gray-300"
                    onClick={() => setShowAll(!showAll)}
                  >
                    {showAll ? "Show Less" : "Show All"}
                  </button>
                </div>
              )}
            </BlurFade>
          </div>
        </section>
      )}
      {DATA.certifications && DATA.certifications.length > 0 && (
        <section className="Certification relative">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-12 text-center">
            <AuroraText>Certificates</AuroraText>
          </h2>

          <div className="relative mx-6 overflow-hidden px-4 sm:px-6 lg:m-12 md:m-6 sm:m-6 flex flex-col items-center p-4 sm:p-4 rounded-3xl dark:from-gray-950 dark:to-gray-950 shadow-[0_0_10px_rgba(124,58,237,0.5),0_0_20px_rgba(37,99,235,0.5)]">
            <div
              ref={scrollRefCert}
              className={`relative flex gap-4 items-center my-4 sm:my-6 w-full max-w-[1360px] px-2 sm:px-6 z-10 scroll-smooth ${
                DATA.certifications.length >= 4 ? "overflow-x-auto" : ""
              }`}
              style={{
                scrollbarWidth: "none",
                WebkitOverflowScrolling: "touch",
              }}
            >
              <div
                className={`flex gap-4 items-center p-3 ${
                  DATA.certifications.length >= 4
                    ? "min-w-max"
                    : "w-full justify-center flex-wrap"
                }`}
              >
                {DATA.certifications.map((cert, index) => (
                  <Certification key={index} {...cert} />
                ))}
              </div>
            </div>
            <p className="text-black dark:text-gray-200 text-sm mt-2 italic text-center">
              Scroll horizontally to explore more certificates →
            </p>
          </div>
        </section>
      )}
      {DATA.achievements && DATA.achievements.length > 0 && (
        <section id="Achivements">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-center mb-10">
            <AuroraText>Achievements</AuroraText>
          </h2>
          <div className="relative overflow-hidden px-4 sm:px-6 lg:m-12 md:m-6 m-6 flex flex-col items-center p-4 sm:p-4 rounded-3xl dark:from-gray-950 dark:to-gray-950 shadow-[0_0_10px_rgba(124,58,237,0.5),0_0_20px_rgba(37,99,235,0.5)]">
            <Card className="flex flex-col sm:w-auto md:w-auto lg:w-[840px]">
              <CardContent className="flex flex-col p-4 items-center">
                {DATA.achievements.map((item, idx) => (
                  <Achievement {...item} key={idx} />
                ))}
              </CardContent>
            </Card>
          </div>
        </section>
      )}
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


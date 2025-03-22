
import { cn } from "@/lib/utils";
// import { Marquee } from "@/components/magicui/marquee";
import { DATA } from "@/data/resume";
import Image from "next/image";


const WorkCard = ({
  company,
  title,
  logoUrl,
  start,
  end,
}: {
  company: string;
  title: string;
  logoUrl: string;
  start: string;
  end: string;
}) => {
  return (
    <figure
      className={cn(
        "relative w-72 h-52 cursor-pointer overflow-hidden rounded-xl border p-4 flex flex-col items-center gap-4",
        // Light mode styles
        "border-gray-950/[.1] bg-white hover:bg-gray-950/[.05]",
        // Dark mode styles
        "dark:border-gray-50/[.1] dark:bg-gray-50/[.10] dark:hover:bg-gray-50/[.15]"
      )}
    >
      <Image
        src={logoUrl}
        alt={company}
        width={48}
        height={48}
        className="h-12 w-12 rounded-lg object-contain"
      />
      <div className="flex flex-col">
        <figcaption className="text-lg font-semibold dark:text-white">
          {company}
        </figcaption>
        <p className="text-sm text-gray-600 dark:text-gray-400">{title}</p>
        <p className="text-xs text-gray-500 dark:text-gray-400">
          {start} - {end}
        </p>
      </div>
    </figure>
  );
};

// export function MarqueeWorkExperience() {
//   return (
//     <section>
//       <h2 className="text-xl font-bold mb-4">Work Experince</h2>
//       <div className="relative flex w-full flex-col items-center justify-center overflow-hidden">
//         <Marquee pauseOnHover className="[--duration:15s] flex">
//           {DATA.work.map((job) => (
//             <WorkCard key={job.company} {...job} />
//           ))}
//         </Marquee>
//         <Marquee reverse pauseOnHover className="[--duration:20s] flex">
//           {DATA.work.map((job) => (
//             <WorkCard key={job.company} {...job} />
//           ))}
//         </Marquee>
//       </div>
//     </section>
//   );
// }

export default WorkCard;


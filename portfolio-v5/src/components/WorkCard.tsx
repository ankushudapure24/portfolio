import { cn } from "@/lib/utils";
// import { Marquee } from "@/components/magicui/marquee";
import { DATA } from "@/data/resume";
import Image from "next/image";
import { useState } from "react";

const WorkCard = ({
  company,
  title,
  logoUrl,
  start,
  end,
  description,
}: {
  company: string;
  title: string;
  logoUrl: string;
  start: string;
  end: string;
  description: string;
}) => {
  const [showModal, setShowModal] = useState(false);

  return (
    <>
      <figure
        className={cn(
          "relative w-72 h-auto cursor-pointer overflow-hidden rounded-xl border p-4 flex flex-col items-center gap-3",
          "border-gray-950/[.1] bg-white hover:bg-gray-950/[.05]",
          "dark:border-gray-50/[.1] dark:bg-gray-100/[.10] dark:hover:bg-gray-50/[.15]"
        )}
      >
        <Image
          src={logoUrl}
          alt={company}
          width={48}
          height={48}
          className="h-16 w-16 rounded-lg object-contain"
        />
        <div className="flex flex-col items-center text-center">
          <figcaption className="text-lg font-semibold dark:text-white">
            {company}
          </figcaption>
          <p className="text-sm text-gray-600 dark:text-gray-400">{title}</p>
          <p className="text-xs text-gray-500 dark:text-gray-400">
            {start} - {end}
          </p>
          <button
            onClick={() => setShowModal(true)}
            className="text-xs text-blue-500 dark:text-blue-400 mt-2 underline"
          >
            Show Details
          </button>
        </div>
      </figure>

      {showModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
          <div className="bg-white dark:bg-gray-900 p-6 rounded-lg shadow-lg max-w-md w-full">
            <h2 className="text-lg font-semibold dark:text-white">
              {company} - {title}
            </h2>
            <p className="text-sm text-gray-600 dark:text-gray-400 mt-2">
              {description}
            </p>
            <button
              onClick={() => setShowModal(false)}
              className="mt-4 text-sm text-red-500 dark:text-red-400 underline"
            >
              Close
            </button>
          </div>
        </div>
      )}
    </>
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
